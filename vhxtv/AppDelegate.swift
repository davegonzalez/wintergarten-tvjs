//
//  AppDelegate.swift
//  vhxtv
//
//  Created by David Gonzalez on 7/25/16.
//  Copyright © 2016 David Gonzalez. All rights reserved.
//

import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {

    var window: UIWindow?
    
    var appController: TVApplicationController?
    
    static let TVBaseURL = "http://localhost:9001"
    static let TVBootURL = "\(AppDelegate.TVBaseURL)/public/index.js"
    
    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        self.window = UIWindow(frame: UIScreen.mainScreen().bounds)
        
        let appControllerContext = TVApplicationControllerContext()
        let javascriptURL = NSURL(string: AppDelegate.TVBootURL)
        
        appControllerContext.javaScriptApplicationURL = javascriptURL!
        
        if let options = launchOptions {
            for (kind, value) in options {
                if let kindStr = kind as? String {
                    appControllerContext.launchOptions[kindStr] = value
                }
            }
        }
        
        self.appController = TVApplicationController(context: appControllerContext, window: self.window, delegate: self)
        return true
    }

}

