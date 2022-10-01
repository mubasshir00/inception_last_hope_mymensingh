using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using TMPro;
using SimpleJSON;
using System;
using UnityEngine.Networking;
using UnityEngine.UI;

public class MagnitudeLoader : MonoBehaviour
{
    public TextAsset textJson;
    public TMP_Text output;
    public string jsonData;
    public RawImage imageScreen;

    public int currentIndex;

    [System.Serializable]
    public class MagnitudeForThisSession
    {
        public int year;

        public int day;

        public int h;

        public int m;

        public int s;

        public float lat;

        public float lon;

        public float magnitude;

        public string comments;
        
    }

    public MagnitudeForThisSession magnitude = new MagnitudeForThisSession();

    private string mjsonPath = "Assets/Resources/magnitude";
    private string mJson;
    

    public int yearReading = 0;
    public int dayReading = 0;
    public int hReading = 0;
    public int mReading = 0;
    public int sReading = 0;
    public float latReading = 0.0f;
    public float lonReading = 0.0f;
    public float magnitudeReading = 0.0f;
    public string commentsReading = "";

    public List<MagnitudeForThisSession> magnitudeLists = new List<MagnitudeForThisSession>();

    private void Start()
    {
        textJson = Resources.Load("magnitude") as TextAsset;
        jsonData = textJson.text;
        Debug.Log(jsonData);
        JSONNode parsedJSON = null;

        try
        {
            parsedJSON = JSON.Parse(jsonData);
            int i = 0;
            if (parsedJSON != null)
            {
                while(parsedJSON["data"][i] != null)
                {
                    MagnitudeForThisSession tempMagnitude = new MagnitudeForThisSession();
                    tempMagnitude.year = parsedJSON["data"][i]["Year"];
                    tempMagnitude.day = parsedJSON["data"][i]["Day"];
                    tempMagnitude.h = parsedJSON["data"][i]["H"];
                    tempMagnitude.m = parsedJSON["data"][i]["M"];
                    tempMagnitude.s = parsedJSON["data"][i]["S"];
                    tempMagnitude.lat = parsedJSON["data"][i]["Lat"];
                    tempMagnitude.lon = parsedJSON["data"][i]["Long"];
                    tempMagnitude.magnitude = parsedJSON["data"][i]["Magnitude"];
                    tempMagnitude.comments = parsedJSON["data"][i]["Comments"];
                    magnitudeLists.Add(tempMagnitude);
                    i = i + 1;
                }
            }

            MagnitudeForThisSession outputMagnitude = magnitudeLists[magnitudeLists.Count - 1];
            yearReading = outputMagnitude.year;
            dayReading = outputMagnitude.day;
            hReading = outputMagnitude.h;
            mReading = outputMagnitude.m;
            sReading = outputMagnitude.s;
            latReading = outputMagnitude.lat;
            lonReading = outputMagnitude.lon;
            magnitudeReading = outputMagnitude.magnitude;
            commentsReading = outputMagnitude.comments;
}

        catch (Exception e)
        {
            Debug.Log("Parse exception: " + e);
        }
        
        output.text = "Latitude: " + latReading.ToString()
            + "\nLongitude: " + lonReading.ToString()
            + "\nMagnitude: " + magnitudeReading.ToString();
    }

    private void SetOutputAndWeb(int i)
    {
        MagnitudeForThisSession outputMagnitude = magnitudeLists[i];
        yearReading = outputMagnitude.year;
        dayReading = outputMagnitude.day;
        hReading = outputMagnitude.h;
        mReading = outputMagnitude.m;
        sReading = outputMagnitude.s;
        latReading = outputMagnitude.lat;
        lonReading = outputMagnitude.lon;
        magnitudeReading = outputMagnitude.magnitude;
        commentsReading = outputMagnitude.comments;
        
        output.text = "Latitude: " + latReading.ToString()
            + "\nLongitude: " + lonReading.ToString()
            + "\nMagnitude: " + magnitudeReading.ToString();

        StartCoroutine(GetTexture(i));
    }

    IEnumerator GetTexture(int i)
    {
        UnityWebRequest www = UnityWebRequestTexture.GetTexture("https://earcelis.sirv.com/Images/" + i + ".png");
        yield return www.SendWebRequest();

        if (www.result != UnityWebRequest.Result.Success)
        {
            Debug.Log(www.error);
        }
        else
        {
            Texture myTexture = ((DownloadHandlerTexture)www.downloadHandler).texture;
            imageScreen.texture = myTexture;
        }
    }

    public void LeftClicked()
    {
        currentIndex--;
        if(currentIndex < 0)
        {
            currentIndex = magnitudeLists.Count - 1;
        }
        SetOutputAndWeb(currentIndex);
    }

    public void RightClicked()
    {
        currentIndex++;
        if (currentIndex > magnitudeLists.Count - 1)
        {
            currentIndex = 0;
        }
        SetOutputAndWeb(currentIndex);
    }
}
