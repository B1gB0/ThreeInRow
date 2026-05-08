var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.JointSpring' )
  var i2317 = data
  i2316.spring = i2317[0]
  i2316.damper = i2317[1]
  i2316.targetPosition = i2317[2]
  return i2316
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.JointMotor' )
  var i2319 = data
  i2318.m_TargetVelocity = i2319[0]
  i2318.m_Force = i2319[1]
  i2318.m_FreeSpin = i2319[2]
  return i2318
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.JointLimits' )
  var i2321 = data
  i2320.m_Min = i2321[0]
  i2320.m_Max = i2321[1]
  i2320.m_Bounciness = i2321[2]
  i2320.m_BounceMinVelocity = i2321[3]
  i2320.m_ContactDistance = i2321[4]
  i2320.minBounce = i2321[5]
  i2320.maxBounce = i2321[6]
  return i2320
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.JointDrive' )
  var i2323 = data
  i2322.m_PositionSpring = i2323[0]
  i2322.m_PositionDamper = i2323[1]
  i2322.m_MaximumForce = i2323[2]
  i2322.m_UseAcceleration = i2323[3]
  return i2322
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2325 = data
  i2324.m_Spring = i2325[0]
  i2324.m_Damper = i2325[1]
  return i2324
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2327 = data
  i2326.m_Limit = i2327[0]
  i2326.m_Bounciness = i2327[1]
  i2326.m_ContactDistance = i2327[2]
  return i2326
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2329 = data
  i2328.m_ExtremumSlip = i2329[0]
  i2328.m_ExtremumValue = i2329[1]
  i2328.m_AsymptoteSlip = i2329[2]
  i2328.m_AsymptoteValue = i2329[3]
  i2328.m_Stiffness = i2329[4]
  return i2328
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2331 = data
  i2330.m_LowerAngle = i2331[0]
  i2330.m_UpperAngle = i2331[1]
  return i2330
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2333 = data
  i2332.m_MotorSpeed = i2333[0]
  i2332.m_MaximumMotorTorque = i2333[1]
  return i2332
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2335 = data
  i2334.m_DampingRatio = i2335[0]
  i2334.m_Frequency = i2335[1]
  i2334.m_Angle = i2335[2]
  return i2334
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2337 = data
  i2336.m_LowerTranslation = i2337[0]
  i2336.m_UpperTranslation = i2337[1]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2338 = root || new pc.UnityMaterial()
  var i2339 = data
  i2338.name = i2339[0]
  request.r(i2339[1], i2339[2], 0, i2338, 'shader')
  i2338.renderQueue = i2339[3]
  i2338.enableInstancing = !!i2339[4]
  var i2341 = i2339[5]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2341[i + 0]) );
  }
  i2338.floatParameters = i2340
  var i2343 = i2339[6]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2343[i + 0]) );
  }
  i2338.colorParameters = i2342
  var i2345 = i2339[7]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2345[i + 0]) );
  }
  i2338.vectorParameters = i2344
  var i2347 = i2339[8]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2347[i + 0]) );
  }
  i2338.textureParameters = i2346
  var i2349 = i2339[9]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2349[i + 0]) );
  }
  i2338.materialFlags = i2348
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2353 = data
  i2352.name = i2353[0]
  i2352.value = i2353[1]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2357 = data
  i2356.name = i2357[0]
  i2356.value = new pc.Color(i2357[1], i2357[2], i2357[3], i2357[4])
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2361 = data
  i2360.name = i2361[0]
  i2360.value = new pc.Vec4( i2361[1], i2361[2], i2361[3], i2361[4] )
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2365 = data
  i2364.name = i2365[0]
  request.r(i2365[1], i2365[2], 0, i2364, 'value')
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2369 = data
  i2368.name = i2369[0]
  i2368.enabled = !!i2369[1]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2371 = data
  i2370.name = i2371[0]
  i2370.width = i2371[1]
  i2370.height = i2371[2]
  i2370.mipmapCount = i2371[3]
  i2370.anisoLevel = i2371[4]
  i2370.filterMode = i2371[5]
  i2370.hdr = !!i2371[6]
  i2370.format = i2371[7]
  i2370.wrapMode = i2371[8]
  i2370.alphaIsTransparency = !!i2371[9]
  i2370.alphaSource = i2371[10]
  i2370.graphicsFormat = i2371[11]
  i2370.sRGBTexture = !!i2371[12]
  i2370.desiredColorSpace = i2371[13]
  i2370.wrapU = i2371[14]
  i2370.wrapV = i2371[15]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2373 = data
  i2372.name = i2373[0]
  i2372.atlasId = i2373[1]
  i2372.mipmapCount = i2373[2]
  i2372.hdr = !!i2373[3]
  i2372.size = i2373[4]
  i2372.anisoLevel = i2373[5]
  i2372.filterMode = i2373[6]
  var i2375 = i2373[7]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 4) {
    i2374.push( UnityEngine.Rect.MinMaxRect(i2375[i + 0], i2375[i + 1], i2375[i + 2], i2375[i + 3]) );
  }
  i2372.rects = i2374
  i2372.wrapU = i2373[8]
  i2372.wrapV = i2373[9]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2379 = data
  i2378.name = i2379[0]
  i2378.index = i2379[1]
  i2378.startup = !!i2379[2]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2381 = data
  i2380.aspect = i2381[0]
  i2380.orthographic = !!i2381[1]
  i2380.orthographicSize = i2381[2]
  i2380.backgroundColor = new pc.Color(i2381[3], i2381[4], i2381[5], i2381[6])
  i2380.nearClipPlane = i2381[7]
  i2380.farClipPlane = i2381[8]
  i2380.fieldOfView = i2381[9]
  i2380.depth = i2381[10]
  i2380.clearFlags = i2381[11]
  i2380.cullingMask = i2381[12]
  i2380.rect = i2381[13]
  request.r(i2381[14], i2381[15], 0, i2380, 'targetTexture')
  i2380.usePhysicalProperties = !!i2381[16]
  i2380.focalLength = i2381[17]
  i2380.sensorSize = new pc.Vec2( i2381[18], i2381[19] )
  i2380.lensShift = new pc.Vec2( i2381[20], i2381[21] )
  i2380.gateFit = i2381[22]
  i2380.commandBufferCount = i2381[23]
  i2380.cameraType = i2381[24]
  i2380.enabled = !!i2381[25]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2383 = data
  i2382.name = i2383[0]
  i2382.tagId = i2383[1]
  i2382.enabled = !!i2383[2]
  i2382.isStatic = !!i2383[3]
  i2382.layer = i2383[4]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2385 = data
  i2384.type = i2385[0]
  i2384.color = new pc.Color(i2385[1], i2385[2], i2385[3], i2385[4])
  i2384.cullingMask = i2385[5]
  i2384.intensity = i2385[6]
  i2384.range = i2385[7]
  i2384.spotAngle = i2385[8]
  i2384.shadows = i2385[9]
  i2384.shadowNormalBias = i2385[10]
  i2384.shadowBias = i2385[11]
  i2384.shadowStrength = i2385[12]
  i2384.shadowResolution = i2385[13]
  i2384.lightmapBakeType = i2385[14]
  i2384.renderMode = i2385[15]
  request.r(i2385[16], i2385[17], 0, i2384, 'cookie')
  i2384.cookieSize = i2385[18]
  i2384.shadowNearPlane = i2385[19]
  i2384.occlusionMaskChannel = i2385[20]
  i2384.isBaked = !!i2385[21]
  i2384.mixedLightingMode = i2385[22]
  i2384.enabled = !!i2385[23]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2387 = data
  i2386.ambientIntensity = i2387[0]
  i2386.reflectionIntensity = i2387[1]
  i2386.ambientMode = i2387[2]
  i2386.ambientLight = new pc.Color(i2387[3], i2387[4], i2387[5], i2387[6])
  i2386.ambientSkyColor = new pc.Color(i2387[7], i2387[8], i2387[9], i2387[10])
  i2386.ambientGroundColor = new pc.Color(i2387[11], i2387[12], i2387[13], i2387[14])
  i2386.ambientEquatorColor = new pc.Color(i2387[15], i2387[16], i2387[17], i2387[18])
  i2386.fogColor = new pc.Color(i2387[19], i2387[20], i2387[21], i2387[22])
  i2386.fogEndDistance = i2387[23]
  i2386.fogStartDistance = i2387[24]
  i2386.fogDensity = i2387[25]
  i2386.fog = !!i2387[26]
  request.r(i2387[27], i2387[28], 0, i2386, 'skybox')
  i2386.fogMode = i2387[29]
  var i2389 = i2387[30]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2389[i + 0]) );
  }
  i2386.lightmaps = i2388
  i2386.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2387[31], i2386.lightProbes)
  i2386.lightmapsMode = i2387[32]
  i2386.mixedBakeMode = i2387[33]
  i2386.environmentLightingMode = i2387[34]
  i2386.ambientProbe = new pc.SphericalHarmonicsL2(i2387[35])
  request.r(i2387[36], i2387[37], 0, i2386, 'customReflection')
  request.r(i2387[38], i2387[39], 0, i2386, 'defaultReflection')
  i2386.defaultReflectionMode = i2387[40]
  i2386.defaultReflectionResolution = i2387[41]
  i2386.sunLightObjectId = i2387[42]
  i2386.pixelLightCount = i2387[43]
  i2386.defaultReflectionHDR = !!i2387[44]
  i2386.hasLightDataAsset = !!i2387[45]
  i2386.hasManualGenerate = !!i2387[46]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'lightmapColor')
  request.r(i2393[2], i2393[3], 0, i2392, 'lightmapDirection')
  request.r(i2393[4], i2393[5], 0, i2392, 'shadowMask')
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2394 = root || new UnityEngine.LightProbes()
  var i2395 = data
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2403 = data
  var i2405 = i2403[0]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2405[i + 0]));
  }
  i2402.ShaderCompilationErrors = i2404
  i2402.name = i2403[1]
  i2402.guid = i2403[2]
  var i2407 = i2403[3]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( i2407[i + 0] );
  }
  i2402.shaderDefinedKeywords = i2406
  var i2409 = i2403[4]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2409[i + 0]) );
  }
  i2402.passes = i2408
  var i2411 = i2403[5]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2411[i + 0]) );
  }
  i2402.usePasses = i2410
  var i2413 = i2403[6]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2413[i + 0]) );
  }
  i2402.defaultParameterValues = i2412
  request.r(i2403[7], i2403[8], 0, i2402, 'unityFallbackShader')
  i2402.readDepth = !!i2403[9]
  i2402.hasDepthOnlyPass = !!i2403[10]
  i2402.isCreatedByShaderGraph = !!i2403[11]
  i2402.disableBatching = !!i2403[12]
  i2402.compiled = !!i2403[13]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2417 = data
  i2416.shaderName = i2417[0]
  i2416.errorMessage = i2417[1]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2422 = root || new pc.UnityShaderPass()
  var i2423 = data
  i2422.id = i2423[0]
  i2422.subShaderIndex = i2423[1]
  i2422.name = i2423[2]
  i2422.passType = i2423[3]
  i2422.grabPassTextureName = i2423[4]
  i2422.usePass = !!i2423[5]
  i2422.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[6], i2422.zTest)
  i2422.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[7], i2422.zWrite)
  i2422.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[8], i2422.culling)
  i2422.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2423[9], i2422.blending)
  i2422.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2423[10], i2422.alphaBlending)
  i2422.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[11], i2422.colorWriteMask)
  i2422.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[12], i2422.offsetUnits)
  i2422.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[13], i2422.offsetFactor)
  i2422.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[14], i2422.stencilRef)
  i2422.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[15], i2422.stencilReadMask)
  i2422.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[16], i2422.stencilWriteMask)
  i2422.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2423[17], i2422.stencilOp)
  i2422.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2423[18], i2422.stencilOpFront)
  i2422.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2423[19], i2422.stencilOpBack)
  var i2425 = i2423[20]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2425[i + 0]) );
  }
  i2422.tags = i2424
  var i2427 = i2423[21]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( i2427[i + 0] );
  }
  i2422.passDefinedKeywords = i2426
  var i2429 = i2423[22]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2429[i + 0]) );
  }
  i2422.passDefinedKeywordGroups = i2428
  var i2431 = i2423[23]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2431[i + 0]) );
  }
  i2422.variants = i2430
  var i2433 = i2423[24]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2433[i + 0]) );
  }
  i2422.excludedVariants = i2432
  i2422.hasDepthReader = !!i2423[25]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2435 = data
  i2434.val = i2435[0]
  i2434.name = i2435[1]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2437 = data
  i2436.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[0], i2436.src)
  i2436.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[1], i2436.dst)
  i2436.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2437[2], i2436.op)
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2439 = data
  i2438.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2439[0], i2438.pass)
  i2438.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2439[1], i2438.fail)
  i2438.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2439[2], i2438.zFail)
  i2438.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2439[3], i2438.comp)
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2443 = data
  i2442.name = i2443[0]
  i2442.value = i2443[1]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2447 = data
  var i2449 = i2447[0]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( i2449[i + 0] );
  }
  i2446.keywords = i2448
  i2446.hasDiscard = !!i2447[1]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2453 = data
  i2452.passId = i2453[0]
  i2452.subShaderIndex = i2453[1]
  var i2455 = i2453[2]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( i2455[i + 0] );
  }
  i2452.keywords = i2454
  i2452.vertexProgram = i2453[3]
  i2452.fragmentProgram = i2453[4]
  i2452.exportedForWebGl2 = !!i2453[5]
  i2452.readDepth = !!i2453[6]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'shader')
  i2458.pass = i2459[2]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2463 = data
  i2462.name = i2463[0]
  i2462.type = i2463[1]
  i2462.value = new pc.Vec4( i2463[2], i2463[3], i2463[4], i2463[5] )
  i2462.textureValue = i2463[6]
  i2462.shaderPropertyFlag = i2463[7]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2465 = data
  i2464.name = i2465[0]
  i2464.ascent = i2465[1]
  i2464.originalLineHeight = i2465[2]
  i2464.fontSize = i2465[3]
  var i2467 = i2465[4]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2467[i + 0]) );
  }
  i2464.characterInfo = i2466
  request.r(i2465[5], i2465[6], 0, i2464, 'texture')
  i2464.originalFontSize = i2465[7]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2471 = data
  i2470.index = i2471[0]
  i2470.advance = i2471[1]
  i2470.bearing = i2471[2]
  i2470.glyphWidth = i2471[3]
  i2470.glyphHeight = i2471[4]
  i2470.minX = i2471[5]
  i2470.maxX = i2471[6]
  i2470.minY = i2471[7]
  i2470.maxY = i2471[8]
  i2470.uvBottomLeftX = i2471[9]
  i2470.uvBottomLeftY = i2471[10]
  i2470.uvBottomRightX = i2471[11]
  i2470.uvBottomRightY = i2471[12]
  i2470.uvTopLeftX = i2471[13]
  i2470.uvTopLeftY = i2471[14]
  i2470.uvTopRightX = i2471[15]
  i2470.uvTopRightY = i2471[16]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2473 = data
  i2472.name = i2473[0]
  i2472.bytes64 = i2473[1]
  i2472.data = i2473[2]
  return i2472
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2474 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2475 = data
  i2474.useSafeMode = !!i2475[0]
  i2474.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2475[1], i2474.safeModeOptions)
  i2474.timeScale = i2475[2]
  i2474.unscaledTimeScale = i2475[3]
  i2474.useSmoothDeltaTime = !!i2475[4]
  i2474.maxSmoothUnscaledTime = i2475[5]
  i2474.rewindCallbackMode = i2475[6]
  i2474.showUnityEditorReport = !!i2475[7]
  i2474.logBehaviour = i2475[8]
  i2474.drawGizmos = !!i2475[9]
  i2474.defaultRecyclable = !!i2475[10]
  i2474.defaultAutoPlay = i2475[11]
  i2474.defaultUpdateType = i2475[12]
  i2474.defaultTimeScaleIndependent = !!i2475[13]
  i2474.defaultEaseType = i2475[14]
  i2474.defaultEaseOvershootOrAmplitude = i2475[15]
  i2474.defaultEasePeriod = i2475[16]
  i2474.defaultAutoKill = !!i2475[17]
  i2474.defaultLoopType = i2475[18]
  i2474.debugMode = !!i2475[19]
  i2474.debugStoreTargetId = !!i2475[20]
  i2474.showPreviewPanel = !!i2475[21]
  i2474.storeSettingsLocation = i2475[22]
  i2474.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2475[23], i2474.modules)
  i2474.createASMDEF = !!i2475[24]
  i2474.showPlayingTweens = !!i2475[25]
  i2474.showPausedTweens = !!i2475[26]
  return i2474
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2476 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2477 = data
  i2476.logBehaviour = i2477[0]
  i2476.nestedTweenFailureBehaviour = i2477[1]
  return i2476
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2478 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2479 = data
  i2478.showPanel = !!i2479[0]
  i2478.audioEnabled = !!i2479[1]
  i2478.physicsEnabled = !!i2479[2]
  i2478.physics2DEnabled = !!i2479[3]
  i2478.spriteEnabled = !!i2479[4]
  i2478.uiEnabled = !!i2479[5]
  i2478.textMeshProEnabled = !!i2479[6]
  i2478.tk2DEnabled = !!i2479[7]
  i2478.deAudioEnabled = !!i2479[8]
  i2478.deUnityExtendedEnabled = !!i2479[9]
  i2478.epoOutlineEnabled = !!i2479[10]
  return i2478
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2480 = root || request.c( 'TMPro.TMP_Settings' )
  var i2481 = data
  i2480.m_enableWordWrapping = !!i2481[0]
  i2480.m_enableKerning = !!i2481[1]
  i2480.m_enableExtraPadding = !!i2481[2]
  i2480.m_enableTintAllSprites = !!i2481[3]
  i2480.m_enableParseEscapeCharacters = !!i2481[4]
  i2480.m_EnableRaycastTarget = !!i2481[5]
  i2480.m_GetFontFeaturesAtRuntime = !!i2481[6]
  i2480.m_missingGlyphCharacter = i2481[7]
  i2480.m_warningsDisabled = !!i2481[8]
  request.r(i2481[9], i2481[10], 0, i2480, 'm_defaultFontAsset')
  i2480.m_defaultFontAssetPath = i2481[11]
  i2480.m_defaultFontSize = i2481[12]
  i2480.m_defaultAutoSizeMinRatio = i2481[13]
  i2480.m_defaultAutoSizeMaxRatio = i2481[14]
  i2480.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2481[15], i2481[16] )
  i2480.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2481[17], i2481[18] )
  i2480.m_autoSizeTextContainer = !!i2481[19]
  i2480.m_IsTextObjectScaleStatic = !!i2481[20]
  var i2483 = i2481[21]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 1, i2482, '')
  }
  i2480.m_fallbackFontAssets = i2482
  i2480.m_matchMaterialPreset = !!i2481[22]
  request.r(i2481[23], i2481[24], 0, i2480, 'm_defaultSpriteAsset')
  i2480.m_defaultSpriteAssetPath = i2481[25]
  i2480.m_enableEmojiSupport = !!i2481[26]
  i2480.m_MissingCharacterSpriteUnicode = i2481[27]
  i2480.m_defaultColorGradientPresetsPath = i2481[28]
  request.r(i2481[29], i2481[30], 0, i2480, 'm_defaultStyleSheet')
  i2480.m_StyleSheetsResourcePath = i2481[31]
  request.r(i2481[32], i2481[33], 0, i2480, 'm_leadingCharacters')
  request.r(i2481[34], i2481[35], 0, i2480, 'm_followingCharacters')
  i2480.m_UseModernHangulLineBreakingRules = !!i2481[36]
  return i2480
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2486 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'atlas')
  i2486.normalStyle = i2487[2]
  i2486.normalSpacingOffset = i2487[3]
  i2486.boldStyle = i2487[4]
  i2486.boldSpacing = i2487[5]
  i2486.italicStyle = i2487[6]
  i2486.tabSize = i2487[7]
  i2486.hashCode = i2487[8]
  request.r(i2487[9], i2487[10], 0, i2486, 'material')
  i2486.materialHashCode = i2487[11]
  i2486.m_Version = i2487[12]
  i2486.m_SourceFontFileGUID = i2487[13]
  request.r(i2487[14], i2487[15], 0, i2486, 'm_SourceFontFile_EditorRef')
  request.r(i2487[16], i2487[17], 0, i2486, 'm_SourceFontFile')
  i2486.m_AtlasPopulationMode = i2487[18]
  i2486.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2487[19], i2486.m_FaceInfo)
  var i2489 = i2487[20]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.add(request.d('UnityEngine.TextCore.Glyph', i2489[i + 0]));
  }
  i2486.m_GlyphTable = i2488
  var i2491 = i2487[21]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.add(request.d('TMPro.TMP_Character', i2491[i + 0]));
  }
  i2486.m_CharacterTable = i2490
  var i2493 = i2487[22]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 2, i2492, '')
  }
  i2486.m_AtlasTextures = i2492
  i2486.m_AtlasTextureIndex = i2487[23]
  i2486.m_IsMultiAtlasTexturesEnabled = !!i2487[24]
  i2486.m_ClearDynamicDataOnBuild = !!i2487[25]
  var i2495 = i2487[26]
  var i2494 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.add(request.d('UnityEngine.TextCore.GlyphRect', i2495[i + 0]));
  }
  i2486.m_UsedGlyphRects = i2494
  var i2497 = i2487[27]
  var i2496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.add(request.d('UnityEngine.TextCore.GlyphRect', i2497[i + 0]));
  }
  i2486.m_FreeGlyphRects = i2496
  i2486.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2487[28], i2486.m_fontInfo)
  i2486.m_AtlasWidth = i2487[29]
  i2486.m_AtlasHeight = i2487[30]
  i2486.m_AtlasPadding = i2487[31]
  i2486.m_AtlasRenderMode = i2487[32]
  var i2499 = i2487[33]
  var i2498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.add(request.d('TMPro.TMP_Glyph', i2499[i + 0]));
  }
  i2486.m_glyphInfoList = i2498
  i2486.m_KerningTable = request.d('TMPro.KerningTable', i2487[34], i2486.m_KerningTable)
  i2486.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2487[35], i2486.m_FontFeatureTable)
  var i2501 = i2487[36]
  var i2500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2501.length; i += 2) {
  request.r(i2501[i + 0], i2501[i + 1], 1, i2500, '')
  }
  i2486.fallbackFontAssets = i2500
  var i2503 = i2487[37]
  var i2502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2503.length; i += 2) {
  request.r(i2503[i + 0], i2503[i + 1], 1, i2502, '')
  }
  i2486.m_FallbackFontAssetTable = i2502
  i2486.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2487[38], i2486.m_CreationSettings)
  var i2505 = i2487[39]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('TMPro.TMP_FontWeightPair', i2505[i + 0]) );
  }
  i2486.m_FontWeightTable = i2504
  var i2507 = i2487[40]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('TMPro.TMP_FontWeightPair', i2507[i + 0]) );
  }
  i2486.fontWeights = i2506
  return i2486
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2509 = data
  i2508.m_FaceIndex = i2509[0]
  i2508.m_FamilyName = i2509[1]
  i2508.m_StyleName = i2509[2]
  i2508.m_PointSize = i2509[3]
  i2508.m_Scale = i2509[4]
  i2508.m_UnitsPerEM = i2509[5]
  i2508.m_LineHeight = i2509[6]
  i2508.m_AscentLine = i2509[7]
  i2508.m_CapLine = i2509[8]
  i2508.m_MeanLine = i2509[9]
  i2508.m_Baseline = i2509[10]
  i2508.m_DescentLine = i2509[11]
  i2508.m_SuperscriptOffset = i2509[12]
  i2508.m_SuperscriptSize = i2509[13]
  i2508.m_SubscriptOffset = i2509[14]
  i2508.m_SubscriptSize = i2509[15]
  i2508.m_UnderlineOffset = i2509[16]
  i2508.m_UnderlineThickness = i2509[17]
  i2508.m_StrikethroughOffset = i2509[18]
  i2508.m_StrikethroughThickness = i2509[19]
  i2508.m_TabWidth = i2509[20]
  return i2508
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2513 = data
  i2512.m_Index = i2513[0]
  i2512.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2513[1], i2512.m_Metrics)
  i2512.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2513[2], i2512.m_GlyphRect)
  i2512.m_Scale = i2513[3]
  i2512.m_AtlasIndex = i2513[4]
  i2512.m_ClassDefinitionType = i2513[5]
  return i2512
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2515 = data
  i2514.m_Width = i2515[0]
  i2514.m_Height = i2515[1]
  i2514.m_HorizontalBearingX = i2515[2]
  i2514.m_HorizontalBearingY = i2515[3]
  i2514.m_HorizontalAdvance = i2515[4]
  return i2514
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2517 = data
  i2516.m_X = i2517[0]
  i2516.m_Y = i2517[1]
  i2516.m_Width = i2517[2]
  i2516.m_Height = i2517[3]
  return i2516
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2520 = root || request.c( 'TMPro.TMP_Character' )
  var i2521 = data
  i2520.m_ElementType = i2521[0]
  i2520.m_Unicode = i2521[1]
  i2520.m_GlyphIndex = i2521[2]
  i2520.m_Scale = i2521[3]
  return i2520
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2526 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2527 = data
  i2526.Name = i2527[0]
  i2526.PointSize = i2527[1]
  i2526.Scale = i2527[2]
  i2526.CharacterCount = i2527[3]
  i2526.LineHeight = i2527[4]
  i2526.Baseline = i2527[5]
  i2526.Ascender = i2527[6]
  i2526.CapHeight = i2527[7]
  i2526.Descender = i2527[8]
  i2526.CenterLine = i2527[9]
  i2526.SuperscriptOffset = i2527[10]
  i2526.SubscriptOffset = i2527[11]
  i2526.SubSize = i2527[12]
  i2526.Underline = i2527[13]
  i2526.UnderlineThickness = i2527[14]
  i2526.strikethrough = i2527[15]
  i2526.strikethroughThickness = i2527[16]
  i2526.TabWidth = i2527[17]
  i2526.Padding = i2527[18]
  i2526.AtlasWidth = i2527[19]
  i2526.AtlasHeight = i2527[20]
  return i2526
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2530 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2531 = data
  i2530.id = i2531[0]
  i2530.x = i2531[1]
  i2530.y = i2531[2]
  i2530.width = i2531[3]
  i2530.height = i2531[4]
  i2530.xOffset = i2531[5]
  i2530.yOffset = i2531[6]
  i2530.xAdvance = i2531[7]
  i2530.scale = i2531[8]
  return i2530
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2532 = root || request.c( 'TMPro.KerningTable' )
  var i2533 = data
  var i2535 = i2533[0]
  var i2534 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.add(request.d('TMPro.KerningPair', i2535[i + 0]));
  }
  i2532.kerningPairs = i2534
  return i2532
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.KerningPair' )
  var i2539 = data
  i2538.xOffset = i2539[0]
  i2538.m_FirstGlyph = i2539[1]
  i2538.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2539[2], i2538.m_FirstGlyphAdjustments)
  i2538.m_SecondGlyph = i2539[3]
  i2538.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2539[4], i2538.m_SecondGlyphAdjustments)
  i2538.m_IgnoreSpacingAdjustments = !!i2539[5]
  return i2538
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2540 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2541 = data
  var i2543 = i2541[0]
  var i2542 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2543[i + 0]));
  }
  i2540.m_GlyphPairAdjustmentRecords = i2542
  return i2540
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2546 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2547 = data
  i2546.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2547[0], i2546.m_FirstAdjustmentRecord)
  i2546.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2547[1], i2546.m_SecondAdjustmentRecord)
  i2546.m_FeatureLookupFlags = i2547[2]
  return i2546
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2548 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2549 = data
  i2548.m_GlyphIndex = i2549[0]
  i2548.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2549[1], i2548.m_GlyphValueRecord)
  return i2548
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2550 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2551 = data
  i2550.m_XPlacement = i2551[0]
  i2550.m_YPlacement = i2551[1]
  i2550.m_XAdvance = i2551[2]
  i2550.m_YAdvance = i2551[3]
  return i2550
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2552 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2553 = data
  i2552.sourceFontFileName = i2553[0]
  i2552.sourceFontFileGUID = i2553[1]
  i2552.pointSizeSamplingMode = i2553[2]
  i2552.pointSize = i2553[3]
  i2552.padding = i2553[4]
  i2552.packingMode = i2553[5]
  i2552.atlasWidth = i2553[6]
  i2552.atlasHeight = i2553[7]
  i2552.characterSetSelectionMode = i2553[8]
  i2552.characterSequence = i2553[9]
  i2552.referencedFontAssetGUID = i2553[10]
  i2552.referencedTextAssetGUID = i2553[11]
  i2552.fontStyle = i2553[12]
  i2552.fontStyleModifier = i2553[13]
  i2552.renderMode = i2553[14]
  i2552.includeFontFeatures = !!i2553[15]
  return i2552
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'regularTypeface')
  request.r(i2557[2], i2557[3], 0, i2556, 'italicTypeface')
  return i2556
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2558 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'spriteSheet')
  var i2561 = i2559[2]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.add(request.d('TMPro.TMP_Sprite', i2561[i + 0]));
  }
  i2558.spriteInfoList = i2560
  var i2563 = i2559[3]
  var i2562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 1, i2562, '')
  }
  i2558.fallbackSpriteAssets = i2562
  i2558.hashCode = i2559[4]
  request.r(i2559[5], i2559[6], 0, i2558, 'material')
  i2558.materialHashCode = i2559[7]
  i2558.m_Version = i2559[8]
  i2558.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2559[9], i2558.m_FaceInfo)
  var i2565 = i2559[10]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.add(request.d('TMPro.TMP_SpriteCharacter', i2565[i + 0]));
  }
  i2558.m_SpriteCharacterTable = i2564
  var i2567 = i2559[11]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.add(request.d('TMPro.TMP_SpriteGlyph', i2567[i + 0]));
  }
  i2558.m_SpriteGlyphTable = i2566
  return i2558
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2570 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.hashCode = i2571[1]
  i2570.unicode = i2571[2]
  i2570.pivot = new pc.Vec2( i2571[3], i2571[4] )
  request.r(i2571[5], i2571[6], 0, i2570, 'sprite')
  i2570.id = i2571[7]
  i2570.x = i2571[8]
  i2570.y = i2571[9]
  i2570.width = i2571[10]
  i2570.height = i2571[11]
  i2570.xOffset = i2571[12]
  i2570.yOffset = i2571[13]
  i2570.xAdvance = i2571[14]
  i2570.scale = i2571[15]
  return i2570
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2576 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2577 = data
  i2576.m_Name = i2577[0]
  i2576.m_HashCode = i2577[1]
  i2576.m_ElementType = i2577[2]
  i2576.m_Unicode = i2577[3]
  i2576.m_GlyphIndex = i2577[4]
  i2576.m_Scale = i2577[5]
  return i2576
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2581 = data
  request.r(i2581[0], i2581[1], 0, i2580, 'sprite')
  i2580.m_Index = i2581[2]
  i2580.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2581[3], i2580.m_Metrics)
  i2580.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2581[4], i2580.m_GlyphRect)
  i2580.m_Scale = i2581[5]
  i2580.m_AtlasIndex = i2581[6]
  i2580.m_ClassDefinitionType = i2581[7]
  return i2580
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2582 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2583 = data
  var i2585 = i2583[0]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.add(request.d('TMPro.TMP_Style', i2585[i + 0]));
  }
  i2582.m_StyleList = i2584
  return i2582
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2588 = root || request.c( 'TMPro.TMP_Style' )
  var i2589 = data
  i2588.m_Name = i2589[0]
  i2588.m_HashCode = i2589[1]
  i2588.m_OpeningDefinition = i2589[2]
  i2588.m_ClosingDefinition = i2589[3]
  i2588.m_OpeningTagArray = i2589[4]
  i2588.m_ClosingTagArray = i2589[5]
  i2588.m_OpeningTagUnicodeArray = i2589[6]
  i2588.m_ClosingTagUnicodeArray = i2589[7]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2591 = data
  var i2593 = i2591[0]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2593[i + 0]) );
  }
  i2590.files = i2592
  i2590.componentToPrefabIds = i2591[1]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2597 = data
  i2596.path = i2597[0]
  request.r(i2597[1], i2597[2], 0, i2596, 'unityObject')
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2599 = data
  var i2601 = i2599[0]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2601[i + 0]) );
  }
  i2598.scriptsExecutionOrder = i2600
  var i2603 = i2599[1]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2603[i + 0]) );
  }
  i2598.sortingLayers = i2602
  var i2605 = i2599[2]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2605[i + 0]) );
  }
  i2598.cullingLayers = i2604
  i2598.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2599[3], i2598.timeSettings)
  i2598.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2599[4], i2598.physicsSettings)
  i2598.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2599[5], i2598.physics2DSettings)
  i2598.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2599[6], i2598.qualitySettings)
  i2598.enableRealtimeShadows = !!i2599[7]
  i2598.enableAutoInstancing = !!i2599[8]
  i2598.enableStaticBatching = !!i2599[9]
  i2598.enableDynamicBatching = !!i2599[10]
  i2598.usePreservativeDynamicBatching = !!i2599[11]
  i2598.lightmapEncodingQuality = i2599[12]
  i2598.desiredColorSpace = i2599[13]
  var i2607 = i2599[14]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( i2607[i + 0] );
  }
  i2598.allTags = i2606
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2611 = data
  i2610.name = i2611[0]
  i2610.value = i2611[1]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2615 = data
  i2614.id = i2615[0]
  i2614.name = i2615[1]
  i2614.value = i2615[2]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2619 = data
  i2618.id = i2619[0]
  i2618.name = i2619[1]
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2621 = data
  i2620.fixedDeltaTime = i2621[0]
  i2620.maximumDeltaTime = i2621[1]
  i2620.timeScale = i2621[2]
  i2620.maximumParticleTimestep = i2621[3]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2623 = data
  i2622.gravity = new pc.Vec3( i2623[0], i2623[1], i2623[2] )
  i2622.defaultSolverIterations = i2623[3]
  i2622.bounceThreshold = i2623[4]
  i2622.autoSyncTransforms = !!i2623[5]
  i2622.autoSimulation = !!i2623[6]
  var i2625 = i2623[7]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2625[i + 0]) );
  }
  i2622.collisionMatrix = i2624
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2629 = data
  i2628.enabled = !!i2629[0]
  i2628.layerId = i2629[1]
  i2628.otherLayerId = i2629[2]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'material')
  i2630.gravity = new pc.Vec2( i2631[2], i2631[3] )
  i2630.positionIterations = i2631[4]
  i2630.velocityIterations = i2631[5]
  i2630.velocityThreshold = i2631[6]
  i2630.maxLinearCorrection = i2631[7]
  i2630.maxAngularCorrection = i2631[8]
  i2630.maxTranslationSpeed = i2631[9]
  i2630.maxRotationSpeed = i2631[10]
  i2630.baumgarteScale = i2631[11]
  i2630.baumgarteTOIScale = i2631[12]
  i2630.timeToSleep = i2631[13]
  i2630.linearSleepTolerance = i2631[14]
  i2630.angularSleepTolerance = i2631[15]
  i2630.defaultContactOffset = i2631[16]
  i2630.autoSimulation = !!i2631[17]
  i2630.queriesHitTriggers = !!i2631[18]
  i2630.queriesStartInColliders = !!i2631[19]
  i2630.callbacksOnDisable = !!i2631[20]
  i2630.reuseCollisionCallbacks = !!i2631[21]
  i2630.autoSyncTransforms = !!i2631[22]
  var i2633 = i2631[23]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2633[i + 0]) );
  }
  i2630.collisionMatrix = i2632
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2637 = data
  i2636.enabled = !!i2637[0]
  i2636.layerId = i2637[1]
  i2636.otherLayerId = i2637[2]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2639 = data
  var i2641 = i2639[0]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2641[i + 0]) );
  }
  i2638.qualityLevels = i2640
  var i2643 = i2639[1]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( i2643[i + 0] );
  }
  i2638.names = i2642
  i2638.shadows = i2639[2]
  i2638.anisotropicFiltering = i2639[3]
  i2638.antiAliasing = i2639[4]
  i2638.lodBias = i2639[5]
  i2638.shadowCascades = i2639[6]
  i2638.shadowDistance = i2639[7]
  i2638.shadowmaskMode = i2639[8]
  i2638.shadowProjection = i2639[9]
  i2638.shadowResolution = i2639[10]
  i2638.softParticles = !!i2639[11]
  i2638.softVegetation = !!i2639[12]
  i2638.activeColorSpace = i2639[13]
  i2638.desiredColorSpace = i2639[14]
  i2638.masterTextureLimit = i2639[15]
  i2638.maxQueuedFrames = i2639[16]
  i2638.particleRaycastBudget = i2639[17]
  i2638.pixelLightCount = i2639[18]
  i2638.realtimeReflectionProbes = !!i2639[19]
  i2638.shadowCascade2Split = i2639[20]
  i2638.shadowCascade4Split = new pc.Vec3( i2639[21], i2639[22], i2639[23] )
  i2638.streamingMipmapsActive = !!i2639[24]
  i2638.vSyncCount = i2639[25]
  i2638.asyncUploadBufferSize = i2639[26]
  i2638.asyncUploadTimeSlice = i2639[27]
  i2638.billboardsFaceCameraPosition = !!i2639[28]
  i2638.shadowNearPlaneOffset = i2639[29]
  i2638.streamingMipmapsMemoryBudget = i2639[30]
  i2638.maximumLODLevel = i2639[31]
  i2638.streamingMipmapsAddAllCameras = !!i2639[32]
  i2638.streamingMipmapsMaxLevelReduction = i2639[33]
  i2638.streamingMipmapsRenderersPerFrame = i2639[34]
  i2638.resolutionScalingFixedDPIFactor = i2639[35]
  i2638.streamingMipmapsMaxFileIORequests = i2639[36]
  i2638.currentQualityLevel = i2639[37]
  return i2638
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2647 = data
  i2646.xPlacement = i2647[0]
  i2646.yPlacement = i2647[1]
  i2646.xAdvance = i2647[2]
  i2646.yAdvance = i2647[3]
  return i2646
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23}}

