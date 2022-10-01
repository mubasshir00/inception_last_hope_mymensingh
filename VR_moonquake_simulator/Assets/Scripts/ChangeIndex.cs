using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeIndex : MonoBehaviour
{
    public MagnitudeLoader magnitudeLoader;
    bool touched = false;
    private void OnTriggerEnter(Collider other)
    {
        if(other.gameObject.tag == "Hand")
        {
            if(this.gameObject.name == "Previous")
            {
                if (!touched)
                {
                    magnitudeLoader.LeftClicked();
                    touched = true;
                }
            }

            if (this.gameObject.name == "Next")
            {
                if (!touched)
                {
                    magnitudeLoader.RightClicked();
                    touched = true;
                }
            }
        }
    }

    private void OnTriggerExit(Collider other)
    {
        if(other.gameObject.tag == "Hand")
        {
            if (touched)
            {
                touched = false;
            }
        }
    }
}
