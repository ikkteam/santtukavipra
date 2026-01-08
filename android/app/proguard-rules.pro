##############################
## React Native Core
##############################
-keep class com.facebook.react.** { *; }
-dontwarn com.facebook.react.**

# React Native Android JS executor
-keepclassmembers class * extends com.facebook.react.bridge.JavaScriptModule { *; }

# Hermes
-keep class com.facebook.hermes.** { *; }
-dontwarn com.facebook.hermes.**

# Keep methods annotated with @ReactMethod
-keepclassmembers class * {
    @com.facebook.react.bridge.ReactMethod <methods>;
}

##############################
## React Native Screens
##############################
-keep class com.swmansion.rnscreens.** { *; }
-dontwarn com.swmansion.rnscreens.**

-keep class androidx.fragment.app.FragmentContainerView { *; }
-keep class androidx.fragment.app.FragmentManager { *; }
-keep class androidx.fragment.app.Fragment { *; }
-dontwarn androidx.fragment.app.**

##############################
## Safe Area Context
##############################
-keep class com.th3rdwave.safeareacontext.** { *; }
-dontwarn com.th3rdwave.safeareacontext.**

# Gson (sometimes used by libraries)
-keep class com.google.gson.** { *; }
-dontwarn com.google.gson.**

##############################
## Networking / JSON
##############################
# OkHttp
-dontwarn okhttp3.**
-keep class okhttp3.** { *; }
-dontwarn okio.**

##############################
## Misc
##############################
# Flipper (debug only) – safe to ignore warnings
-dontwarn com.facebook.flipper.**
-dontwarn com.facebook.soloader.**

# Keep annotations
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes InnerClasses

-keep class androidx.lifecycle.** { *; }
-dontwarn androidx.lifecycle.**

-keep class androidx.appcompat.** { *; }
-dontwarn androidx.appcompat.**

# Retain enums
-keepclassmembers enum * { *; }

# Avoid stripping Kotlin metadata
-keepclassmembers class kotlin.Metadata { *; }
-keep class kotlin.** { *; }
-dontwarn kotlin.**