Deserializers.requiredComponents = {"14":[15],"16":[15],"17":[15],"18":[15],"19":[15],"20":[15],"21":[22],"23":[1],"24":[25],"26":[25],"27":[25],"28":[25],"29":[25],"30":[25],"31":[25],"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[33],"40":[33],"41":[33],"42":[33],"43":[33],"44":[33],"45":[33],"46":[1],"47":[48],"49":[50],"51":[50],"52":[53],"54":[55],"56":[55],"57":[58],"59":[60],"61":[62],"63":[53],"64":[53],"65":[52],"55":[66,53],"67":[53],"68":[52],"69":[53],"70":[53],"71":[53],"72":[53],"73":[53],"74":[53],"75":[53],"76":[53],"77":[53],"78":[66,53],"79":[53],"80":[53],"81":[53],"82":[53],"58":[66,53],"83":[53],"84":[85],"86":[85],"87":[85],"88":[85],"89":[1],"90":[1],"91":[62],"92":[93],"94":[95],"96":[85],"97":[52],"98":[53],"99":[48,53],"95":[53,66],"100":[53],"101":[66,53],"102":[48],"103":[66,53],"104":[53],"105":[62]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","DragMe","UnityEngine.UI.Image","ScrollDetailTexture","ShowSliderValue","UnityEngine.UI.Text","Project.Scripts.Entity.ModificationDragHandler","UnityEngine.CanvasGroup","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","KeyFieldUnSelect","UnityEngine.UI.Selectable","Gentleland.StemapunkUI.DemoAndExample.CharacterStat","TMPro.TextMeshProUGUI","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "SecondProject";

Deserializers.lunaInitializationTime = "05/05/2026 07:49:44";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "39372";

Deserializers.projectId = "de0a43782df49ee41925f5872f728e15";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1851";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3331";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.SecondProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "80115da5-775e-45b1-b015-b3d5d69659f7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["YG","YG2","Initialize"],["YG","LanguageLegacy","CorrectLang","Init"]],[["Cysharp","Threading","Tasks","PlayerLoopHelper","Init"],["Reflex","Injectors","UnityInjector","AfterAssembliesLoaded"]],[],[["Reflex","Configuration","ReflexSettings","InitializeReflex"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["UnityEngine","ResourceManagement","ResourceProviders","AssetBundleProvider","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

