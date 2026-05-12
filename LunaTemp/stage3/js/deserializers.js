var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7232 = root || request.c( 'UnityEngine.JointSpring' )
  var i7233 = data
  i7232.spring = i7233[0]
  i7232.damper = i7233[1]
  i7232.targetPosition = i7233[2]
  return i7232
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7234 = root || request.c( 'UnityEngine.JointMotor' )
  var i7235 = data
  i7234.m_TargetVelocity = i7235[0]
  i7234.m_Force = i7235[1]
  i7234.m_FreeSpin = i7235[2]
  return i7234
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7236 = root || request.c( 'UnityEngine.JointLimits' )
  var i7237 = data
  i7236.m_Min = i7237[0]
  i7236.m_Max = i7237[1]
  i7236.m_Bounciness = i7237[2]
  i7236.m_BounceMinVelocity = i7237[3]
  i7236.m_ContactDistance = i7237[4]
  i7236.minBounce = i7237[5]
  i7236.maxBounce = i7237[6]
  return i7236
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7238 = root || request.c( 'UnityEngine.JointDrive' )
  var i7239 = data
  i7238.m_PositionSpring = i7239[0]
  i7238.m_PositionDamper = i7239[1]
  i7238.m_MaximumForce = i7239[2]
  i7238.m_UseAcceleration = i7239[3]
  return i7238
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7240 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7241 = data
  i7240.m_Spring = i7241[0]
  i7240.m_Damper = i7241[1]
  return i7240
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7242 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7243 = data
  i7242.m_Limit = i7243[0]
  i7242.m_Bounciness = i7243[1]
  i7242.m_ContactDistance = i7243[2]
  return i7242
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7244 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7245 = data
  i7244.m_ExtremumSlip = i7245[0]
  i7244.m_ExtremumValue = i7245[1]
  i7244.m_AsymptoteSlip = i7245[2]
  i7244.m_AsymptoteValue = i7245[3]
  i7244.m_Stiffness = i7245[4]
  return i7244
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7246 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7247 = data
  i7246.m_LowerAngle = i7247[0]
  i7246.m_UpperAngle = i7247[1]
  return i7246
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7248 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7249 = data
  i7248.m_MotorSpeed = i7249[0]
  i7248.m_MaximumMotorTorque = i7249[1]
  return i7248
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7250 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7251 = data
  i7250.m_DampingRatio = i7251[0]
  i7250.m_Frequency = i7251[1]
  i7250.m_Angle = i7251[2]
  return i7250
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7252 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7253 = data
  i7252.m_LowerTranslation = i7253[0]
  i7252.m_UpperTranslation = i7253[1]
  return i7252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7255 = data
  i7254.name = i7255[0]
  i7254.halfPrecision = !!i7255[1]
  i7254.useSimplification = !!i7255[2]
  i7254.useUInt32IndexFormat = !!i7255[3]
  i7254.vertexCount = i7255[4]
  i7254.aabb = i7255[5]
  var i7257 = i7255[6]
  var i7256 = []
  for(var i = 0; i < i7257.length; i += 1) {
    i7256.push( !!i7257[i + 0] );
  }
  i7254.streams = i7256
  i7254.vertices = i7255[7]
  var i7259 = i7255[8]
  var i7258 = []
  for(var i = 0; i < i7259.length; i += 1) {
    i7258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7259[i + 0]) );
  }
  i7254.subMeshes = i7258
  var i7261 = i7255[9]
  var i7260 = []
  for(var i = 0; i < i7261.length; i += 16) {
    i7260.push( new pc.Mat4().setData(i7261[i + 0], i7261[i + 1], i7261[i + 2], i7261[i + 3],  i7261[i + 4], i7261[i + 5], i7261[i + 6], i7261[i + 7],  i7261[i + 8], i7261[i + 9], i7261[i + 10], i7261[i + 11],  i7261[i + 12], i7261[i + 13], i7261[i + 14], i7261[i + 15]) );
  }
  i7254.bindposes = i7260
  var i7263 = i7255[10]
  var i7262 = []
  for(var i = 0; i < i7263.length; i += 1) {
    i7262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7263[i + 0]) );
  }
  i7254.blendShapes = i7262
  return i7254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7269 = data
  i7268.triangles = i7269[0]
  return i7268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7275 = data
  i7274.name = i7275[0]
  var i7277 = i7275[1]
  var i7276 = []
  for(var i = 0; i < i7277.length; i += 1) {
    i7276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7277[i + 0]) );
  }
  i7274.frames = i7276
  return i7274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7278 = root || new pc.UnityMaterial()
  var i7279 = data
  i7278.name = i7279[0]
  request.r(i7279[1], i7279[2], 0, i7278, 'shader')
  i7278.renderQueue = i7279[3]
  i7278.enableInstancing = !!i7279[4]
  var i7281 = i7279[5]
  var i7280 = []
  for(var i = 0; i < i7281.length; i += 1) {
    i7280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7281[i + 0]) );
  }
  i7278.floatParameters = i7280
  var i7283 = i7279[6]
  var i7282 = []
  for(var i = 0; i < i7283.length; i += 1) {
    i7282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7283[i + 0]) );
  }
  i7278.colorParameters = i7282
  var i7285 = i7279[7]
  var i7284 = []
  for(var i = 0; i < i7285.length; i += 1) {
    i7284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7285[i + 0]) );
  }
  i7278.vectorParameters = i7284
  var i7287 = i7279[8]
  var i7286 = []
  for(var i = 0; i < i7287.length; i += 1) {
    i7286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7287[i + 0]) );
  }
  i7278.textureParameters = i7286
  var i7289 = i7279[9]
  var i7288 = []
  for(var i = 0; i < i7289.length; i += 1) {
    i7288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7289[i + 0]) );
  }
  i7278.materialFlags = i7288
  return i7278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7293 = data
  i7292.name = i7293[0]
  i7292.value = i7293[1]
  return i7292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7297 = data
  i7296.name = i7297[0]
  i7296.value = new pc.Color(i7297[1], i7297[2], i7297[3], i7297[4])
  return i7296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7301 = data
  i7300.name = i7301[0]
  i7300.value = new pc.Vec4( i7301[1], i7301[2], i7301[3], i7301[4] )
  return i7300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7305 = data
  i7304.name = i7305[0]
  request.r(i7305[1], i7305[2], 0, i7304, 'value')
  return i7304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7309 = data
  i7308.name = i7309[0]
  i7308.enabled = !!i7309[1]
  return i7308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7311 = data
  i7310.name = i7311[0]
  i7310.width = i7311[1]
  i7310.height = i7311[2]
  i7310.mipmapCount = i7311[3]
  i7310.anisoLevel = i7311[4]
  i7310.filterMode = i7311[5]
  i7310.hdr = !!i7311[6]
  i7310.format = i7311[7]
  i7310.wrapMode = i7311[8]
  i7310.alphaIsTransparency = !!i7311[9]
  i7310.alphaSource = i7311[10]
  i7310.graphicsFormat = i7311[11]
  i7310.sRGBTexture = !!i7311[12]
  i7310.desiredColorSpace = i7311[13]
  i7310.wrapU = i7311[14]
  i7310.wrapV = i7311[15]
  return i7310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i7312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i7313 = data
  i7312.name = i7313[0]
  i7312.atlasId = i7313[1]
  i7312.mipmapCount = i7313[2]
  i7312.hdr = !!i7313[3]
  i7312.size = i7313[4]
  i7312.anisoLevel = i7313[5]
  i7312.filterMode = i7313[6]
  var i7315 = i7313[7]
  var i7314 = []
  for(var i = 0; i < i7315.length; i += 4) {
    i7314.push( UnityEngine.Rect.MinMaxRect(i7315[i + 0], i7315[i + 1], i7315[i + 2], i7315[i + 3]) );
  }
  i7312.rects = i7314
  i7312.wrapU = i7313[8]
  i7312.wrapV = i7313[9]
  return i7312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7319 = data
  i7318.name = i7319[0]
  i7318.index = i7319[1]
  i7318.startup = !!i7319[2]
  return i7318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7321 = data
  i7320.aspect = i7321[0]
  i7320.orthographic = !!i7321[1]
  i7320.orthographicSize = i7321[2]
  i7320.backgroundColor = new pc.Color(i7321[3], i7321[4], i7321[5], i7321[6])
  i7320.nearClipPlane = i7321[7]
  i7320.farClipPlane = i7321[8]
  i7320.fieldOfView = i7321[9]
  i7320.depth = i7321[10]
  i7320.clearFlags = i7321[11]
  i7320.cullingMask = i7321[12]
  i7320.rect = i7321[13]
  request.r(i7321[14], i7321[15], 0, i7320, 'targetTexture')
  i7320.usePhysicalProperties = !!i7321[16]
  i7320.focalLength = i7321[17]
  i7320.sensorSize = new pc.Vec2( i7321[18], i7321[19] )
  i7320.lensShift = new pc.Vec2( i7321[20], i7321[21] )
  i7320.gateFit = i7321[22]
  i7320.commandBufferCount = i7321[23]
  i7320.cameraType = i7321[24]
  i7320.enabled = !!i7321[25]
  return i7320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7323 = data
  i7322.name = i7323[0]
  i7322.tagId = i7323[1]
  i7322.enabled = !!i7323[2]
  i7322.isStatic = !!i7323[3]
  i7322.layer = i7323[4]
  return i7322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i7324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i7325 = data
  i7324.type = i7325[0]
  i7324.color = new pc.Color(i7325[1], i7325[2], i7325[3], i7325[4])
  i7324.cullingMask = i7325[5]
  i7324.intensity = i7325[6]
  i7324.range = i7325[7]
  i7324.spotAngle = i7325[8]
  i7324.shadows = i7325[9]
  i7324.shadowNormalBias = i7325[10]
  i7324.shadowBias = i7325[11]
  i7324.shadowStrength = i7325[12]
  i7324.shadowResolution = i7325[13]
  i7324.lightmapBakeType = i7325[14]
  i7324.renderMode = i7325[15]
  request.r(i7325[16], i7325[17], 0, i7324, 'cookie')
  i7324.cookieSize = i7325[18]
  i7324.shadowNearPlane = i7325[19]
  i7324.occlusionMaskChannel = i7325[20]
  i7324.isBaked = !!i7325[21]
  i7324.mixedLightingMode = i7325[22]
  i7324.enabled = !!i7325[23]
  return i7324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7327 = data
  request.r(i7327[0], i7327[1], 0, i7326, 'sharedMesh')
  return i7326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7329 = data
  request.r(i7329[0], i7329[1], 0, i7328, 'additionalVertexStreams')
  i7328.enabled = !!i7329[2]
  request.r(i7329[3], i7329[4], 0, i7328, 'sharedMaterial')
  var i7331 = i7329[5]
  var i7330 = []
  for(var i = 0; i < i7331.length; i += 2) {
  request.r(i7331[i + 0], i7331[i + 1], 2, i7330, '')
  }
  i7328.sharedMaterials = i7330
  i7328.receiveShadows = !!i7329[6]
  i7328.shadowCastingMode = i7329[7]
  i7328.sortingLayerID = i7329[8]
  i7328.sortingOrder = i7329[9]
  i7328.lightmapIndex = i7329[10]
  i7328.lightmapSceneIndex = i7329[11]
  i7328.lightmapScaleOffset = new pc.Vec4( i7329[12], i7329[13], i7329[14], i7329[15] )
  i7328.lightProbeUsage = i7329[16]
  i7328.reflectionProbeUsage = i7329[17]
  return i7328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i7334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i7335 = data
  i7334.center = new pc.Vec3( i7335[0], i7335[1], i7335[2] )
  i7334.size = new pc.Vec3( i7335[3], i7335[4], i7335[5] )
  i7334.enabled = !!i7335[6]
  i7334.isTrigger = !!i7335[7]
  request.r(i7335[8], i7335[9], 0, i7334, 'material')
  return i7334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7337 = data
  i7336.ambientIntensity = i7337[0]
  i7336.reflectionIntensity = i7337[1]
  i7336.ambientMode = i7337[2]
  i7336.ambientLight = new pc.Color(i7337[3], i7337[4], i7337[5], i7337[6])
  i7336.ambientSkyColor = new pc.Color(i7337[7], i7337[8], i7337[9], i7337[10])
  i7336.ambientGroundColor = new pc.Color(i7337[11], i7337[12], i7337[13], i7337[14])
  i7336.ambientEquatorColor = new pc.Color(i7337[15], i7337[16], i7337[17], i7337[18])
  i7336.fogColor = new pc.Color(i7337[19], i7337[20], i7337[21], i7337[22])
  i7336.fogEndDistance = i7337[23]
  i7336.fogStartDistance = i7337[24]
  i7336.fogDensity = i7337[25]
  i7336.fog = !!i7337[26]
  request.r(i7337[27], i7337[28], 0, i7336, 'skybox')
  i7336.fogMode = i7337[29]
  var i7339 = i7337[30]
  var i7338 = []
  for(var i = 0; i < i7339.length; i += 1) {
    i7338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7339[i + 0]) );
  }
  i7336.lightmaps = i7338
  i7336.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7337[31], i7336.lightProbes)
  i7336.lightmapsMode = i7337[32]
  i7336.mixedBakeMode = i7337[33]
  i7336.environmentLightingMode = i7337[34]
  i7336.ambientProbe = new pc.SphericalHarmonicsL2(i7337[35])
  request.r(i7337[36], i7337[37], 0, i7336, 'customReflection')
  request.r(i7337[38], i7337[39], 0, i7336, 'defaultReflection')
  i7336.defaultReflectionMode = i7337[40]
  i7336.defaultReflectionResolution = i7337[41]
  i7336.sunLightObjectId = i7337[42]
  i7336.pixelLightCount = i7337[43]
  i7336.defaultReflectionHDR = !!i7337[44]
  i7336.hasLightDataAsset = !!i7337[45]
  i7336.hasManualGenerate = !!i7337[46]
  return i7336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7343 = data
  request.r(i7343[0], i7343[1], 0, i7342, 'lightmapColor')
  request.r(i7343[2], i7343[3], 0, i7342, 'lightmapDirection')
  request.r(i7343[4], i7343[5], 0, i7342, 'shadowMask')
  return i7342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7344 = root || new UnityEngine.LightProbes()
  var i7345 = data
  return i7344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7353 = data
  var i7355 = i7353[0]
  var i7354 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7355.length; i += 1) {
    i7354.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7355[i + 0]));
  }
  i7352.ShaderCompilationErrors = i7354
  i7352.name = i7353[1]
  i7352.guid = i7353[2]
  var i7357 = i7353[3]
  var i7356 = []
  for(var i = 0; i < i7357.length; i += 1) {
    i7356.push( i7357[i + 0] );
  }
  i7352.shaderDefinedKeywords = i7356
  var i7359 = i7353[4]
  var i7358 = []
  for(var i = 0; i < i7359.length; i += 1) {
    i7358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7359[i + 0]) );
  }
  i7352.passes = i7358
  var i7361 = i7353[5]
  var i7360 = []
  for(var i = 0; i < i7361.length; i += 1) {
    i7360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7361[i + 0]) );
  }
  i7352.usePasses = i7360
  var i7363 = i7353[6]
  var i7362 = []
  for(var i = 0; i < i7363.length; i += 1) {
    i7362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7363[i + 0]) );
  }
  i7352.defaultParameterValues = i7362
  request.r(i7353[7], i7353[8], 0, i7352, 'unityFallbackShader')
  i7352.readDepth = !!i7353[9]
  i7352.hasDepthOnlyPass = !!i7353[10]
  i7352.isCreatedByShaderGraph = !!i7353[11]
  i7352.disableBatching = !!i7353[12]
  i7352.compiled = !!i7353[13]
  return i7352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7367 = data
  i7366.shaderName = i7367[0]
  i7366.errorMessage = i7367[1]
  return i7366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7372 = root || new pc.UnityShaderPass()
  var i7373 = data
  i7372.id = i7373[0]
  i7372.subShaderIndex = i7373[1]
  i7372.name = i7373[2]
  i7372.passType = i7373[3]
  i7372.grabPassTextureName = i7373[4]
  i7372.usePass = !!i7373[5]
  i7372.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7373[6], i7372.zTest)
  i7372.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7373[7], i7372.zWrite)
  i7372.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7373[8], i7372.culling)
  i7372.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7373[9], i7372.blending)
  i7372.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7373[10], i7372.alphaBlending)
  i7372.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7373[11], i7372.colorWriteMask)
  i7372.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7373[12], i7372.offsetUnits)
  i7372.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7373[13], i7372.offsetFactor)
  i7372.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7373[14], i7372.stencilRef)
  i7372.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7373[15], i7372.stencilReadMask)
  i7372.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7373[16], i7372.stencilWriteMask)
  i7372.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7373[17], i7372.stencilOp)
  i7372.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7373[18], i7372.stencilOpFront)
  i7372.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7373[19], i7372.stencilOpBack)
  var i7375 = i7373[20]
  var i7374 = []
  for(var i = 0; i < i7375.length; i += 1) {
    i7374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7375[i + 0]) );
  }
  i7372.tags = i7374
  var i7377 = i7373[21]
  var i7376 = []
  for(var i = 0; i < i7377.length; i += 1) {
    i7376.push( i7377[i + 0] );
  }
  i7372.passDefinedKeywords = i7376
  var i7379 = i7373[22]
  var i7378 = []
  for(var i = 0; i < i7379.length; i += 1) {
    i7378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7379[i + 0]) );
  }
  i7372.passDefinedKeywordGroups = i7378
  var i7381 = i7373[23]
  var i7380 = []
  for(var i = 0; i < i7381.length; i += 1) {
    i7380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7381[i + 0]) );
  }
  i7372.variants = i7380
  var i7383 = i7373[24]
  var i7382 = []
  for(var i = 0; i < i7383.length; i += 1) {
    i7382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7383[i + 0]) );
  }
  i7372.excludedVariants = i7382
  i7372.hasDepthReader = !!i7373[25]
  return i7372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7385 = data
  i7384.val = i7385[0]
  i7384.name = i7385[1]
  return i7384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7387 = data
  i7386.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7387[0], i7386.src)
  i7386.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7387[1], i7386.dst)
  i7386.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7387[2], i7386.op)
  return i7386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7389 = data
  i7388.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7389[0], i7388.pass)
  i7388.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7389[1], i7388.fail)
  i7388.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7389[2], i7388.zFail)
  i7388.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7389[3], i7388.comp)
  return i7388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7393 = data
  i7392.name = i7393[0]
  i7392.value = i7393[1]
  return i7392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7397 = data
  var i7399 = i7397[0]
  var i7398 = []
  for(var i = 0; i < i7399.length; i += 1) {
    i7398.push( i7399[i + 0] );
  }
  i7396.keywords = i7398
  i7396.hasDiscard = !!i7397[1]
  return i7396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7403 = data
  i7402.passId = i7403[0]
  i7402.subShaderIndex = i7403[1]
  var i7405 = i7403[2]
  var i7404 = []
  for(var i = 0; i < i7405.length; i += 1) {
    i7404.push( i7405[i + 0] );
  }
  i7402.keywords = i7404
  i7402.vertexProgram = i7403[3]
  i7402.fragmentProgram = i7403[4]
  i7402.exportedForWebGl2 = !!i7403[5]
  i7402.readDepth = !!i7403[6]
  return i7402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7409 = data
  request.r(i7409[0], i7409[1], 0, i7408, 'shader')
  i7408.pass = i7409[2]
  return i7408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7413 = data
  i7412.name = i7413[0]
  i7412.type = i7413[1]
  i7412.value = new pc.Vec4( i7413[2], i7413[3], i7413[4], i7413[5] )
  i7412.textureValue = i7413[6]
  i7412.shaderPropertyFlag = i7413[7]
  return i7412
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7414 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7415 = data
  i7414.useSafeMode = !!i7415[0]
  i7414.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7415[1], i7414.safeModeOptions)
  i7414.timeScale = i7415[2]
  i7414.unscaledTimeScale = i7415[3]
  i7414.useSmoothDeltaTime = !!i7415[4]
  i7414.maxSmoothUnscaledTime = i7415[5]
  i7414.rewindCallbackMode = i7415[6]
  i7414.showUnityEditorReport = !!i7415[7]
  i7414.logBehaviour = i7415[8]
  i7414.drawGizmos = !!i7415[9]
  i7414.defaultRecyclable = !!i7415[10]
  i7414.defaultAutoPlay = i7415[11]
  i7414.defaultUpdateType = i7415[12]
  i7414.defaultTimeScaleIndependent = !!i7415[13]
  i7414.defaultEaseType = i7415[14]
  i7414.defaultEaseOvershootOrAmplitude = i7415[15]
  i7414.defaultEasePeriod = i7415[16]
  i7414.defaultAutoKill = !!i7415[17]
  i7414.defaultLoopType = i7415[18]
  i7414.debugMode = !!i7415[19]
  i7414.debugStoreTargetId = !!i7415[20]
  i7414.showPreviewPanel = !!i7415[21]
  i7414.storeSettingsLocation = i7415[22]
  i7414.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7415[23], i7414.modules)
  i7414.createASMDEF = !!i7415[24]
  i7414.showPlayingTweens = !!i7415[25]
  i7414.showPausedTweens = !!i7415[26]
  return i7414
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7416 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7417 = data
  i7416.logBehaviour = i7417[0]
  i7416.nestedTweenFailureBehaviour = i7417[1]
  return i7416
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7418 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7419 = data
  i7418.showPanel = !!i7419[0]
  i7418.audioEnabled = !!i7419[1]
  i7418.physicsEnabled = !!i7419[2]
  i7418.physics2DEnabled = !!i7419[3]
  i7418.spriteEnabled = !!i7419[4]
  i7418.uiEnabled = !!i7419[5]
  i7418.textMeshProEnabled = !!i7419[6]
  i7418.tk2DEnabled = !!i7419[7]
  i7418.deAudioEnabled = !!i7419[8]
  i7418.deUnityExtendedEnabled = !!i7419[9]
  i7418.epoOutlineEnabled = !!i7419[10]
  return i7418
}

