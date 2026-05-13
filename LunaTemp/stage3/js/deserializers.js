var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointSpring' )
  var i415 = data
  i414.spring = i415[0]
  i414.damper = i415[1]
  i414.targetPosition = i415[2]
  return i414
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointMotor' )
  var i417 = data
  i416.m_TargetVelocity = i417[0]
  i416.m_Force = i417[1]
  i416.m_FreeSpin = i417[2]
  return i416
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.JointLimits' )
  var i419 = data
  i418.m_Min = i419[0]
  i418.m_Max = i419[1]
  i418.m_Bounciness = i419[2]
  i418.m_BounceMinVelocity = i419[3]
  i418.m_ContactDistance = i419[4]
  i418.minBounce = i419[5]
  i418.maxBounce = i419[6]
  return i418
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.JointDrive' )
  var i421 = data
  i420.m_PositionSpring = i421[0]
  i420.m_PositionDamper = i421[1]
  i420.m_MaximumForce = i421[2]
  i420.m_UseAcceleration = i421[3]
  return i420
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i423 = data
  i422.m_Spring = i423[0]
  i422.m_Damper = i423[1]
  return i422
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i425 = data
  i424.m_Limit = i425[0]
  i424.m_Bounciness = i425[1]
  i424.m_ContactDistance = i425[2]
  return i424
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i427 = data
  i426.m_ExtremumSlip = i427[0]
  i426.m_ExtremumValue = i427[1]
  i426.m_AsymptoteSlip = i427[2]
  i426.m_AsymptoteValue = i427[3]
  i426.m_Stiffness = i427[4]
  return i426
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i429 = data
  i428.m_LowerAngle = i429[0]
  i428.m_UpperAngle = i429[1]
  return i428
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i431 = data
  i430.m_MotorSpeed = i431[0]
  i430.m_MaximumMotorTorque = i431[1]
  return i430
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i433 = data
  i432.m_DampingRatio = i433[0]
  i432.m_Frequency = i433[1]
  i432.m_Angle = i433[2]
  return i432
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i435 = data
  i434.m_LowerTranslation = i435[0]
  i434.m_UpperTranslation = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i437 = data
  i436.position = new pc.Vec3( i437[0], i437[1], i437[2] )
  i436.scale = new pc.Vec3( i437[3], i437[4], i437[5] )
  i436.rotation = new pc.Quat(i437[6], i437[7], i437[8], i437[9])
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i439 = data
  request.r(i439[0], i439[1], 0, i438, 'sharedMesh')
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'additionalVertexStreams')
  i440.enabled = !!i441[2]
  request.r(i441[3], i441[4], 0, i440, 'sharedMaterial')
  var i443 = i441[5]
  var i442 = []
  for(var i = 0; i < i443.length; i += 2) {
  request.r(i443[i + 0], i443[i + 1], 2, i442, '')
  }
  i440.sharedMaterials = i442
  i440.receiveShadows = !!i441[6]
  i440.shadowCastingMode = i441[7]
  i440.sortingLayerID = i441[8]
  i440.sortingOrder = i441[9]
  i440.lightmapIndex = i441[10]
  i440.lightmapSceneIndex = i441[11]
  i440.lightmapScaleOffset = new pc.Vec4( i441[12], i441[13], i441[14], i441[15] )
  i440.lightProbeUsage = i441[16]
  i440.reflectionProbeUsage = i441[17]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i447 = data
  i446.name = i447[0]
  i446.tagId = i447[1]
  i446.enabled = !!i447[2]
  i446.isStatic = !!i447[3]
  i446.layer = i447[4]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i449 = data
  i448.name = i449[0]
  i448.halfPrecision = !!i449[1]
  i448.useSimplification = !!i449[2]
  i448.useUInt32IndexFormat = !!i449[3]
  i448.vertexCount = i449[4]
  i448.aabb = i449[5]
  var i451 = i449[6]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( !!i451[i + 0] );
  }
  i448.streams = i450
  i448.vertices = i449[7]
  var i453 = i449[8]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i453[i + 0]) );
  }
  i448.subMeshes = i452
  var i455 = i449[9]
  var i454 = []
  for(var i = 0; i < i455.length; i += 16) {
    i454.push( new pc.Mat4().setData(i455[i + 0], i455[i + 1], i455[i + 2], i455[i + 3],  i455[i + 4], i455[i + 5], i455[i + 6], i455[i + 7],  i455[i + 8], i455[i + 9], i455[i + 10], i455[i + 11],  i455[i + 12], i455[i + 13], i455[i + 14], i455[i + 15]) );
  }
  i448.bindposes = i454
  var i457 = i449[10]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i457[i + 0]) );
  }
  i448.blendShapes = i456
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i463 = data
  i462.triangles = i463[0]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i469 = data
  i468.name = i469[0]
  var i471 = i469[1]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i471[i + 0]) );
  }
  i468.frames = i470
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i472 = root || new pc.UnityMaterial()
  var i473 = data
  i472.name = i473[0]
  request.r(i473[1], i473[2], 0, i472, 'shader')
  i472.renderQueue = i473[3]
  i472.enableInstancing = !!i473[4]
  var i475 = i473[5]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i475[i + 0]) );
  }
  i472.floatParameters = i474
  var i477 = i473[6]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i477[i + 0]) );
  }
  i472.colorParameters = i476
  var i479 = i473[7]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i479[i + 0]) );
  }
  i472.vectorParameters = i478
  var i481 = i473[8]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i481[i + 0]) );
  }
  i472.textureParameters = i480
  var i483 = i473[9]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i483[i + 0]) );
  }
  i472.materialFlags = i482
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i487 = data
  i486.name = i487[0]
  i486.value = i487[1]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i491 = data
  i490.name = i491[0]
  i490.value = new pc.Color(i491[1], i491[2], i491[3], i491[4])
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i495 = data
  i494.name = i495[0]
  i494.value = new pc.Vec4( i495[1], i495[2], i495[3], i495[4] )
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i499 = data
  i498.name = i499[0]
  request.r(i499[1], i499[2], 0, i498, 'value')
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i503 = data
  i502.name = i503[0]
  i502.enabled = !!i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i505 = data
  i504.name = i505[0]
  i504.width = i505[1]
  i504.height = i505[2]
  i504.mipmapCount = i505[3]
  i504.anisoLevel = i505[4]
  i504.filterMode = i505[5]
  i504.hdr = !!i505[6]
  i504.format = i505[7]
  i504.wrapMode = i505[8]
  i504.alphaIsTransparency = !!i505[9]
  i504.alphaSource = i505[10]
  i504.graphicsFormat = i505[11]
  i504.sRGBTexture = !!i505[12]
  i504.desiredColorSpace = i505[13]
  i504.wrapU = i505[14]
  i504.wrapV = i505[15]
  return i504
}

