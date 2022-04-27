#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "CameraBridge.h"
#import "Frame.h"
#import "FrameProcessorCallback.h"
#import "FrameProcessorRuntimeManager.h"
#import "FrameProcessorPluginRegistry.h"
#import "FrameProcessorPlugin.h"
#import "RCTBridge+runOnJS.h"
#import "JSConsoleHelper.h"

FOUNDATION_EXPORT double VisionCameraVersionNumber;
FOUNDATION_EXPORT const unsigned char VisionCameraVersionString[];

