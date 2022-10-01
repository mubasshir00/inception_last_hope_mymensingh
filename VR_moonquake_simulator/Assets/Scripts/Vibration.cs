using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Vibration : MonoBehaviour
{
    float speed = 5.0f;
    float intensity = 0.1f;

    public MagnitudeLoader magnitudeLoader;

    // Update is called once per frame
    void Update()
    {
        transform.localPosition = (intensity * magnitudeLoader.magnitudeReading * new Vector3(Mathf.PerlinNoise(speed * Time.time, 1),
                                                          Mathf.PerlinNoise(speed * Time.time, 2),
                                                          Mathf.PerlinNoise(speed * Time.time, 3)))/3;
    }
}