Deserializers["Project.Scripts.HexCore.HexCell"] = function (request, data, root) {
  var i506 = root || request.c( 'Project.Scripts.HexCore.HexCell' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, '_highlightMaterial')
  request.r(i507[2], i507[3], 0, i506, '_defaultMaterial')
  request.r(i507[4], i507[5], 0, i506, '_meshRenderer')
  request.r(i507[6], i507[7], 0, i506, '_effect')
  request.r(i507[8], i507[9], 0, i506, '_audioSource')
  request.r(i507[10], i507[11], 0, i506, '_destroyClip')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i509 = data
  i508.center = new pc.Vec3( i509[0], i509[1], i509[2] )
  i508.size = new pc.Vec3( i509[3], i509[4], i509[5] )
  i508.enabled = !!i509[6]
  i508.isTrigger = !!i509[7]
  request.r(i509[8], i509[9], 0, i508, 'material')
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'clip')
  request.r(i511[2], i511[3], 0, i510, 'outputAudioMixerGroup')
  i510.playOnAwake = !!i511[4]
  i510.loop = !!i511[5]
  i510.time = i511[6]
  i510.volume = i511[7]
  i510.pitch = i511[8]
  i510.enabled = !!i511[9]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i513 = data
  i512.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i513[0], i512.main)
  i512.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i513[1], i512.colorBySpeed)
  i512.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i513[2], i512.colorOverLifetime)
  i512.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i513[3], i512.emission)
  i512.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i513[4], i512.rotationBySpeed)
  i512.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i513[5], i512.rotationOverLifetime)
  i512.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i513[6], i512.shape)
  i512.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i513[7], i512.sizeBySpeed)
  i512.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i513[8], i512.sizeOverLifetime)
  i512.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i513[9], i512.textureSheetAnimation)
  i512.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i513[10], i512.velocityOverLifetime)
  i512.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i513[11], i512.noise)
  i512.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i513[12], i512.inheritVelocity)
  i512.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i513[13], i512.forceOverLifetime)
  i512.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i513[14], i512.limitVelocityOverLifetime)
  i512.useAutoRandomSeed = !!i513[15]
  i512.randomSeed = i513[16]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i514 = root || new pc.ParticleSystemMain()
  var i515 = data
  i514.duration = i515[0]
  i514.loop = !!i515[1]
  i514.prewarm = !!i515[2]
  i514.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[3], i514.startDelay)
  i514.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[4], i514.startLifetime)
  i514.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[5], i514.startSpeed)
  i514.startSize3D = !!i515[6]
  i514.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[7], i514.startSizeX)
  i514.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[8], i514.startSizeY)
  i514.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[9], i514.startSizeZ)
  i514.startRotation3D = !!i515[10]
  i514.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[11], i514.startRotationX)
  i514.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[12], i514.startRotationY)
  i514.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[13], i514.startRotationZ)
  i514.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i515[14], i514.startColor)
  i514.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[15], i514.gravityModifier)
  i514.simulationSpace = i515[16]
  request.r(i515[17], i515[18], 0, i514, 'customSimulationSpace')
  i514.simulationSpeed = i515[19]
  i514.useUnscaledTime = !!i515[20]
  i514.scalingMode = i515[21]
  i514.playOnAwake = !!i515[22]
  i514.maxParticles = i515[23]
  i514.emitterVelocityMode = i515[24]
  i514.stopAction = i515[25]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i516 = root || new pc.MinMaxCurve()
  var i517 = data
  i516.mode = i517[0]
  i516.curveMin = new pc.AnimationCurve( { keys_flow: i517[1] } )
  i516.curveMax = new pc.AnimationCurve( { keys_flow: i517[2] } )
  i516.curveMultiplier = i517[3]
  i516.constantMin = i517[4]
  i516.constantMax = i517[5]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i518 = root || new pc.MinMaxGradient()
  var i519 = data
  i518.mode = i519[0]
  i518.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i519[1], i518.gradientMin)
  i518.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i519[2], i518.gradientMax)
  i518.colorMin = new pc.Color(i519[3], i519[4], i519[5], i519[6])
  i518.colorMax = new pc.Color(i519[7], i519[8], i519[9], i519[10])
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i521 = data
  i520.mode = i521[0]
  var i523 = i521[1]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i523[i + 0]) );
  }
  i520.colorKeys = i522
  var i525 = i521[2]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i525[i + 0]) );
  }
  i520.alphaKeys = i524
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i526 = root || new pc.ParticleSystemColorBySpeed()
  var i527 = data
  i526.enabled = !!i527[0]
  i526.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i527[1], i526.color)
  i526.range = new pc.Vec2( i527[2], i527[3] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i531 = data
  i530.color = new pc.Color(i531[0], i531[1], i531[2], i531[3])
  i530.time = i531[4]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i535 = data
  i534.alpha = i535[0]
  i534.time = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemColorOverLifetime()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i537[1], i536.color)
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemEmitter()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[1], i538.rateOverTime)
  i538.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[2], i538.rateOverDistance)
  var i541 = i539[3]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i541[i + 0]) );
  }
  i538.bursts = i540
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemBurst()
  var i545 = data
  i544.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[0], i544.count)
  i544.cycleCount = i545[1]
  i544.minCount = i545[2]
  i544.maxCount = i545[3]
  i544.repeatInterval = i545[4]
  i544.time = i545[5]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemRotationBySpeed()
  var i547 = data
  i546.enabled = !!i547[0]
  i546.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[1], i546.x)
  i546.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[2], i546.y)
  i546.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[3], i546.z)
  i546.separateAxes = !!i547[4]
  i546.range = new pc.Vec2( i547[5], i547[6] )
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemRotationOverLifetime()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[1], i548.x)
  i548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[2], i548.y)
  i548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[3], i548.z)
  i548.separateAxes = !!i549[4]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemShape()
  var i551 = data
  i550.enabled = !!i551[0]
  i550.shapeType = i551[1]
  i550.randomDirectionAmount = i551[2]
  i550.sphericalDirectionAmount = i551[3]
  i550.randomPositionAmount = i551[4]
  i550.alignToDirection = !!i551[5]
  i550.radius = i551[6]
  i550.radiusMode = i551[7]
  i550.radiusSpread = i551[8]
  i550.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[9], i550.radiusSpeed)
  i550.radiusThickness = i551[10]
  i550.angle = i551[11]
  i550.length = i551[12]
  i550.boxThickness = new pc.Vec3( i551[13], i551[14], i551[15] )
  i550.meshShapeType = i551[16]
  request.r(i551[17], i551[18], 0, i550, 'mesh')
  request.r(i551[19], i551[20], 0, i550, 'meshRenderer')
  request.r(i551[21], i551[22], 0, i550, 'skinnedMeshRenderer')
  i550.useMeshMaterialIndex = !!i551[23]
  i550.meshMaterialIndex = i551[24]
  i550.useMeshColors = !!i551[25]
  i550.normalOffset = i551[26]
  i550.arc = i551[27]
  i550.arcMode = i551[28]
  i550.arcSpread = i551[29]
  i550.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[30], i550.arcSpeed)
  i550.donutRadius = i551[31]
  i550.position = new pc.Vec3( i551[32], i551[33], i551[34] )
  i550.rotation = new pc.Vec3( i551[35], i551[36], i551[37] )
  i550.scale = new pc.Vec3( i551[38], i551[39], i551[40] )
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemSizeBySpeed()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[1], i552.x)
  i552.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[2], i552.y)
  i552.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[3], i552.z)
  i552.separateAxes = !!i553[4]
  i552.range = new pc.Vec2( i553[5], i553[6] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemSizeOverLifetime()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[1], i554.x)
  i554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[2], i554.y)
  i554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.z)
  i554.separateAxes = !!i555[4]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.mode = i557[1]
  i556.animation = i557[2]
  i556.numTilesX = i557[3]
  i556.numTilesY = i557[4]
  i556.useRandomRow = !!i557[5]
  i556.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[6], i556.frameOverTime)
  i556.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[7], i556.startFrame)
  i556.cycleCount = i557[8]
  i556.rowIndex = i557[9]
  i556.flipU = i557[10]
  i556.flipV = i557[11]
  i556.spriteCount = i557[12]
  var i559 = i557[13]
  var i558 = []
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 2, i558, '')
  }
  i556.sprites = i558
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[1], i562.x)
  i562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[2], i562.y)
  i562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[3], i562.z)
  i562.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[4], i562.radial)
  i562.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[5], i562.speedModifier)
  i562.space = i563[6]
  i562.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[7], i562.orbitalX)
  i562.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[8], i562.orbitalY)
  i562.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[9], i562.orbitalZ)
  i562.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[10], i562.orbitalOffsetX)
  i562.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[11], i562.orbitalOffsetY)
  i562.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[12], i562.orbitalOffsetZ)
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemNoise()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.separateAxes = !!i565[1]
  i564.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.strengthX)
  i564.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[3], i564.strengthY)
  i564.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[4], i564.strengthZ)
  i564.frequency = i565[5]
  i564.damping = !!i565[6]
  i564.octaveCount = i565[7]
  i564.octaveMultiplier = i565[8]
  i564.octaveScale = i565[9]
  i564.quality = i565[10]
  i564.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[11], i564.scrollSpeed)
  i564.scrollSpeedMultiplier = i565[12]
  i564.remapEnabled = !!i565[13]
  i564.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[14], i564.remapX)
  i564.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[15], i564.remapY)
  i564.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[16], i564.remapZ)
  i564.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[17], i564.positionAmount)
  i564.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[18], i564.rotationAmount)
  i564.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[19], i564.sizeAmount)
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemInheritVelocity()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.mode = i567[1]
  i566.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[2], i566.curve)
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemForceOverLifetime()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[1], i568.x)
  i568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[2], i568.y)
  i568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[3], i568.z)
  i568.space = i569[4]
  i568.randomized = !!i569[5]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[1], i570.limit)
  i570.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.limitX)
  i570.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[3], i570.limitY)
  i570.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[4], i570.limitZ)
  i570.dampen = i571[5]
  i570.separateAxes = !!i571[6]
  i570.space = i571[7]
  i570.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[8], i570.drag)
  i570.multiplyDragByParticleSize = !!i571[9]
  i570.multiplyDragByParticleVelocity = !!i571[10]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'mesh')
  i572.meshCount = i573[2]
  i572.activeVertexStreamsCount = i573[3]
  i572.alignment = i573[4]
  i572.renderMode = i573[5]
  i572.sortMode = i573[6]
  i572.lengthScale = i573[7]
  i572.velocityScale = i573[8]
  i572.cameraVelocityScale = i573[9]
  i572.normalDirection = i573[10]
  i572.sortingFudge = i573[11]
  i572.minParticleSize = i573[12]
  i572.maxParticleSize = i573[13]
  i572.pivot = new pc.Vec3( i573[14], i573[15], i573[16] )
  request.r(i573[17], i573[18], 0, i572, 'trailMaterial')
  i572.applyActiveColorSpace = !!i573[19]
  i572.enabled = !!i573[20]
  request.r(i573[21], i573[22], 0, i572, 'sharedMaterial')
  var i575 = i573[23]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i572.sharedMaterials = i574
  i572.receiveShadows = !!i573[24]
  i572.shadowCastingMode = i573[25]
  i572.sortingLayerID = i573[26]
  i572.sortingOrder = i573[27]
  i572.lightmapIndex = i573[28]
  i572.lightmapSceneIndex = i573[29]
  i572.lightmapScaleOffset = new pc.Vec4( i573[30], i573[31], i573[32], i573[33] )
  i572.lightProbeUsage = i573[34]
  i572.reflectionProbeUsage = i573[35]
  return i572
}