Deserializers["Project.Scripts.Game.Constants.CustomPalette"] = function (request, data, root) {
  var i7420 = root || request.c( 'Project.Scripts.Game.Constants.CustomPalette' )
  var i7421 = data
  var i7423 = i7421[0]
  var i7422 = []
  for(var i = 0; i < i7423.length; i += 1) {
    i7422.push( request.d('Project.Scripts.Game.Constants.ColorEntry', i7423[i + 0]) );
  }
  i7420.colors = i7422
  return i7420
}

Deserializers["Project.Scripts.Game.Constants.ColorEntry"] = function (request, data, root) {
  var i7426 = root || request.c( 'Project.Scripts.Game.Constants.ColorEntry' )
  var i7427 = data
  i7426.Name = i7427[0]
  i7426.Color = new pc.Color(i7427[1], i7427[2], i7427[3], i7427[4])
  return i7426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7429 = data
  var i7431 = i7429[0]
  var i7430 = []
  for(var i = 0; i < i7431.length; i += 1) {
    i7430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7431[i + 0]) );
  }
  i7428.files = i7430
  i7428.componentToPrefabIds = i7429[1]
  return i7428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7435 = data
  i7434.path = i7435[0]
  request.r(i7435[1], i7435[2], 0, i7434, 'unityObject')
  return i7434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7437 = data
  var i7439 = i7437[0]
  var i7438 = []
  for(var i = 0; i < i7439.length; i += 1) {
    i7438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7439[i + 0]) );
  }
  i7436.scriptsExecutionOrder = i7438
  var i7441 = i7437[1]
  var i7440 = []
  for(var i = 0; i < i7441.length; i += 1) {
    i7440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7441[i + 0]) );
  }
  i7436.sortingLayers = i7440
  var i7443 = i7437[2]
  var i7442 = []
  for(var i = 0; i < i7443.length; i += 1) {
    i7442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7443[i + 0]) );
  }
  i7436.cullingLayers = i7442
  i7436.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7437[3], i7436.timeSettings)
  i7436.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7437[4], i7436.physicsSettings)
  i7436.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7437[5], i7436.physics2DSettings)
  i7436.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7437[6], i7436.qualitySettings)
  i7436.enableRealtimeShadows = !!i7437[7]
  i7436.enableAutoInstancing = !!i7437[8]
  i7436.enableStaticBatching = !!i7437[9]
  i7436.enableDynamicBatching = !!i7437[10]
  i7436.usePreservativeDynamicBatching = !!i7437[11]
  i7436.lightmapEncodingQuality = i7437[12]
  i7436.desiredColorSpace = i7437[13]
  var i7445 = i7437[14]
  var i7444 = []
  for(var i = 0; i < i7445.length; i += 1) {
    i7444.push( i7445[i + 0] );
  }
  i7436.allTags = i7444
  return i7436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7449 = data
  i7448.name = i7449[0]
  i7448.value = i7449[1]
  return i7448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7453 = data
  i7452.id = i7453[0]
  i7452.name = i7453[1]
  i7452.value = i7453[2]
  return i7452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7457 = data
  i7456.id = i7457[0]
  i7456.name = i7457[1]
  return i7456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7459 = data
  i7458.fixedDeltaTime = i7459[0]
  i7458.maximumDeltaTime = i7459[1]
  i7458.timeScale = i7459[2]
  i7458.maximumParticleTimestep = i7459[3]
  return i7458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7461 = data
  i7460.gravity = new pc.Vec3( i7461[0], i7461[1], i7461[2] )
  i7460.defaultSolverIterations = i7461[3]
  i7460.bounceThreshold = i7461[4]
  i7460.autoSyncTransforms = !!i7461[5]
  i7460.autoSimulation = !!i7461[6]
  var i7463 = i7461[7]
  var i7462 = []
  for(var i = 0; i < i7463.length; i += 1) {
    i7462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7463[i + 0]) );
  }
  i7460.collisionMatrix = i7462
  return i7460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7467 = data
  i7466.enabled = !!i7467[0]
  i7466.layerId = i7467[1]
  i7466.otherLayerId = i7467[2]
  return i7466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7469 = data
  request.r(i7469[0], i7469[1], 0, i7468, 'material')
  i7468.gravity = new pc.Vec2( i7469[2], i7469[3] )
  i7468.positionIterations = i7469[4]
  i7468.velocityIterations = i7469[5]
  i7468.velocityThreshold = i7469[6]
  i7468.maxLinearCorrection = i7469[7]
  i7468.maxAngularCorrection = i7469[8]
  i7468.maxTranslationSpeed = i7469[9]
  i7468.maxRotationSpeed = i7469[10]
  i7468.baumgarteScale = i7469[11]
  i7468.baumgarteTOIScale = i7469[12]
  i7468.timeToSleep = i7469[13]
  i7468.linearSleepTolerance = i7469[14]
  i7468.angularSleepTolerance = i7469[15]
  i7468.defaultContactOffset = i7469[16]
  i7468.autoSimulation = !!i7469[17]
  i7468.queriesHitTriggers = !!i7469[18]
  i7468.queriesStartInColliders = !!i7469[19]
  i7468.callbacksOnDisable = !!i7469[20]
  i7468.reuseCollisionCallbacks = !!i7469[21]
  i7468.autoSyncTransforms = !!i7469[22]
  var i7471 = i7469[23]
  var i7470 = []
  for(var i = 0; i < i7471.length; i += 1) {
    i7470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7471[i + 0]) );
  }
  i7468.collisionMatrix = i7470
  return i7468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7475 = data
  i7474.enabled = !!i7475[0]
  i7474.layerId = i7475[1]
  i7474.otherLayerId = i7475[2]
  return i7474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7477 = data
  var i7479 = i7477[0]
  var i7478 = []
  for(var i = 0; i < i7479.length; i += 1) {
    i7478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7479[i + 0]) );
  }
  i7476.qualityLevels = i7478
  var i7481 = i7477[1]
  var i7480 = []
  for(var i = 0; i < i7481.length; i += 1) {
    i7480.push( i7481[i + 0] );
  }
  i7476.names = i7480
  i7476.shadows = i7477[2]
  i7476.anisotropicFiltering = i7477[3]
  i7476.antiAliasing = i7477[4]
  i7476.lodBias = i7477[5]
  i7476.shadowCascades = i7477[6]
  i7476.shadowDistance = i7477[7]
  i7476.shadowmaskMode = i7477[8]
  i7476.shadowProjection = i7477[9]
  i7476.shadowResolution = i7477[10]
  i7476.softParticles = !!i7477[11]
  i7476.softVegetation = !!i7477[12]
  i7476.activeColorSpace = i7477[13]
  i7476.desiredColorSpace = i7477[14]
  i7476.masterTextureLimit = i7477[15]
  i7476.maxQueuedFrames = i7477[16]
  i7476.particleRaycastBudget = i7477[17]
  i7476.pixelLightCount = i7477[18]
  i7476.realtimeReflectionProbes = !!i7477[19]
  i7476.shadowCascade2Split = i7477[20]
  i7476.shadowCascade4Split = new pc.Vec3( i7477[21], i7477[22], i7477[23] )
  i7476.streamingMipmapsActive = !!i7477[24]
  i7476.vSyncCount = i7477[25]
  i7476.asyncUploadBufferSize = i7477[26]
  i7476.asyncUploadTimeSlice = i7477[27]
  i7476.billboardsFaceCameraPosition = !!i7477[28]
  i7476.shadowNearPlaneOffset = i7477[29]
  i7476.streamingMipmapsMemoryBudget = i7477[30]
  i7476.maximumLODLevel = i7477[31]
  i7476.streamingMipmapsAddAllCameras = !!i7477[32]
  i7476.streamingMipmapsMaxLevelReduction = i7477[33]
  i7476.streamingMipmapsRenderersPerFrame = i7477[34]
  i7476.resolutionScalingFixedDPIFactor = i7477[35]
  i7476.streamingMipmapsMaxFileIORequests = i7477[36]
  i7476.currentQualityLevel = i7477[37]
  return i7476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7487 = data
  i7486.weight = i7487[0]
  i7486.vertices = i7487[1]
  i7486.normals = i7487[2]
  i7486.tangents = i7487[3]
  return i7486
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"12":[13],"14":[13],"15":[13],"16":[13],"17":[13],"18":[13],"19":[20],"21":[1],"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[23],"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[31],"38":[31],"39":[31],"40":[31],"41":[31],"42":[31],"43":[31],"44":[1],"45":[6],"46":[47],"48":[47],"49":[50],"51":[52],"53":[52],"54":[55],"56":[57],"58":[50],"59":[1],"60":[1],"61":[3],"62":[63],"64":[50],"65":[50],"66":[49],"52":[67,50],"68":[50],"69":[49],"70":[50],"71":[50],"72":[50],"73":[50],"74":[50],"75":[50],"76":[50],"77":[50],"78":[50],"79":[67,50],"80":[50],"81":[50],"82":[50],"83":[50],"55":[67,50],"84":[50],"85":[86],"87":[86],"88":[86],"89":[86],"90":[1],"91":[1],"92":[63],"93":[94],"95":[96],"97":[86],"98":[49],"99":[50],"100":[6,50],"96":[50,67],"101":[50],"102":[67,50],"103":[6],"104":[67,50],"105":[50],"106":[63]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","Project.Scripts.Game.Constants.CustomPalette","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","DragMe","UnityEngine.UI.Image","ScrollDetailTexture","ShowSliderValue","UnityEngine.UI.Text","Project.Scripts.InputSystem.DragHandler","Project.Scripts.HexCore.HexStack","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","KeyFieldUnSelect","UnityEngine.UI.Selectable","Gentleland.StemapunkUI.DemoAndExample.CharacterStat","TMPro.TextMeshProUGUI","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "SecondProject";

Deserializers.lunaInitializationTime = "05/05/2026 07:49:44";

Deserializers.lunaDaysRunning = "7.3";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "NewThreeRow";

Deserializers.lunaAppID = "39372";

Deserializers.projectId = "de0a43782df49ee41925f5872f728e15";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "2016";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3185";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.SecondProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "cd312d75-d88f-410e-8cb2-6d4667740e2f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

