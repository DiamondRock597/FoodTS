package com.foodts;

import android.annotation.SuppressLint;

import android.view.Gravity;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

class MyToast extends ReactContextBaseJavaModule {
    private static  ReactApplicationContext reactContext;

    MyToast(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "MyToast";
    }

    @SuppressLint("ShowToast")
    @ReactMethod
    public void onCompletedOrders(Boolean pointerInside){
        Toast.makeText(reactContext,"Thank you, your complete order",Toast.LENGTH_LONG).show();
    }

}