Deserializers["Project.Scripts.HexCore.HexStack"] = function (request, data, root) {
  var i576 = root || request.c( 'Project.Scripts.HexCore.HexStack' )
  var i577 = data
  var i579 = i577[0]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576._possibleColors = i578
  i576._minHexagons = i577[1]
  i576._maxHexagons = i577[2]
  i576._isRandom = !!i577[3]
  i576._noRandomCount = i577[4]
  i576._isTwoColors = !!i577[5]
  request.r(i577[6], i577[7], 0, i576, '_dragHandler')
  return i576
}

Deserializers["Project.Scripts.HexCore.Hex"] = function (request, data, root) {
  var i582 = root || request.c( 'Project.Scripts.HexCore.Hex' )
  var i583 = data
  i582._hexColor = i583[0]
  request.r(i583[1], i583[2], 0, i582, '_audioSource')
  request.r(i583[3], i583[4], 0, i582, '_moveClip')
  request.r(i583[5], i583[6], 0, i582, '_destroyClip')
  return i582
}

Deserializers["Project.Scripts.InputSystem.DragHandler"] = function (request, data, root) {
  var i584 = root || request.c( 'Project.Scripts.InputSystem.DragHandler' )
  var i585 = data
  i584._liftHeight = i585[0]
  i584._returnDuration = i585[1]
  request.r(i585[2], i585[3], 0, i584, '_audioSource')
  request.r(i585[4], i585[5], 0, i584, '_pickupClip')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i587 = data
  i586.name = i587[0]
  i586.atlasId = i587[1]
  i586.mipmapCount = i587[2]
  i586.hdr = !!i587[3]
  i586.size = i587[4]
  i586.anisoLevel = i587[5]
  i586.filterMode = i587[6]
  var i589 = i587[7]
  var i588 = []
  for(var i = 0; i < i589.length; i += 4) {
    i588.push( UnityEngine.Rect.MinMaxRect(i589[i + 0], i589[i + 1], i589[i + 2], i589[i + 3]) );
  }
  i586.rects = i588
  i586.wrapU = i587[8]
  i586.wrapV = i587[9]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i593 = data
  i592.name = i593[0]
  i592.index = i593[1]
  i592.startup = !!i593[2]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i595 = data
  i594.aspect = i595[0]
  i594.orthographic = !!i595[1]
  i594.orthographicSize = i595[2]
  i594.backgroundColor = new pc.Color(i595[3], i595[4], i595[5], i595[6])
  i594.nearClipPlane = i595[7]
  i594.farClipPlane = i595[8]
  i594.fieldOfView = i595[9]
  i594.depth = i595[10]
  i594.clearFlags = i595[11]
  i594.cullingMask = i595[12]
  i594.rect = i595[13]
  request.r(i595[14], i595[15], 0, i594, 'targetTexture')
  i594.usePhysicalProperties = !!i595[16]
  i594.focalLength = i595[17]
  i594.sensorSize = new pc.Vec2( i595[18], i595[19] )
  i594.lensShift = new pc.Vec2( i595[20], i595[21] )
  i594.gateFit = i595[22]
  i594.commandBufferCount = i595[23]
  i594.cameraType = i595[24]
  i594.enabled = !!i595[25]
  return i594
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i597 = data
  i596.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i597[0] )
  i596.m_MaxRayIntersections = i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i599 = data
  i598.type = i599[0]
  i598.color = new pc.Color(i599[1], i599[2], i599[3], i599[4])
  i598.cullingMask = i599[5]
  i598.intensity = i599[6]
  i598.range = i599[7]
  i598.spotAngle = i599[8]
  i598.shadows = i599[9]
  i598.shadowNormalBias = i599[10]
  i598.shadowBias = i599[11]
  i598.shadowStrength = i599[12]
  i598.shadowResolution = i599[13]
  i598.lightmapBakeType = i599[14]
  i598.renderMode = i599[15]
  request.r(i599[16], i599[17], 0, i598, 'cookie')
  i598.cookieSize = i599[18]
  i598.shadowNearPlane = i599[19]
  i598.occlusionMaskChannel = i599[20]
  i598.isBaked = !!i599[21]
  i598.mixedLightingMode = i599[22]
  i598.enabled = !!i599[23]
  return i598
}

