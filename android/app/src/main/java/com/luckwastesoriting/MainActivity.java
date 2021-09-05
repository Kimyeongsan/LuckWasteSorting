package com.luckwastesoriting;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // splash Add
import org.devio.rn.splashscreen.SplashScreen; // splash Add

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

   // Android Splash Add (2021.09.05 Up)
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this); 
      super.onCreate(savedInstanceState);
  }
  
  @Override
  protected String getMainComponentName() {
    return "LuckWasteSoriting";
  }
}