Deserializers["Project.Scripts.HexCore.HexGrid"] = function (request, data, root) {
  var i600 = root || request.c( 'Project.Scripts.HexCore.HexGrid' )
  var i601 = data
  i600._gridRadius = i601[0]
  i600._cellSpacing = i601[1]
  request.r(i601[2], i601[3], 0, i600, '_hexCellPrefab')
  return i600
}

Deserializers["Project.Scripts.Game.EntryPoint"] = function (request, data, root) {
  var i602 = root || request.c( 'Project.Scripts.Game.EntryPoint' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, '_hexGrid')
  var i605 = i603[2]
  var i604 = []
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 2, i604, '')
  }
  i602._initialStacks = i604
  request.r(i603[3], i603[4], 0, i602, '_dragHexStackPrefab')
  var i607 = i603[5]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i602._dragHexStackSpawnPoints = i606
  request.r(i603[6], i603[7], 0, i602, '_endGame')
  request.r(i603[8], i603[9], 0, i602, '_chainReactionOfHex')
  request.r(i603[10], i603[11], 0, i602, '_tutorialPointer')
  i602._dragSpawnDuration = i603[12]
  i602._gameDuration = i603[13]
  request.r(i603[14], i603[15], 0, i602, '_timerView')
  return i602
}

Deserializers["Project.Scripts.Game.EndGame"] = function (request, data, root) {
  var i612 = root || request.c( 'Project.Scripts.Game.EndGame' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, '_endGameCanvasGroup')
  request.r(i613[2], i613[3], 0, i612, '_playNowButton')
  request.r(i613[4], i613[5], 0, i612, '_tutorialPointer')
  return i612
}

Deserializers["Project.Scripts.HexCore.ChainReactionOfHex"] = function (request, data, root) {
  var i614 = root || request.c( 'Project.Scripts.HexCore.ChainReactionOfHex' )
  var i615 = data
  i614._moveCurve = new pc.AnimationCurve( { keys_flow: i615[0] } )
  request.r(i615[1], i615[2], 0, i614, '_hexGrid')
  i614._baseMoveDuration = i615[3]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i617 = data
  i616.pivot = new pc.Vec2( i617[0], i617[1] )
  i616.anchorMin = new pc.Vec2( i617[2], i617[3] )
  i616.anchorMax = new pc.Vec2( i617[4], i617[5] )
  i616.sizeDelta = new pc.Vec2( i617[6], i617[7] )
  i616.anchoredPosition3D = new pc.Vec3( i617[8], i617[9], i617[10] )
  i616.rotation = new pc.Quat(i617[11], i617[12], i617[13], i617[14])
  i616.scale = new pc.Vec3( i617[15], i617[16], i617[17] )
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i619 = data
  i618.planeDistance = i619[0]
  i618.referencePixelsPerUnit = i619[1]
  i618.isFallbackOverlay = !!i619[2]
  i618.renderMode = i619[3]
  i618.renderOrder = i619[4]
  i618.sortingLayerName = i619[5]
  i618.sortingOrder = i619[6]
  i618.scaleFactor = i619[7]
  request.r(i619[8], i619[9], 0, i618, 'worldCamera')
  i618.overrideSorting = !!i619[10]
  i618.pixelPerfect = !!i619[11]
  i618.targetDisplay = i619[12]
  i618.overridePixelPerfect = !!i619[13]
  i618.enabled = !!i619[14]
  return i618
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i621 = data
  i620.m_UiScaleMode = i621[0]
  i620.m_ReferencePixelsPerUnit = i621[1]
  i620.m_ScaleFactor = i621[2]
  i620.m_ReferenceResolution = new pc.Vec2( i621[3], i621[4] )
  i620.m_ScreenMatchMode = i621[5]
  i620.m_MatchWidthOrHeight = i621[6]
  i620.m_PhysicalUnit = i621[7]
  i620.m_FallbackScreenDPI = i621[8]
  i620.m_DefaultSpriteDPI = i621[9]
  i620.m_DynamicPixelsPerUnit = i621[10]
  i620.m_PresetInfoIsWorld = !!i621[11]
  return i620
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i623 = data
  i622.m_IgnoreReversedGraphics = !!i623[0]
  i622.m_BlockingObjects = i623[1]
  i622.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i623[2] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i625 = data
  i624.m_Alpha = i625[0]
  i624.m_Interactable = !!i625[1]
  i624.m_BlocksRaycasts = !!i625[2]
  i624.m_IgnoreParentGroups = !!i625[3]
  i624.enabled = !!i625[4]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i627 = data
  i626.cullTransparentMesh = !!i627[0]
  return i626
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Image' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_Sprite')
  i628.m_Type = i629[2]
  i628.m_PreserveAspect = !!i629[3]
  i628.m_FillCenter = !!i629[4]
  i628.m_FillMethod = i629[5]
  i628.m_FillAmount = i629[6]
  i628.m_FillClockwise = !!i629[7]
  i628.m_FillOrigin = i629[8]
  i628.m_UseSpriteMesh = !!i629[9]
  i628.m_PixelsPerUnitMultiplier = i629[10]
  request.r(i629[11], i629[12], 0, i628, 'm_Material')
  i628.m_Maskable = !!i629[13]
  i628.m_Color = new pc.Color(i629[14], i629[15], i629[16], i629[17])
  i628.m_RaycastTarget = !!i629[18]
  i628.m_RaycastPadding = new pc.Vec4( i629[19], i629[20], i629[21], i629[22] )
  return i628
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Button' )
  var i631 = data
  i630.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i631[0], i630.m_OnClick)
  i630.m_Navigation = request.d('UnityEngine.UI.Navigation', i631[1], i630.m_Navigation)
  i630.m_Transition = i631[2]
  i630.m_Colors = request.d('UnityEngine.UI.ColorBlock', i631[3], i630.m_Colors)
  i630.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i631[4], i630.m_SpriteState)
  i630.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i631[5], i630.m_AnimationTriggers)
  i630.m_Interactable = !!i631[6]
  request.r(i631[7], i631[8], 0, i630, 'm_TargetGraphic')
  return i630
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i633 = data
  i632.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i633[0], i632.m_PersistentCalls)
  return i632
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i635 = data
  var i637 = i635[0]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i637.length; i += 1) {
    i636.add(request.d('UnityEngine.Events.PersistentCall', i637[i + 0]));
  }
  i634.m_Calls = i636
  return i634
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_Target')
  i640.m_TargetAssemblyTypeName = i641[2]
  i640.m_MethodName = i641[3]
  i640.m_Mode = i641[4]
  i640.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i641[5], i640.m_Arguments)
  i640.m_CallState = i641[6]
  return i640
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i643 = data
  i642.m_Mode = i643[0]
  i642.m_WrapAround = !!i643[1]
  request.r(i643[2], i643[3], 0, i642, 'm_SelectOnUp')
  request.r(i643[4], i643[5], 0, i642, 'm_SelectOnDown')
  request.r(i643[6], i643[7], 0, i642, 'm_SelectOnLeft')
  request.r(i643[8], i643[9], 0, i642, 'm_SelectOnRight')
  return i642
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i645 = data
  i644.m_NormalColor = new pc.Color(i645[0], i645[1], i645[2], i645[3])
  i644.m_HighlightedColor = new pc.Color(i645[4], i645[5], i645[6], i645[7])
  i644.m_PressedColor = new pc.Color(i645[8], i645[9], i645[10], i645[11])
  i644.m_SelectedColor = new pc.Color(i645[12], i645[13], i645[14], i645[15])
  i644.m_DisabledColor = new pc.Color(i645[16], i645[17], i645[18], i645[19])
  i644.m_ColorMultiplier = i645[20]
  i644.m_FadeDuration = i645[21]
  return i644
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'm_HighlightedSprite')
  request.r(i647[2], i647[3], 0, i646, 'm_PressedSprite')
  request.r(i647[4], i647[5], 0, i646, 'm_SelectedSprite')
  request.r(i647[6], i647[7], 0, i646, 'm_DisabledSprite')
  return i646
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i649 = data
  i648.m_NormalTrigger = i649[0]
  i648.m_HighlightedTrigger = i649[1]
  i648.m_PressedTrigger = i649[2]
  i648.m_SelectedTrigger = i649[3]
  i648.m_DisabledTrigger = i649[4]
  return i648
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Text' )
  var i651 = data
  i650.m_FontData = request.d('UnityEngine.UI.FontData', i651[0], i650.m_FontData)
  i650.m_Text = i651[1]
  request.r(i651[2], i651[3], 0, i650, 'm_Material')
  i650.m_Maskable = !!i651[4]
  i650.m_Color = new pc.Color(i651[5], i651[6], i651[7], i651[8])
  i650.m_RaycastTarget = !!i651[9]
  i650.m_RaycastPadding = new pc.Vec4( i651[10], i651[11], i651[12], i651[13] )
  return i650
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.FontData' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'm_Font')
  i652.m_FontSize = i653[2]
  i652.m_FontStyle = i653[3]
  i652.m_BestFit = !!i653[4]
  i652.m_MinSize = i653[5]
  i652.m_MaxSize = i653[6]
  i652.m_Alignment = i653[7]
  i652.m_AlignByGeometry = !!i653[8]
  i652.m_RichText = !!i653[9]
  i652.m_HorizontalOverflow = i653[10]
  i652.m_VerticalOverflow = i653[11]
  i652.m_LineSpacing = i653[12]
  return i652
}

Deserializers["Project.Scripts.UI.TutorialPointer"] = function (request, data, root) {
  var i654 = root || request.c( 'Project.Scripts.UI.TutorialPointer' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, '_handObject')
  request.r(i655[2], i655[3], 0, i654, '_handRect')
  request.r(i655[4], i655[5], 0, i654, '_parentCanvas')
  request.r(i655[6], i655[7], 0, i654, '_entryPoint')
  i654._idleTimeToShow = i655[8]
  i654._distance = i655[9]
  i654._duration = i655[10]
  return i654
}

Deserializers["Project.Scripts.UI.TimerView"] = function (request, data, root) {
  var i656 = root || request.c( 'Project.Scripts.UI.TimerView' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, '_fillImage')
  return i656
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_FirstSelected')
  i658.m_sendNavigationEvents = !!i659[2]
  i658.m_DragThreshold = i659[3]
  return i658
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i661 = data
  i660.m_HorizontalAxis = i661[0]
  i660.m_VerticalAxis = i661[1]
  i660.m_SubmitButton = i661[2]
  i660.m_CancelButton = i661[3]
  i660.m_InputActionsPerSecond = i661[4]
  i660.m_RepeatDelay = i661[5]
  i660.m_ForceModuleActive = !!i661[6]
  i660.m_SendPointerHoverToParent = !!i661[7]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i663 = data
  i662.ambientIntensity = i663[0]
  i662.reflectionIntensity = i663[1]
  i662.ambientMode = i663[2]
  i662.ambientLight = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.ambientSkyColor = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  i662.ambientGroundColor = new pc.Color(i663[11], i663[12], i663[13], i663[14])
  i662.ambientEquatorColor = new pc.Color(i663[15], i663[16], i663[17], i663[18])
  i662.fogColor = new pc.Color(i663[19], i663[20], i663[21], i663[22])
  i662.fogEndDistance = i663[23]
  i662.fogStartDistance = i663[24]
  i662.fogDensity = i663[25]
  i662.fog = !!i663[26]
  request.r(i663[27], i663[28], 0, i662, 'skybox')
  i662.fogMode = i663[29]
  var i665 = i663[30]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i665[i + 0]) );
  }
  i662.lightmaps = i664
  i662.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i663[31], i662.lightProbes)
  i662.lightmapsMode = i663[32]
  i662.mixedBakeMode = i663[33]
  i662.environmentLightingMode = i663[34]
  i662.ambientProbe = new pc.SphericalHarmonicsL2(i663[35])
  request.r(i663[36], i663[37], 0, i662, 'customReflection')
  request.r(i663[38], i663[39], 0, i662, 'defaultReflection')
  i662.defaultReflectionMode = i663[40]
  i662.defaultReflectionResolution = i663[41]
  i662.sunLightObjectId = i663[42]
  i662.pixelLightCount = i663[43]
  i662.defaultReflectionHDR = !!i663[44]
  i662.hasLightDataAsset = !!i663[45]
  i662.hasManualGenerate = !!i663[46]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'lightmapColor')
  request.r(i669[2], i669[3], 0, i668, 'lightmapDirection')
  request.r(i669[4], i669[5], 0, i668, 'shadowMask')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i670 = root || new UnityEngine.LightProbes()
  var i671 = data
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i679 = data
  var i681 = i679[0]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i681[i + 0]));
  }
  i678.ShaderCompilationErrors = i680
  i678.name = i679[1]
  i678.guid = i679[2]
  var i683 = i679[3]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( i683[i + 0] );
  }
  i678.shaderDefinedKeywords = i682
  var i685 = i679[4]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i685[i + 0]) );
  }
  i678.passes = i684
  var i687 = i679[5]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i687[i + 0]) );
  }
  i678.usePasses = i686
  var i689 = i679[6]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i689[i + 0]) );
  }
  i678.defaultParameterValues = i688
  request.r(i679[7], i679[8], 0, i678, 'unityFallbackShader')
  i678.readDepth = !!i679[9]
  i678.hasDepthOnlyPass = !!i679[10]
  i678.isCreatedByShaderGraph = !!i679[11]
  i678.disableBatching = !!i679[12]
  i678.compiled = !!i679[13]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i693 = data
  i692.shaderName = i693[0]
  i692.errorMessage = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i698 = root || new pc.UnityShaderPass()
  var i699 = data
  i698.id = i699[0]
  i698.subShaderIndex = i699[1]
  i698.name = i699[2]
  i698.passType = i699[3]
  i698.grabPassTextureName = i699[4]
  i698.usePass = !!i699[5]
  i698.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[6], i698.zTest)
  i698.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[7], i698.zWrite)
  i698.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[8], i698.culling)
  i698.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i699[9], i698.blending)
  i698.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i699[10], i698.alphaBlending)
  i698.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[11], i698.colorWriteMask)
  i698.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[12], i698.offsetUnits)
  i698.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[13], i698.offsetFactor)
  i698.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[14], i698.stencilRef)
  i698.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[15], i698.stencilReadMask)
  i698.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[16], i698.stencilWriteMask)
  i698.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i699[17], i698.stencilOp)
  i698.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i699[18], i698.stencilOpFront)
  i698.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i699[19], i698.stencilOpBack)
  var i701 = i699[20]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i701[i + 0]) );
  }
  i698.tags = i700
  var i703 = i699[21]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i698.passDefinedKeywords = i702
  var i705 = i699[22]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i705[i + 0]) );
  }
  i698.passDefinedKeywordGroups = i704
  var i707 = i699[23]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i707[i + 0]) );
  }
  i698.variants = i706
  var i709 = i699[24]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i709[i + 0]) );
  }
  i698.excludedVariants = i708
  i698.hasDepthReader = !!i699[25]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i711 = data
  i710.val = i711[0]
  i710.name = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i713 = data
  i712.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[0], i712.src)
  i712.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[1], i712.dst)
  i712.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[2], i712.op)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i715 = data
  i714.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[0], i714.pass)
  i714.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[1], i714.fail)
  i714.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[2], i714.zFail)
  i714.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[3], i714.comp)
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i719 = data
  i718.name = i719[0]
  i718.value = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i723 = data
  var i725 = i723[0]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i722.keywords = i724
  i722.hasDiscard = !!i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i729 = data
  i728.passId = i729[0]
  i728.subShaderIndex = i729[1]
  var i731 = i729[2]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i728.keywords = i730
  i728.vertexProgram = i729[3]
  i728.fragmentProgram = i729[4]
  i728.exportedForWebGl2 = !!i729[5]
  i728.readDepth = !!i729[6]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'shader')
  i734.pass = i735[2]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i739 = data
  i738.name = i739[0]
  i738.type = i739[1]
  i738.value = new pc.Vec4( i739[2], i739[3], i739[4], i739[5] )
  i738.textureValue = i739[6]
  i738.shaderPropertyFlag = i739[7]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i741 = data
  i740.name = i741[0]
  request.r(i741[1], i741[2], 0, i740, 'texture')
  i740.aabb = i741[3]
  i740.vertices = i741[4]
  i740.triangles = i741[5]
  i740.textureRect = UnityEngine.Rect.MinMaxRect(i741[6], i741[7], i741[8], i741[9])
  i740.packedRect = UnityEngine.Rect.MinMaxRect(i741[10], i741[11], i741[12], i741[13])
  i740.border = new pc.Vec4( i741[14], i741[15], i741[16], i741[17] )
  i740.transparency = i741[18]
  i740.bounds = i741[19]
  i740.pixelsPerUnit = i741[20]
  i740.textureWidth = i741[21]
  i740.textureHeight = i741[22]
  i740.nativeSize = new pc.Vec2( i741[23], i741[24] )
  i740.pivot = new pc.Vec2( i741[25], i741[26] )
  i740.textureRectOffset = new pc.Vec2( i741[27], i741[28] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i743 = data
  i742.name = i743[0]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i745 = data
  i744.name = i745[0]
  i744.ascent = i745[1]
  i744.originalLineHeight = i745[2]
  i744.fontSize = i745[3]
  var i747 = i745[4]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i747[i + 0]) );
  }
  i744.characterInfo = i746
  request.r(i745[5], i745[6], 0, i744, 'texture')
  i744.originalFontSize = i745[7]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i751 = data
  i750.index = i751[0]
  i750.advance = i751[1]
  i750.bearing = i751[2]
  i750.glyphWidth = i751[3]
  i750.glyphHeight = i751[4]
  i750.minX = i751[5]
  i750.maxX = i751[6]
  i750.minY = i751[7]
  i750.maxY = i751[8]
  i750.uvBottomLeftX = i751[9]
  i750.uvBottomLeftY = i751[10]
  i750.uvBottomRightX = i751[11]
  i750.uvBottomRightY = i751[12]
  i750.uvTopLeftX = i751[13]
  i750.uvTopLeftY = i751[14]
  i750.uvTopRightX = i751[15]
  i750.uvTopRightY = i751[16]
  return i750
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i753 = data
  i752.useSafeMode = !!i753[0]
  i752.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i753[1], i752.safeModeOptions)
  i752.timeScale = i753[2]
  i752.unscaledTimeScale = i753[3]
  i752.useSmoothDeltaTime = !!i753[4]
  i752.maxSmoothUnscaledTime = i753[5]
  i752.rewindCallbackMode = i753[6]
  i752.showUnityEditorReport = !!i753[7]
  i752.logBehaviour = i753[8]
  i752.drawGizmos = !!i753[9]
  i752.defaultRecyclable = !!i753[10]
  i752.defaultAutoPlay = i753[11]
  i752.defaultUpdateType = i753[12]
  i752.defaultTimeScaleIndependent = !!i753[13]
  i752.defaultEaseType = i753[14]
  i752.defaultEaseOvershootOrAmplitude = i753[15]
  i752.defaultEasePeriod = i753[16]
  i752.defaultAutoKill = !!i753[17]
  i752.defaultLoopType = i753[18]
  i752.debugMode = !!i753[19]
  i752.debugStoreTargetId = !!i753[20]
  i752.showPreviewPanel = !!i753[21]
  i752.storeSettingsLocation = i753[22]
  i752.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i753[23], i752.modules)
  i752.createASMDEF = !!i753[24]
  i752.showPlayingTweens = !!i753[25]
  i752.showPausedTweens = !!i753[26]
  return i752
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i755 = data
  i754.logBehaviour = i755[0]
  i754.nestedTweenFailureBehaviour = i755[1]
  return i754
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i756 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i757 = data
  i756.showPanel = !!i757[0]
  i756.audioEnabled = !!i757[1]
  i756.physicsEnabled = !!i757[2]
  i756.physics2DEnabled = !!i757[3]
  i756.spriteEnabled = !!i757[4]
  i756.uiEnabled = !!i757[5]
  i756.textMeshProEnabled = !!i757[6]
  i756.tk2DEnabled = !!i757[7]
  i756.deAudioEnabled = !!i757[8]
  i756.deUnityExtendedEnabled = !!i757[9]
  i756.epoOutlineEnabled = !!i757[10]
  return i756
}

Deserializers["Project.Scripts.Game.Constants.CustomPalette"] = function (request, data, root) {
  var i758 = root || request.c( 'Project.Scripts.Game.Constants.CustomPalette' )
  var i759 = data
  var i761 = i759[0]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Project.Scripts.Game.Constants.ColorEntry', i761[i + 0]) );
  }
  i758.colors = i760
  return i758
}

Deserializers["Project.Scripts.Game.Constants.ColorEntry"] = function (request, data, root) {
  var i764 = root || request.c( 'Project.Scripts.Game.Constants.ColorEntry' )
  var i765 = data
  i764.Name = i765[0]
  i764.Color = new pc.Color(i765[1], i765[2], i765[3], i765[4])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i767 = data
  var i769 = i767[0]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i769[i + 0]) );
  }
  i766.files = i768
  i766.componentToPrefabIds = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i773 = data
  i772.path = i773[0]
  request.r(i773[1], i773[2], 0, i772, 'unityObject')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i775 = data
  var i777 = i775[0]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i777[i + 0]) );
  }
  i774.scriptsExecutionOrder = i776
  var i779 = i775[1]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i779[i + 0]) );
  }
  i774.sortingLayers = i778
  var i781 = i775[2]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i781[i + 0]) );
  }
  i774.cullingLayers = i780
  i774.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i775[3], i774.timeSettings)
  i774.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i775[4], i774.physicsSettings)
  i774.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i775[5], i774.physics2DSettings)
  i774.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i775[6], i774.qualitySettings)
  i774.enableRealtimeShadows = !!i775[7]
  i774.enableAutoInstancing = !!i775[8]
  i774.enableStaticBatching = !!i775[9]
  i774.enableDynamicBatching = !!i775[10]
  i774.usePreservativeDynamicBatching = !!i775[11]
  i774.lightmapEncodingQuality = i775[12]
  i774.desiredColorSpace = i775[13]
  var i783 = i775[14]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i774.allTags = i782
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i787 = data
  i786.name = i787[0]
  i786.value = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i791 = data
  i790.id = i791[0]
  i790.name = i791[1]
  i790.value = i791[2]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i795 = data
  i794.id = i795[0]
  i794.name = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i797 = data
  i796.fixedDeltaTime = i797[0]
  i796.maximumDeltaTime = i797[1]
  i796.timeScale = i797[2]
  i796.maximumParticleTimestep = i797[3]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i799 = data
  i798.gravity = new pc.Vec3( i799[0], i799[1], i799[2] )
  i798.defaultSolverIterations = i799[3]
  i798.bounceThreshold = i799[4]
  i798.autoSyncTransforms = !!i799[5]
  i798.autoSimulation = !!i799[6]
  var i801 = i799[7]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i801[i + 0]) );
  }
  i798.collisionMatrix = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i805 = data
  i804.enabled = !!i805[0]
  i804.layerId = i805[1]
  i804.otherLayerId = i805[2]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'material')
  i806.gravity = new pc.Vec2( i807[2], i807[3] )
  i806.positionIterations = i807[4]
  i806.velocityIterations = i807[5]
  i806.velocityThreshold = i807[6]
  i806.maxLinearCorrection = i807[7]
  i806.maxAngularCorrection = i807[8]
  i806.maxTranslationSpeed = i807[9]
  i806.maxRotationSpeed = i807[10]
  i806.baumgarteScale = i807[11]
  i806.baumgarteTOIScale = i807[12]
  i806.timeToSleep = i807[13]
  i806.linearSleepTolerance = i807[14]
  i806.angularSleepTolerance = i807[15]
  i806.defaultContactOffset = i807[16]
  i806.autoSimulation = !!i807[17]
  i806.queriesHitTriggers = !!i807[18]
  i806.queriesStartInColliders = !!i807[19]
  i806.callbacksOnDisable = !!i807[20]
  i806.reuseCollisionCallbacks = !!i807[21]
  i806.autoSyncTransforms = !!i807[22]
  var i809 = i807[23]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i809[i + 0]) );
  }
  i806.collisionMatrix = i808
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i813 = data
  i812.enabled = !!i813[0]
  i812.layerId = i813[1]
  i812.otherLayerId = i813[2]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i815 = data
  var i817 = i815[0]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i817[i + 0]) );
  }
  i814.qualityLevels = i816
  var i819 = i815[1]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.names = i818
  i814.shadows = i815[2]
  i814.anisotropicFiltering = i815[3]
  i814.antiAliasing = i815[4]
  i814.lodBias = i815[5]
  i814.shadowCascades = i815[6]
  i814.shadowDistance = i815[7]
  i814.shadowmaskMode = i815[8]
  i814.shadowProjection = i815[9]
  i814.shadowResolution = i815[10]
  i814.softParticles = !!i815[11]
  i814.softVegetation = !!i815[12]
  i814.activeColorSpace = i815[13]
  i814.desiredColorSpace = i815[14]
  i814.masterTextureLimit = i815[15]
  i814.maxQueuedFrames = i815[16]
  i814.particleRaycastBudget = i815[17]
  i814.pixelLightCount = i815[18]
  i814.realtimeReflectionProbes = !!i815[19]
  i814.shadowCascade2Split = i815[20]
  i814.shadowCascade4Split = new pc.Vec3( i815[21], i815[22], i815[23] )
  i814.streamingMipmapsActive = !!i815[24]
  i814.vSyncCount = i815[25]
  i814.asyncUploadBufferSize = i815[26]
  i814.asyncUploadTimeSlice = i815[27]
  i814.billboardsFaceCameraPosition = !!i815[28]
  i814.shadowNearPlaneOffset = i815[29]
  i814.streamingMipmapsMemoryBudget = i815[30]
  i814.maximumLODLevel = i815[31]
  i814.streamingMipmapsAddAllCameras = !!i815[32]
  i814.streamingMipmapsMaxLevelReduction = i815[33]
  i814.streamingMipmapsRenderersPerFrame = i815[34]
  i814.resolutionScalingFixedDPIFactor = i815[35]
  i814.streamingMipmapsMaxFileIORequests = i815[36]
  i814.currentQualityLevel = i815[37]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i825 = data
  i824.weight = i825[0]
  i824.vertices = i825[1]
  i824.normals = i825[2]
  i824.tangents = i825[3]
  return i824
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'm_ObjectArgument')
  i826.m_ObjectArgumentAssemblyTypeName = i827[2]
  i826.m_IntArgument = i827[3]
  i826.m_FloatArgument = i827[4]
  i826.m_StringArgument = i827[5]
  i826.m_BoolArgument = !!i827[6]
  return i826
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[17],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[17],"78":[3],"79":[80],"81":[80],"31":[30],"82":[35],"83":[35],"84":[37],"16":[14],"85":[86],"87":[30],"88":[30],"33":[31],"35":[34,30],"89":[30],"32":[31],"90":[30],"91":[30],"92":[30],"93":[30],"94":[30],"95":[30],"96":[30],"97":[30],"98":[30],"99":[34,30],"100":[30],"101":[30],"102":[30],"103":[30],"37":[34,30],"104":[30],"105":[40],"106":[40],"41":[40],"107":[40],"108":[17],"20":[17],"109":[86],"110":[111],"112":[40],"113":[31],"114":[86]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","Project.Scripts.HexCore.HexCell","UnityEngine.ParticleSystem","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider","UnityEngine.ParticleSystemRenderer","Project.Scripts.HexCore.HexStack","Project.Scripts.HexCore.Hex","Project.Scripts.InputSystem.DragHandler","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","Project.Scripts.HexCore.HexGrid","Project.Scripts.Game.EntryPoint","Project.Scripts.Game.EndGame","Project.Scripts.HexCore.ChainReactionOfHex","Project.Scripts.UI.TutorialPointer","Project.Scripts.UI.TimerView","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","Project.Scripts.Game.Constants.CustomPalette","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","DragMe","ScrollDetailTexture","ShowSliderValue","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.ScriptMachine","KeyFieldUnSelect","UnityEngine.UI.Selectable","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "SecondProject";

Deserializers.lunaInitializationTime = "05/05/2026 07:49:44";

Deserializers.lunaDaysRunning = "7.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "NewThreeRow-Standard";

Deserializers.lunaAppID = "39372";

Deserializers.projectId = "de0a43782df49ee41925f5872f728e15";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1698";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3518";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.SecondProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "f37afc5e-4066-485f-ad0f-3c38e00c27b9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

