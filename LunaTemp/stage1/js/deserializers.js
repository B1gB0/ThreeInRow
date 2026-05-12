var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointSpring' )
  var i529 = data
  i528.spring = i529[0]
  i528.damper = i529[1]
  i528.targetPosition = i529[2]
  return i528
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointMotor' )
  var i531 = data
  i530.m_TargetVelocity = i531[0]
  i530.m_Force = i531[1]
  i530.m_FreeSpin = i531[2]
  return i530
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointLimits' )
  var i533 = data
  i532.m_Min = i533[0]
  i532.m_Max = i533[1]
  i532.m_Bounciness = i533[2]
  i532.m_BounceMinVelocity = i533[3]
  i532.m_ContactDistance = i533[4]
  i532.minBounce = i533[5]
  i532.maxBounce = i533[6]
  return i532
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointDrive' )
  var i535 = data
  i534.m_PositionSpring = i535[0]
  i534.m_PositionDamper = i535[1]
  i534.m_MaximumForce = i535[2]
  i534.m_UseAcceleration = i535[3]
  return i534
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i537 = data
  i536.m_Spring = i537[0]
  i536.m_Damper = i537[1]
  return i536
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i539 = data
  i538.m_Limit = i539[0]
  i538.m_Bounciness = i539[1]
  i538.m_ContactDistance = i539[2]
  return i538
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i541 = data
  i540.m_ExtremumSlip = i541[0]
  i540.m_ExtremumValue = i541[1]
  i540.m_AsymptoteSlip = i541[2]
  i540.m_AsymptoteValue = i541[3]
  i540.m_Stiffness = i541[4]
  return i540
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i543 = data
  i542.m_LowerAngle = i543[0]
  i542.m_UpperAngle = i543[1]
  return i542
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i545 = data
  i544.m_MotorSpeed = i545[0]
  i544.m_MaximumMotorTorque = i545[1]
  return i544
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i547 = data
  i546.m_DampingRatio = i547[0]
  i546.m_Frequency = i547[1]
  i546.m_Angle = i547[2]
  return i546
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i549 = data
  i548.m_LowerTranslation = i549[0]
  i548.m_UpperTranslation = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i551 = data
  i550.position = new pc.Vec3( i551[0], i551[1], i551[2] )
  i550.scale = new pc.Vec3( i551[3], i551[4], i551[5] )
  i550.rotation = new pc.Quat(i551[6], i551[7], i551[8], i551[9])
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'sharedMesh')
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'additionalVertexStreams')
  i554.enabled = !!i555[2]
  request.r(i555[3], i555[4], 0, i554, 'sharedMaterial')
  var i557 = i555[5]
  var i556 = []
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 2, i556, '')
  }
  i554.sharedMaterials = i556
  i554.receiveShadows = !!i555[6]
  i554.shadowCastingMode = i555[7]
  i554.sortingLayerID = i555[8]
  i554.sortingOrder = i555[9]
  i554.lightmapIndex = i555[10]
  i554.lightmapSceneIndex = i555[11]
  i554.lightmapScaleOffset = new pc.Vec4( i555[12], i555[13], i555[14], i555[15] )
  i554.lightProbeUsage = i555[16]
  i554.reflectionProbeUsage = i555[17]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i561 = data
  i560.name = i561[0]
  i560.tagId = i561[1]
  i560.enabled = !!i561[2]
  i560.isStatic = !!i561[3]
  i560.layer = i561[4]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i563 = data
  i562.name = i563[0]
  i562.halfPrecision = !!i563[1]
  i562.useSimplification = !!i563[2]
  i562.useUInt32IndexFormat = !!i563[3]
  i562.vertexCount = i563[4]
  i562.aabb = i563[5]
  var i565 = i563[6]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( !!i565[i + 0] );
  }
  i562.streams = i564
  i562.vertices = i563[7]
  var i567 = i563[8]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i567[i + 0]) );
  }
  i562.subMeshes = i566
  var i569 = i563[9]
  var i568 = []
  for(var i = 0; i < i569.length; i += 16) {
    i568.push( new pc.Mat4().setData(i569[i + 0], i569[i + 1], i569[i + 2], i569[i + 3],  i569[i + 4], i569[i + 5], i569[i + 6], i569[i + 7],  i569[i + 8], i569[i + 9], i569[i + 10], i569[i + 11],  i569[i + 12], i569[i + 13], i569[i + 14], i569[i + 15]) );
  }
  i562.bindposes = i568
  var i571 = i563[10]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i571[i + 0]) );
  }
  i562.blendShapes = i570
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i577 = data
  i576.triangles = i577[0]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i583 = data
  i582.name = i583[0]
  var i585 = i583[1]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i585[i + 0]) );
  }
  i582.frames = i584
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i586 = root || new pc.UnityMaterial()
  var i587 = data
  i586.name = i587[0]
  request.r(i587[1], i587[2], 0, i586, 'shader')
  i586.renderQueue = i587[3]
  i586.enableInstancing = !!i587[4]
  var i589 = i587[5]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i589[i + 0]) );
  }
  i586.floatParameters = i588
  var i591 = i587[6]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i591[i + 0]) );
  }
  i586.colorParameters = i590
  var i593 = i587[7]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i593[i + 0]) );
  }
  i586.vectorParameters = i592
  var i595 = i587[8]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i595[i + 0]) );
  }
  i586.textureParameters = i594
  var i597 = i587[9]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i597[i + 0]) );
  }
  i586.materialFlags = i596
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i601 = data
  i600.name = i601[0]
  i600.value = i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i605 = data
  i604.name = i605[0]
  i604.value = new pc.Color(i605[1], i605[2], i605[3], i605[4])
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i609 = data
  i608.name = i609[0]
  i608.value = new pc.Vec4( i609[1], i609[2], i609[3], i609[4] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i613 = data
  i612.name = i613[0]
  request.r(i613[1], i613[2], 0, i612, 'value')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i617 = data
  i616.name = i617[0]
  i616.enabled = !!i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i619 = data
  i618.name = i619[0]
  i618.width = i619[1]
  i618.height = i619[2]
  i618.mipmapCount = i619[3]
  i618.anisoLevel = i619[4]
  i618.filterMode = i619[5]
  i618.hdr = !!i619[6]
  i618.format = i619[7]
  i618.wrapMode = i619[8]
  i618.alphaIsTransparency = !!i619[9]
  i618.alphaSource = i619[10]
  i618.graphicsFormat = i619[11]
  i618.sRGBTexture = !!i619[12]
  i618.desiredColorSpace = i619[13]
  i618.wrapU = i619[14]
  i618.wrapV = i619[15]
  return i618
}

Deserializers["Project.Scripts.HexCore.HexCell"] = function (request, data, root) {
  var i620 = root || request.c( 'Project.Scripts.HexCore.HexCell' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, '_highlightMaterial')
  request.r(i621[2], i621[3], 0, i620, '_defaultMaterial')
  request.r(i621[4], i621[5], 0, i620, '_meshRenderer')
  request.r(i621[6], i621[7], 0, i620, '_effect')
  request.r(i621[8], i621[9], 0, i620, '_audioSource')
  request.r(i621[10], i621[11], 0, i620, '_destroyClip')
  i620.<IsEmpty>k__BackingField = !!i621[12]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i623 = data
  i622.center = new pc.Vec3( i623[0], i623[1], i623[2] )
  i622.size = new pc.Vec3( i623[3], i623[4], i623[5] )
  i622.enabled = !!i623[6]
  i622.isTrigger = !!i623[7]
  request.r(i623[8], i623[9], 0, i622, 'material')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'clip')
  request.r(i625[2], i625[3], 0, i624, 'outputAudioMixerGroup')
  i624.playOnAwake = !!i625[4]
  i624.loop = !!i625[5]
  i624.time = i625[6]
  i624.volume = i625[7]
  i624.pitch = i625[8]
  i624.enabled = !!i625[9]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i627 = data
  i626.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i627[0], i626.main)
  i626.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i627[1], i626.colorBySpeed)
  i626.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i627[2], i626.colorOverLifetime)
  i626.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i627[3], i626.emission)
  i626.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i627[4], i626.rotationBySpeed)
  i626.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i627[5], i626.rotationOverLifetime)
  i626.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i627[6], i626.shape)
  i626.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i627[7], i626.sizeBySpeed)
  i626.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i627[8], i626.sizeOverLifetime)
  i626.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i627[9], i626.textureSheetAnimation)
  i626.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i627[10], i626.velocityOverLifetime)
  i626.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i627[11], i626.noise)
  i626.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i627[12], i626.inheritVelocity)
  i626.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i627[13], i626.forceOverLifetime)
  i626.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i627[14], i626.limitVelocityOverLifetime)
  i626.useAutoRandomSeed = !!i627[15]
  i626.randomSeed = i627[16]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemMain()
  var i629 = data
  i628.duration = i629[0]
  i628.loop = !!i629[1]
  i628.prewarm = !!i629[2]
  i628.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[3], i628.startDelay)
  i628.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[4], i628.startLifetime)
  i628.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[5], i628.startSpeed)
  i628.startSize3D = !!i629[6]
  i628.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[7], i628.startSizeX)
  i628.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[8], i628.startSizeY)
  i628.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[9], i628.startSizeZ)
  i628.startRotation3D = !!i629[10]
  i628.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[11], i628.startRotationX)
  i628.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[12], i628.startRotationY)
  i628.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[13], i628.startRotationZ)
  i628.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i629[14], i628.startColor)
  i628.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[15], i628.gravityModifier)
  i628.simulationSpace = i629[16]
  request.r(i629[17], i629[18], 0, i628, 'customSimulationSpace')
  i628.simulationSpeed = i629[19]
  i628.useUnscaledTime = !!i629[20]
  i628.scalingMode = i629[21]
  i628.playOnAwake = !!i629[22]
  i628.maxParticles = i629[23]
  i628.emitterVelocityMode = i629[24]
  i628.stopAction = i629[25]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i630 = root || new pc.MinMaxCurve()
  var i631 = data
  i630.mode = i631[0]
  i630.curveMin = new pc.AnimationCurve( { keys_flow: i631[1] } )
  i630.curveMax = new pc.AnimationCurve( { keys_flow: i631[2] } )
  i630.curveMultiplier = i631[3]
  i630.constantMin = i631[4]
  i630.constantMax = i631[5]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i632 = root || new pc.MinMaxGradient()
  var i633 = data
  i632.mode = i633[0]
  i632.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i633[1], i632.gradientMin)
  i632.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i633[2], i632.gradientMax)
  i632.colorMin = new pc.Color(i633[3], i633[4], i633[5], i633[6])
  i632.colorMax = new pc.Color(i633[7], i633[8], i633[9], i633[10])
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i635 = data
  i634.mode = i635[0]
  var i637 = i635[1]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i637[i + 0]) );
  }
  i634.colorKeys = i636
  var i639 = i635[2]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i639[i + 0]) );
  }
  i634.alphaKeys = i638
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemColorBySpeed()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i641[1], i640.color)
  i640.range = new pc.Vec2( i641[2], i641[3] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i645 = data
  i644.color = new pc.Color(i645[0], i645[1], i645[2], i645[3])
  i644.time = i645[4]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i649 = data
  i648.alpha = i649[0]
  i648.time = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemColorOverLifetime()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i651[1], i650.color)
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemEmitter()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[1], i652.rateOverTime)
  i652.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.rateOverDistance)
  var i655 = i653[3]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i655[i + 0]) );
  }
  i652.bursts = i654
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemBurst()
  var i659 = data
  i658.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[0], i658.count)
  i658.cycleCount = i659[1]
  i658.minCount = i659[2]
  i658.maxCount = i659[3]
  i658.repeatInterval = i659[4]
  i658.time = i659[5]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemRotationBySpeed()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.x)
  i660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.y)
  i660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.z)
  i660.separateAxes = !!i661[4]
  i660.range = new pc.Vec2( i661[5], i661[6] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemRotationOverLifetime()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.x)
  i662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.y)
  i662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.z)
  i662.separateAxes = !!i663[4]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemShape()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.shapeType = i665[1]
  i664.randomDirectionAmount = i665[2]
  i664.sphericalDirectionAmount = i665[3]
  i664.randomPositionAmount = i665[4]
  i664.alignToDirection = !!i665[5]
  i664.radius = i665[6]
  i664.radiusMode = i665[7]
  i664.radiusSpread = i665[8]
  i664.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[9], i664.radiusSpeed)
  i664.radiusThickness = i665[10]
  i664.angle = i665[11]
  i664.length = i665[12]
  i664.boxThickness = new pc.Vec3( i665[13], i665[14], i665[15] )
  i664.meshShapeType = i665[16]
  request.r(i665[17], i665[18], 0, i664, 'mesh')
  request.r(i665[19], i665[20], 0, i664, 'meshRenderer')
  request.r(i665[21], i665[22], 0, i664, 'skinnedMeshRenderer')
  i664.useMeshMaterialIndex = !!i665[23]
  i664.meshMaterialIndex = i665[24]
  i664.useMeshColors = !!i665[25]
  i664.normalOffset = i665[26]
  i664.arc = i665[27]
  i664.arcMode = i665[28]
  i664.arcSpread = i665[29]
  i664.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[30], i664.arcSpeed)
  i664.donutRadius = i665[31]
  i664.position = new pc.Vec3( i665[32], i665[33], i665[34] )
  i664.rotation = new pc.Vec3( i665[35], i665[36], i665[37] )
  i664.scale = new pc.Vec3( i665[38], i665[39], i665[40] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemSizeBySpeed()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.separateAxes = !!i667[4]
  i666.range = new pc.Vec2( i667[5], i667[6] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemSizeOverLifetime()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.mode = i671[1]
  i670.animation = i671[2]
  i670.numTilesX = i671[3]
  i670.numTilesY = i671[4]
  i670.useRandomRow = !!i671[5]
  i670.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[6], i670.frameOverTime)
  i670.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[7], i670.startFrame)
  i670.cycleCount = i671[8]
  i670.rowIndex = i671[9]
  i670.flipU = i671[10]
  i670.flipV = i671[11]
  i670.spriteCount = i671[12]
  var i673 = i671[13]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.sprites = i672
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[4], i676.radial)
  i676.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[5], i676.speedModifier)
  i676.space = i677[6]
  i676.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[7], i676.orbitalX)
  i676.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[8], i676.orbitalY)
  i676.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[9], i676.orbitalZ)
  i676.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[10], i676.orbitalOffsetX)
  i676.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[11], i676.orbitalOffsetY)
  i676.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[12], i676.orbitalOffsetZ)
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemNoise()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.separateAxes = !!i679[1]
  i678.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.strengthX)
  i678.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.strengthY)
  i678.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[4], i678.strengthZ)
  i678.frequency = i679[5]
  i678.damping = !!i679[6]
  i678.octaveCount = i679[7]
  i678.octaveMultiplier = i679[8]
  i678.octaveScale = i679[9]
  i678.quality = i679[10]
  i678.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[11], i678.scrollSpeed)
  i678.scrollSpeedMultiplier = i679[12]
  i678.remapEnabled = !!i679[13]
  i678.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[14], i678.remapX)
  i678.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[15], i678.remapY)
  i678.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[16], i678.remapZ)
  i678.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[17], i678.positionAmount)
  i678.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[18], i678.rotationAmount)
  i678.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[19], i678.sizeAmount)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemInheritVelocity()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.mode = i681[1]
  i680.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.curve)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemForceOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.x)
  i682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.y)
  i682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.z)
  i682.space = i683[4]
  i682.randomized = !!i683[5]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.limit)
  i684.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.limitX)
  i684.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.limitY)
  i684.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[4], i684.limitZ)
  i684.dampen = i685[5]
  i684.separateAxes = !!i685[6]
  i684.space = i685[7]
  i684.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[8], i684.drag)
  i684.multiplyDragByParticleSize = !!i685[9]
  i684.multiplyDragByParticleVelocity = !!i685[10]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'mesh')
  i686.meshCount = i687[2]
  i686.activeVertexStreamsCount = i687[3]
  i686.alignment = i687[4]
  i686.renderMode = i687[5]
  i686.sortMode = i687[6]
  i686.lengthScale = i687[7]
  i686.velocityScale = i687[8]
  i686.cameraVelocityScale = i687[9]
  i686.normalDirection = i687[10]
  i686.sortingFudge = i687[11]
  i686.minParticleSize = i687[12]
  i686.maxParticleSize = i687[13]
  i686.pivot = new pc.Vec3( i687[14], i687[15], i687[16] )
  request.r(i687[17], i687[18], 0, i686, 'trailMaterial')
  i686.applyActiveColorSpace = !!i687[19]
  i686.enabled = !!i687[20]
  request.r(i687[21], i687[22], 0, i686, 'sharedMaterial')
  var i689 = i687[23]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i686.sharedMaterials = i688
  i686.receiveShadows = !!i687[24]
  i686.shadowCastingMode = i687[25]
  i686.sortingLayerID = i687[26]
  i686.sortingOrder = i687[27]
  i686.lightmapIndex = i687[28]
  i686.lightmapSceneIndex = i687[29]
  i686.lightmapScaleOffset = new pc.Vec4( i687[30], i687[31], i687[32], i687[33] )
  i686.lightProbeUsage = i687[34]
  i686.reflectionProbeUsage = i687[35]
  return i686
}

Deserializers["Project.Scripts.HexCore.HexStack"] = function (request, data, root) {
  var i690 = root || request.c( 'Project.Scripts.HexCore.HexStack' )
  var i691 = data
  var i693 = i691[0]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i690._possibleColors = i692
  i690._minHexagons = i691[1]
  i690._maxHexagons = i691[2]
  i690._isRandom = !!i691[3]
  i690._noRandomCount = i691[4]
  i690._isTwoColors = !!i691[5]
  request.r(i691[6], i691[7], 0, i690, '_dragHandler')
  return i690
}

Deserializers["Project.Scripts.HexCore.Hex"] = function (request, data, root) {
  var i696 = root || request.c( 'Project.Scripts.HexCore.Hex' )
  var i697 = data
  i696.<HexColor>k__BackingField = i697[0]
  request.r(i697[1], i697[2], 0, i696, '<AudioSource>k__BackingField')
  request.r(i697[3], i697[4], 0, i696, '<MoveClip>k__BackingField')
  request.r(i697[5], i697[6], 0, i696, '<DestroyClip>k__BackingField')
  return i696
}

Deserializers["Project.Scripts.InputSystem.DragHandler"] = function (request, data, root) {
  var i698 = root || request.c( 'Project.Scripts.InputSystem.DragHandler' )
  var i699 = data
  i698._liftHeight = i699[0]
  i698._returnDuration = i699[1]
  request.r(i699[2], i699[3], 0, i698, '_audioSource')
  request.r(i699[4], i699[5], 0, i698, '_pickupClip')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i701 = data
  i700.name = i701[0]
  i700.atlasId = i701[1]
  i700.mipmapCount = i701[2]
  i700.hdr = !!i701[3]
  i700.size = i701[4]
  i700.anisoLevel = i701[5]
  i700.filterMode = i701[6]
  var i703 = i701[7]
  var i702 = []
  for(var i = 0; i < i703.length; i += 4) {
    i702.push( UnityEngine.Rect.MinMaxRect(i703[i + 0], i703[i + 1], i703[i + 2], i703[i + 3]) );
  }
  i700.rects = i702
  i700.wrapU = i701[8]
  i700.wrapV = i701[9]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i707 = data
  i706.name = i707[0]
  i706.index = i707[1]
  i706.startup = !!i707[2]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i709 = data
  i708.aspect = i709[0]
  i708.orthographic = !!i709[1]
  i708.orthographicSize = i709[2]
  i708.backgroundColor = new pc.Color(i709[3], i709[4], i709[5], i709[6])
  i708.nearClipPlane = i709[7]
  i708.farClipPlane = i709[8]
  i708.fieldOfView = i709[9]
  i708.depth = i709[10]
  i708.clearFlags = i709[11]
  i708.cullingMask = i709[12]
  i708.rect = i709[13]
  request.r(i709[14], i709[15], 0, i708, 'targetTexture')
  i708.usePhysicalProperties = !!i709[16]
  i708.focalLength = i709[17]
  i708.sensorSize = new pc.Vec2( i709[18], i709[19] )
  i708.lensShift = new pc.Vec2( i709[20], i709[21] )
  i708.gateFit = i709[22]
  i708.commandBufferCount = i709[23]
  i708.cameraType = i709[24]
  i708.enabled = !!i709[25]
  return i708
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i711 = data
  i710.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i711[0] )
  i710.m_MaxRayIntersections = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i713 = data
  i712.type = i713[0]
  i712.color = new pc.Color(i713[1], i713[2], i713[3], i713[4])
  i712.cullingMask = i713[5]
  i712.intensity = i713[6]
  i712.range = i713[7]
  i712.spotAngle = i713[8]
  i712.shadows = i713[9]
  i712.shadowNormalBias = i713[10]
  i712.shadowBias = i713[11]
  i712.shadowStrength = i713[12]
  i712.shadowResolution = i713[13]
  i712.lightmapBakeType = i713[14]
  i712.renderMode = i713[15]
  request.r(i713[16], i713[17], 0, i712, 'cookie')
  i712.cookieSize = i713[18]
  i712.shadowNearPlane = i713[19]
  i712.occlusionMaskChannel = i713[20]
  i712.isBaked = !!i713[21]
  i712.mixedLightingMode = i713[22]
  i712.enabled = !!i713[23]
  return i712
}

Deserializers["Project.Scripts.HexCore.HexGrid"] = function (request, data, root) {
  var i714 = root || request.c( 'Project.Scripts.HexCore.HexGrid' )
  var i715 = data
  i714._gridRadius = i715[0]
  i714._cellSpacing = i715[1]
  request.r(i715[2], i715[3], 0, i714, '_hexCellPrefab')
  return i714
}

Deserializers["Project.Scripts.Game.EntryPoint"] = function (request, data, root) {
  var i716 = root || request.c( 'Project.Scripts.Game.EntryPoint' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, '_hexGrid')
  var i719 = i717[2]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i716._initialStacks = i718
  request.r(i717[3], i717[4], 0, i716, '_dragHexStackPrefab')
  var i721 = i717[5]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i716._dragHexStackSpawnPoints = i720
  request.r(i717[6], i717[7], 0, i716, '_endGame')
  request.r(i717[8], i717[9], 0, i716, '_chainReactionOfHex')
  request.r(i717[10], i717[11], 0, i716, '_tutorialPointer')
  i716._dragSpawnDuration = i717[12]
  i716._gameDuration = i717[13]
  request.r(i717[14], i717[15], 0, i716, '_timerView')
  return i716
}

Deserializers["Project.Scripts.Game.EndGame"] = function (request, data, root) {
  var i726 = root || request.c( 'Project.Scripts.Game.EndGame' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, '_endGameCanvasGroup')
  request.r(i727[2], i727[3], 0, i726, '_playNowButton')
  request.r(i727[4], i727[5], 0, i726, '_tutorialPointer')
  return i726
}

Deserializers["Project.Scripts.HexCore.ChainReactionOfHex"] = function (request, data, root) {
  var i728 = root || request.c( 'Project.Scripts.HexCore.ChainReactionOfHex' )
  var i729 = data
  i728._moveCurve = new pc.AnimationCurve( { keys_flow: i729[0] } )
  request.r(i729[1], i729[2], 0, i728, '_hexGrid')
  i728._baseMoveDuration = i729[3]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i731 = data
  i730.pivot = new pc.Vec2( i731[0], i731[1] )
  i730.anchorMin = new pc.Vec2( i731[2], i731[3] )
  i730.anchorMax = new pc.Vec2( i731[4], i731[5] )
  i730.sizeDelta = new pc.Vec2( i731[6], i731[7] )
  i730.anchoredPosition3D = new pc.Vec3( i731[8], i731[9], i731[10] )
  i730.rotation = new pc.Quat(i731[11], i731[12], i731[13], i731[14])
  i730.scale = new pc.Vec3( i731[15], i731[16], i731[17] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i733 = data
  i732.planeDistance = i733[0]
  i732.referencePixelsPerUnit = i733[1]
  i732.isFallbackOverlay = !!i733[2]
  i732.renderMode = i733[3]
  i732.renderOrder = i733[4]
  i732.sortingLayerName = i733[5]
  i732.sortingOrder = i733[6]
  i732.scaleFactor = i733[7]
  request.r(i733[8], i733[9], 0, i732, 'worldCamera')
  i732.overrideSorting = !!i733[10]
  i732.pixelPerfect = !!i733[11]
  i732.targetDisplay = i733[12]
  i732.overridePixelPerfect = !!i733[13]
  i732.enabled = !!i733[14]
  return i732
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i735 = data
  i734.m_UiScaleMode = i735[0]
  i734.m_ReferencePixelsPerUnit = i735[1]
  i734.m_ScaleFactor = i735[2]
  i734.m_ReferenceResolution = new pc.Vec2( i735[3], i735[4] )
  i734.m_ScreenMatchMode = i735[5]
  i734.m_MatchWidthOrHeight = i735[6]
  i734.m_PhysicalUnit = i735[7]
  i734.m_FallbackScreenDPI = i735[8]
  i734.m_DefaultSpriteDPI = i735[9]
  i734.m_DynamicPixelsPerUnit = i735[10]
  i734.m_PresetInfoIsWorld = !!i735[11]
  return i734
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i737 = data
  i736.m_IgnoreReversedGraphics = !!i737[0]
  i736.m_BlockingObjects = i737[1]
  i736.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i737[2] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i739 = data
  i738.m_Alpha = i739[0]
  i738.m_Interactable = !!i739[1]
  i738.m_BlocksRaycasts = !!i739[2]
  i738.m_IgnoreParentGroups = !!i739[3]
  i738.enabled = !!i739[4]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i741 = data
  i740.cullTransparentMesh = !!i741[0]
  return i740
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.Image' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_Sprite')
  i742.m_Type = i743[2]
  i742.m_PreserveAspect = !!i743[3]
  i742.m_FillCenter = !!i743[4]
  i742.m_FillMethod = i743[5]
  i742.m_FillAmount = i743[6]
  i742.m_FillClockwise = !!i743[7]
  i742.m_FillOrigin = i743[8]
  i742.m_UseSpriteMesh = !!i743[9]
  i742.m_PixelsPerUnitMultiplier = i743[10]
  request.r(i743[11], i743[12], 0, i742, 'm_Material')
  i742.m_Maskable = !!i743[13]
  i742.m_Color = new pc.Color(i743[14], i743[15], i743[16], i743[17])
  i742.m_RaycastTarget = !!i743[18]
  i742.m_RaycastPadding = new pc.Vec4( i743[19], i743[20], i743[21], i743[22] )
  return i742
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.Button' )
  var i745 = data
  i744.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i745[0], i744.m_OnClick)
  i744.m_Navigation = request.d('UnityEngine.UI.Navigation', i745[1], i744.m_Navigation)
  i744.m_Transition = i745[2]
  i744.m_Colors = request.d('UnityEngine.UI.ColorBlock', i745[3], i744.m_Colors)
  i744.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i745[4], i744.m_SpriteState)
  i744.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i745[5], i744.m_AnimationTriggers)
  i744.m_Interactable = !!i745[6]
  request.r(i745[7], i745[8], 0, i744, 'm_TargetGraphic')
  return i744
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i747 = data
  i746.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i747[0], i746.m_PersistentCalls)
  return i746
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i749 = data
  var i751 = i749[0]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('UnityEngine.Events.PersistentCall', i751[i + 0]));
  }
  i748.m_Calls = i750
  return i748
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_Target')
  i754.m_TargetAssemblyTypeName = i755[2]
  i754.m_MethodName = i755[3]
  i754.m_Mode = i755[4]
  i754.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i755[5], i754.m_Arguments)
  i754.m_CallState = i755[6]
  return i754
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i757 = data
  i756.m_Mode = i757[0]
  i756.m_WrapAround = !!i757[1]
  request.r(i757[2], i757[3], 0, i756, 'm_SelectOnUp')
  request.r(i757[4], i757[5], 0, i756, 'm_SelectOnDown')
  request.r(i757[6], i757[7], 0, i756, 'm_SelectOnLeft')
  request.r(i757[8], i757[9], 0, i756, 'm_SelectOnRight')
  return i756
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i759 = data
  i758.m_NormalColor = new pc.Color(i759[0], i759[1], i759[2], i759[3])
  i758.m_HighlightedColor = new pc.Color(i759[4], i759[5], i759[6], i759[7])
  i758.m_PressedColor = new pc.Color(i759[8], i759[9], i759[10], i759[11])
  i758.m_SelectedColor = new pc.Color(i759[12], i759[13], i759[14], i759[15])
  i758.m_DisabledColor = new pc.Color(i759[16], i759[17], i759[18], i759[19])
  i758.m_ColorMultiplier = i759[20]
  i758.m_FadeDuration = i759[21]
  return i758
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_HighlightedSprite')
  request.r(i761[2], i761[3], 0, i760, 'm_PressedSprite')
  request.r(i761[4], i761[5], 0, i760, 'm_SelectedSprite')
  request.r(i761[6], i761[7], 0, i760, 'm_DisabledSprite')
  return i760
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i763 = data
  i762.m_NormalTrigger = i763[0]
  i762.m_HighlightedTrigger = i763[1]
  i762.m_PressedTrigger = i763[2]
  i762.m_SelectedTrigger = i763[3]
  i762.m_DisabledTrigger = i763[4]
  return i762
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Text' )
  var i765 = data
  i764.m_FontData = request.d('UnityEngine.UI.FontData', i765[0], i764.m_FontData)
  i764.m_Text = i765[1]
  request.r(i765[2], i765[3], 0, i764, 'm_Material')
  i764.m_Maskable = !!i765[4]
  i764.m_Color = new pc.Color(i765[5], i765[6], i765[7], i765[8])
  i764.m_RaycastTarget = !!i765[9]
  i764.m_RaycastPadding = new pc.Vec4( i765[10], i765[11], i765[12], i765[13] )
  return i764
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.FontData' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_Font')
  i766.m_FontSize = i767[2]
  i766.m_FontStyle = i767[3]
  i766.m_BestFit = !!i767[4]
  i766.m_MinSize = i767[5]
  i766.m_MaxSize = i767[6]
  i766.m_Alignment = i767[7]
  i766.m_AlignByGeometry = !!i767[8]
  i766.m_RichText = !!i767[9]
  i766.m_HorizontalOverflow = i767[10]
  i766.m_VerticalOverflow = i767[11]
  i766.m_LineSpacing = i767[12]
  return i766
}

Deserializers["Project.Scripts.UI.TutorialPointer"] = function (request, data, root) {
  var i768 = root || request.c( 'Project.Scripts.UI.TutorialPointer' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, '_handObject')
  request.r(i769[2], i769[3], 0, i768, '_handRect')
  request.r(i769[4], i769[5], 0, i768, '_parentCanvas')
  request.r(i769[6], i769[7], 0, i768, '_entryPoint')
  i768._idleTimeToShow = i769[8]
  i768._distance = i769[9]
  i768._duration = i769[10]
  return i768
}

Deserializers["Project.Scripts.UI.TimerView"] = function (request, data, root) {
  var i770 = root || request.c( 'Project.Scripts.UI.TimerView' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, '_fillImage')
  return i770
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'm_FirstSelected')
  i772.m_sendNavigationEvents = !!i773[2]
  i772.m_DragThreshold = i773[3]
  return i772
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i775 = data
  i774.m_HorizontalAxis = i775[0]
  i774.m_VerticalAxis = i775[1]
  i774.m_SubmitButton = i775[2]
  i774.m_CancelButton = i775[3]
  i774.m_InputActionsPerSecond = i775[4]
  i774.m_RepeatDelay = i775[5]
  i774.m_ForceModuleActive = !!i775[6]
  i774.m_SendPointerHoverToParent = !!i775[7]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i777 = data
  i776.ambientIntensity = i777[0]
  i776.reflectionIntensity = i777[1]
  i776.ambientMode = i777[2]
  i776.ambientLight = new pc.Color(i777[3], i777[4], i777[5], i777[6])
  i776.ambientSkyColor = new pc.Color(i777[7], i777[8], i777[9], i777[10])
  i776.ambientGroundColor = new pc.Color(i777[11], i777[12], i777[13], i777[14])
  i776.ambientEquatorColor = new pc.Color(i777[15], i777[16], i777[17], i777[18])
  i776.fogColor = new pc.Color(i777[19], i777[20], i777[21], i777[22])
  i776.fogEndDistance = i777[23]
  i776.fogStartDistance = i777[24]
  i776.fogDensity = i777[25]
  i776.fog = !!i777[26]
  request.r(i777[27], i777[28], 0, i776, 'skybox')
  i776.fogMode = i777[29]
  var i779 = i777[30]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i779[i + 0]) );
  }
  i776.lightmaps = i778
  i776.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i777[31], i776.lightProbes)
  i776.lightmapsMode = i777[32]
  i776.mixedBakeMode = i777[33]
  i776.environmentLightingMode = i777[34]
  i776.ambientProbe = new pc.SphericalHarmonicsL2(i777[35])
  request.r(i777[36], i777[37], 0, i776, 'customReflection')
  request.r(i777[38], i777[39], 0, i776, 'defaultReflection')
  i776.defaultReflectionMode = i777[40]
  i776.defaultReflectionResolution = i777[41]
  i776.sunLightObjectId = i777[42]
  i776.pixelLightCount = i777[43]
  i776.defaultReflectionHDR = !!i777[44]
  i776.hasLightDataAsset = !!i777[45]
  i776.hasManualGenerate = !!i777[46]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'lightmapColor')
  request.r(i783[2], i783[3], 0, i782, 'lightmapDirection')
  request.r(i783[4], i783[5], 0, i782, 'shadowMask')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i784 = root || new UnityEngine.LightProbes()
  var i785 = data
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i795[i + 0]));
  }
  i792.ShaderCompilationErrors = i794
  i792.name = i793[1]
  i792.guid = i793[2]
  var i797 = i793[3]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i792.shaderDefinedKeywords = i796
  var i799 = i793[4]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i799[i + 0]) );
  }
  i792.passes = i798
  var i801 = i793[5]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i801[i + 0]) );
  }
  i792.usePasses = i800
  var i803 = i793[6]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i803[i + 0]) );
  }
  i792.defaultParameterValues = i802
  request.r(i793[7], i793[8], 0, i792, 'unityFallbackShader')
  i792.readDepth = !!i793[9]
  i792.hasDepthOnlyPass = !!i793[10]
  i792.isCreatedByShaderGraph = !!i793[11]
  i792.disableBatching = !!i793[12]
  i792.compiled = !!i793[13]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i807 = data
  i806.shaderName = i807[0]
  i806.errorMessage = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i812 = root || new pc.UnityShaderPass()
  var i813 = data
  i812.id = i813[0]
  i812.subShaderIndex = i813[1]
  i812.name = i813[2]
  i812.passType = i813[3]
  i812.grabPassTextureName = i813[4]
  i812.usePass = !!i813[5]
  i812.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[6], i812.zTest)
  i812.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[7], i812.zWrite)
  i812.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[8], i812.culling)
  i812.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i813[9], i812.blending)
  i812.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i813[10], i812.alphaBlending)
  i812.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[11], i812.colorWriteMask)
  i812.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[12], i812.offsetUnits)
  i812.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[13], i812.offsetFactor)
  i812.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[14], i812.stencilRef)
  i812.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[15], i812.stencilReadMask)
  i812.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[16], i812.stencilWriteMask)
  i812.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i813[17], i812.stencilOp)
  i812.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i813[18], i812.stencilOpFront)
  i812.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i813[19], i812.stencilOpBack)
  var i815 = i813[20]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i815[i + 0]) );
  }
  i812.tags = i814
  var i817 = i813[21]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i812.passDefinedKeywords = i816
  var i819 = i813[22]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i819[i + 0]) );
  }
  i812.passDefinedKeywordGroups = i818
  var i821 = i813[23]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i821[i + 0]) );
  }
  i812.variants = i820
  var i823 = i813[24]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i823[i + 0]) );
  }
  i812.excludedVariants = i822
  i812.hasDepthReader = !!i813[25]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i825 = data
  i824.val = i825[0]
  i824.name = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i827 = data
  i826.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[0], i826.src)
  i826.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[1], i826.dst)
  i826.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[2], i826.op)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i829 = data
  i828.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[0], i828.pass)
  i828.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[1], i828.fail)
  i828.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[2], i828.zFail)
  i828.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[3], i828.comp)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i833 = data
  i832.name = i833[0]
  i832.value = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i837 = data
  var i839 = i837[0]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i836.keywords = i838
  i836.hasDiscard = !!i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i843 = data
  i842.passId = i843[0]
  i842.subShaderIndex = i843[1]
  var i845 = i843[2]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i842.keywords = i844
  i842.vertexProgram = i843[3]
  i842.fragmentProgram = i843[4]
  i842.exportedForWebGl2 = !!i843[5]
  i842.readDepth = !!i843[6]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'shader')
  i848.pass = i849[2]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i853 = data
  i852.name = i853[0]
  i852.type = i853[1]
  i852.value = new pc.Vec4( i853[2], i853[3], i853[4], i853[5] )
  i852.textureValue = i853[6]
  i852.shaderPropertyFlag = i853[7]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i855 = data
  i854.name = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'texture')
  i854.aabb = i855[3]
  i854.vertices = i855[4]
  i854.triangles = i855[5]
  i854.textureRect = UnityEngine.Rect.MinMaxRect(i855[6], i855[7], i855[8], i855[9])
  i854.packedRect = UnityEngine.Rect.MinMaxRect(i855[10], i855[11], i855[12], i855[13])
  i854.border = new pc.Vec4( i855[14], i855[15], i855[16], i855[17] )
  i854.transparency = i855[18]
  i854.bounds = i855[19]
  i854.pixelsPerUnit = i855[20]
  i854.textureWidth = i855[21]
  i854.textureHeight = i855[22]
  i854.nativeSize = new pc.Vec2( i855[23], i855[24] )
  i854.pivot = new pc.Vec2( i855[25], i855[26] )
  i854.textureRectOffset = new pc.Vec2( i855[27], i855[28] )
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i857 = data
  i856.name = i857[0]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i859 = data
  i858.name = i859[0]
  i858.ascent = i859[1]
  i858.originalLineHeight = i859[2]
  i858.fontSize = i859[3]
  var i861 = i859[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i861[i + 0]) );
  }
  i858.characterInfo = i860
  request.r(i859[5], i859[6], 0, i858, 'texture')
  i858.originalFontSize = i859[7]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i865 = data
  i864.index = i865[0]
  i864.advance = i865[1]
  i864.bearing = i865[2]
  i864.glyphWidth = i865[3]
  i864.glyphHeight = i865[4]
  i864.minX = i865[5]
  i864.maxX = i865[6]
  i864.minY = i865[7]
  i864.maxY = i865[8]
  i864.uvBottomLeftX = i865[9]
  i864.uvBottomLeftY = i865[10]
  i864.uvBottomRightX = i865[11]
  i864.uvBottomRightY = i865[12]
  i864.uvTopLeftX = i865[13]
  i864.uvTopLeftY = i865[14]
  i864.uvTopRightX = i865[15]
  i864.uvTopRightY = i865[16]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i867 = data
  i866.name = i867[0]
  i866.bytes64 = i867[1]
  i866.data = i867[2]
  return i866
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i869 = data
  i868.useSafeMode = !!i869[0]
  i868.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i869[1], i868.safeModeOptions)
  i868.timeScale = i869[2]
  i868.unscaledTimeScale = i869[3]
  i868.useSmoothDeltaTime = !!i869[4]
  i868.maxSmoothUnscaledTime = i869[5]
  i868.rewindCallbackMode = i869[6]
  i868.showUnityEditorReport = !!i869[7]
  i868.logBehaviour = i869[8]
  i868.drawGizmos = !!i869[9]
  i868.defaultRecyclable = !!i869[10]
  i868.defaultAutoPlay = i869[11]
  i868.defaultUpdateType = i869[12]
  i868.defaultTimeScaleIndependent = !!i869[13]
  i868.defaultEaseType = i869[14]
  i868.defaultEaseOvershootOrAmplitude = i869[15]
  i868.defaultEasePeriod = i869[16]
  i868.defaultAutoKill = !!i869[17]
  i868.defaultLoopType = i869[18]
  i868.debugMode = !!i869[19]
  i868.debugStoreTargetId = !!i869[20]
  i868.showPreviewPanel = !!i869[21]
  i868.storeSettingsLocation = i869[22]
  i868.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i869[23], i868.modules)
  i868.createASMDEF = !!i869[24]
  i868.showPlayingTweens = !!i869[25]
  i868.showPausedTweens = !!i869[26]
  return i868
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i870 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i871 = data
  i870.logBehaviour = i871[0]
  i870.nestedTweenFailureBehaviour = i871[1]
  return i870
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i872 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i873 = data
  i872.showPanel = !!i873[0]
  i872.audioEnabled = !!i873[1]
  i872.physicsEnabled = !!i873[2]
  i872.physics2DEnabled = !!i873[3]
  i872.spriteEnabled = !!i873[4]
  i872.uiEnabled = !!i873[5]
  i872.textMeshProEnabled = !!i873[6]
  i872.tk2DEnabled = !!i873[7]
  i872.deAudioEnabled = !!i873[8]
  i872.deUnityExtendedEnabled = !!i873[9]
  i872.epoOutlineEnabled = !!i873[10]
  return i872
}

Deserializers["Project.Scripts.Game.Constants.CustomPalette"] = function (request, data, root) {
  var i874 = root || request.c( 'Project.Scripts.Game.Constants.CustomPalette' )
  var i875 = data
  var i877 = i875[0]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Project.Scripts.Game.Constants.ColorEntry', i877[i + 0]) );
  }
  i874.colors = i876
  return i874
}

Deserializers["Project.Scripts.Game.Constants.ColorEntry"] = function (request, data, root) {
  var i880 = root || request.c( 'Project.Scripts.Game.Constants.ColorEntry' )
  var i881 = data
  i880.Name = i881[0]
  i880.Color = new pc.Color(i881[1], i881[2], i881[3], i881[4])
  return i880
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_Settings' )
  var i883 = data
  i882.m_enableWordWrapping = !!i883[0]
  i882.m_enableKerning = !!i883[1]
  i882.m_enableExtraPadding = !!i883[2]
  i882.m_enableTintAllSprites = !!i883[3]
  i882.m_enableParseEscapeCharacters = !!i883[4]
  i882.m_EnableRaycastTarget = !!i883[5]
  i882.m_GetFontFeaturesAtRuntime = !!i883[6]
  i882.m_missingGlyphCharacter = i883[7]
  i882.m_warningsDisabled = !!i883[8]
  request.r(i883[9], i883[10], 0, i882, 'm_defaultFontAsset')
  i882.m_defaultFontAssetPath = i883[11]
  i882.m_defaultFontSize = i883[12]
  i882.m_defaultAutoSizeMinRatio = i883[13]
  i882.m_defaultAutoSizeMaxRatio = i883[14]
  i882.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i883[15], i883[16] )
  i882.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i883[17], i883[18] )
  i882.m_autoSizeTextContainer = !!i883[19]
  i882.m_IsTextObjectScaleStatic = !!i883[20]
  var i885 = i883[21]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 1, i884, '')
  }
  i882.m_fallbackFontAssets = i884
  i882.m_matchMaterialPreset = !!i883[22]
  request.r(i883[23], i883[24], 0, i882, 'm_defaultSpriteAsset')
  i882.m_defaultSpriteAssetPath = i883[25]
  i882.m_enableEmojiSupport = !!i883[26]
  i882.m_MissingCharacterSpriteUnicode = i883[27]
  i882.m_defaultColorGradientPresetsPath = i883[28]
  request.r(i883[29], i883[30], 0, i882, 'm_defaultStyleSheet')
  i882.m_StyleSheetsResourcePath = i883[31]
  request.r(i883[32], i883[33], 0, i882, 'm_leadingCharacters')
  request.r(i883[34], i883[35], 0, i882, 'm_followingCharacters')
  i882.m_UseModernHangulLineBreakingRules = !!i883[36]
  return i882
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'atlas')
  i888.normalStyle = i889[2]
  i888.normalSpacingOffset = i889[3]
  i888.boldStyle = i889[4]
  i888.boldSpacing = i889[5]
  i888.italicStyle = i889[6]
  i888.tabSize = i889[7]
  i888.hashCode = i889[8]
  request.r(i889[9], i889[10], 0, i888, 'material')
  i888.materialHashCode = i889[11]
  i888.m_Version = i889[12]
  i888.m_SourceFontFileGUID = i889[13]
  request.r(i889[14], i889[15], 0, i888, 'm_SourceFontFile_EditorRef')
  request.r(i889[16], i889[17], 0, i888, 'm_SourceFontFile')
  i888.m_AtlasPopulationMode = i889[18]
  i888.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i889[19], i888.m_FaceInfo)
  var i891 = i889[20]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('UnityEngine.TextCore.Glyph', i891[i + 0]));
  }
  i888.m_GlyphTable = i890
  var i893 = i889[21]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('TMPro.TMP_Character', i893[i + 0]));
  }
  i888.m_CharacterTable = i892
  var i895 = i889[22]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i888.m_AtlasTextures = i894
  i888.m_AtlasTextureIndex = i889[23]
  i888.m_IsMultiAtlasTexturesEnabled = !!i889[24]
  i888.m_ClearDynamicDataOnBuild = !!i889[25]
  var i897 = i889[26]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('UnityEngine.TextCore.GlyphRect', i897[i + 0]));
  }
  i888.m_UsedGlyphRects = i896
  var i899 = i889[27]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('UnityEngine.TextCore.GlyphRect', i899[i + 0]));
  }
  i888.m_FreeGlyphRects = i898
  i888.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i889[28], i888.m_fontInfo)
  i888.m_AtlasWidth = i889[29]
  i888.m_AtlasHeight = i889[30]
  i888.m_AtlasPadding = i889[31]
  i888.m_AtlasRenderMode = i889[32]
  var i901 = i889[33]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('TMPro.TMP_Glyph', i901[i + 0]));
  }
  i888.m_glyphInfoList = i900
  i888.m_KerningTable = request.d('TMPro.KerningTable', i889[34], i888.m_KerningTable)
  i888.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i889[35], i888.m_FontFeatureTable)
  var i903 = i889[36]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 1, i902, '')
  }
  i888.fallbackFontAssets = i902
  var i905 = i889[37]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i888.m_FallbackFontAssetTable = i904
  i888.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i889[38], i888.m_CreationSettings)
  var i907 = i889[39]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('TMPro.TMP_FontWeightPair', i907[i + 0]) );
  }
  i888.m_FontWeightTable = i906
  var i909 = i889[40]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('TMPro.TMP_FontWeightPair', i909[i + 0]) );
  }
  i888.fontWeights = i908
  return i888
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i911 = data
  i910.m_FaceIndex = i911[0]
  i910.m_FamilyName = i911[1]
  i910.m_StyleName = i911[2]
  i910.m_PointSize = i911[3]
  i910.m_Scale = i911[4]
  i910.m_UnitsPerEM = i911[5]
  i910.m_LineHeight = i911[6]
  i910.m_AscentLine = i911[7]
  i910.m_CapLine = i911[8]
  i910.m_MeanLine = i911[9]
  i910.m_Baseline = i911[10]
  i910.m_DescentLine = i911[11]
  i910.m_SuperscriptOffset = i911[12]
  i910.m_SuperscriptSize = i911[13]
  i910.m_SubscriptOffset = i911[14]
  i910.m_SubscriptSize = i911[15]
  i910.m_UnderlineOffset = i911[16]
  i910.m_UnderlineThickness = i911[17]
  i910.m_StrikethroughOffset = i911[18]
  i910.m_StrikethroughThickness = i911[19]
  i910.m_TabWidth = i911[20]
  return i910
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i915 = data
  i914.m_Index = i915[0]
  i914.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i915[1], i914.m_Metrics)
  i914.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i915[2], i914.m_GlyphRect)
  i914.m_Scale = i915[3]
  i914.m_AtlasIndex = i915[4]
  i914.m_ClassDefinitionType = i915[5]
  return i914
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i917 = data
  i916.m_Width = i917[0]
  i916.m_Height = i917[1]
  i916.m_HorizontalBearingX = i917[2]
  i916.m_HorizontalBearingY = i917[3]
  i916.m_HorizontalAdvance = i917[4]
  return i916
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i919 = data
  i918.m_X = i919[0]
  i918.m_Y = i919[1]
  i918.m_Width = i919[2]
  i918.m_Height = i919[3]
  return i918
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_Character' )
  var i923 = data
  i922.m_ElementType = i923[0]
  i922.m_Unicode = i923[1]
  i922.m_GlyphIndex = i923[2]
  i922.m_Scale = i923[3]
  return i922
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i929 = data
  i928.Name = i929[0]
  i928.PointSize = i929[1]
  i928.Scale = i929[2]
  i928.CharacterCount = i929[3]
  i928.LineHeight = i929[4]
  i928.Baseline = i929[5]
  i928.Ascender = i929[6]
  i928.CapHeight = i929[7]
  i928.Descender = i929[8]
  i928.CenterLine = i929[9]
  i928.SuperscriptOffset = i929[10]
  i928.SubscriptOffset = i929[11]
  i928.SubSize = i929[12]
  i928.Underline = i929[13]
  i928.UnderlineThickness = i929[14]
  i928.strikethrough = i929[15]
  i928.strikethroughThickness = i929[16]
  i928.TabWidth = i929[17]
  i928.Padding = i929[18]
  i928.AtlasWidth = i929[19]
  i928.AtlasHeight = i929[20]
  return i928
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_Glyph' )
  var i933 = data
  i932.id = i933[0]
  i932.x = i933[1]
  i932.y = i933[2]
  i932.width = i933[3]
  i932.height = i933[4]
  i932.xOffset = i933[5]
  i932.yOffset = i933[6]
  i932.xAdvance = i933[7]
  i932.scale = i933[8]
  return i932
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.KerningTable' )
  var i935 = data
  var i937 = i935[0]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('TMPro.KerningPair', i937[i + 0]));
  }
  i934.kerningPairs = i936
  return i934
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.KerningPair' )
  var i941 = data
  i940.xOffset = i941[0]
  i940.m_FirstGlyph = i941[1]
  i940.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i941[2], i940.m_FirstGlyphAdjustments)
  i940.m_SecondGlyph = i941[3]
  i940.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i941[4], i940.m_SecondGlyphAdjustments)
  i940.m_IgnoreSpacingAdjustments = !!i941[5]
  return i940
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i945[i + 0]));
  }
  i942.m_GlyphPairAdjustmentRecords = i944
  return i942
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i949 = data
  i948.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i949[0], i948.m_FirstAdjustmentRecord)
  i948.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i949[1], i948.m_SecondAdjustmentRecord)
  i948.m_FeatureLookupFlags = i949[2]
  return i948
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i951 = data
  i950.m_GlyphIndex = i951[0]
  i950.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i951[1], i950.m_GlyphValueRecord)
  return i950
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i953 = data
  i952.m_XPlacement = i953[0]
  i952.m_YPlacement = i953[1]
  i952.m_XAdvance = i953[2]
  i952.m_YAdvance = i953[3]
  return i952
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i955 = data
  i954.sourceFontFileName = i955[0]
  i954.sourceFontFileGUID = i955[1]
  i954.pointSizeSamplingMode = i955[2]
  i954.pointSize = i955[3]
  i954.padding = i955[4]
  i954.packingMode = i955[5]
  i954.atlasWidth = i955[6]
  i954.atlasHeight = i955[7]
  i954.characterSetSelectionMode = i955[8]
  i954.characterSequence = i955[9]
  i954.referencedFontAssetGUID = i955[10]
  i954.referencedTextAssetGUID = i955[11]
  i954.fontStyle = i955[12]
  i954.fontStyleModifier = i955[13]
  i954.renderMode = i955[14]
  i954.includeFontFeatures = !!i955[15]
  return i954
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'regularTypeface')
  request.r(i959[2], i959[3], 0, i958, 'italicTypeface')
  return i958
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'spriteSheet')
  var i963 = i961[2]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('TMPro.TMP_Sprite', i963[i + 0]));
  }
  i960.spriteInfoList = i962
  var i965 = i961[3]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i960.fallbackSpriteAssets = i964
  i960.hashCode = i961[4]
  request.r(i961[5], i961[6], 0, i960, 'material')
  i960.materialHashCode = i961[7]
  i960.m_Version = i961[8]
  i960.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i961[9], i960.m_FaceInfo)
  var i967 = i961[10]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('TMPro.TMP_SpriteCharacter', i967[i + 0]));
  }
  i960.m_SpriteCharacterTable = i966
  var i969 = i961[11]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('TMPro.TMP_SpriteGlyph', i969[i + 0]));
  }
  i960.m_SpriteGlyphTable = i968
  return i960
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_Sprite' )
  var i973 = data
  i972.name = i973[0]
  i972.hashCode = i973[1]
  i972.unicode = i973[2]
  i972.pivot = new pc.Vec2( i973[3], i973[4] )
  request.r(i973[5], i973[6], 0, i972, 'sprite')
  i972.id = i973[7]
  i972.x = i973[8]
  i972.y = i973[9]
  i972.width = i973[10]
  i972.height = i973[11]
  i972.xOffset = i973[12]
  i972.yOffset = i973[13]
  i972.xAdvance = i973[14]
  i972.scale = i973[15]
  return i972
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i979 = data
  i978.m_Name = i979[0]
  i978.m_HashCode = i979[1]
  i978.m_ElementType = i979[2]
  i978.m_Unicode = i979[3]
  i978.m_GlyphIndex = i979[4]
  i978.m_Scale = i979[5]
  return i978
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'sprite')
  i982.m_Index = i983[2]
  i982.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i983[3], i982.m_Metrics)
  i982.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i983[4], i982.m_GlyphRect)
  i982.m_Scale = i983[5]
  i982.m_AtlasIndex = i983[6]
  i982.m_ClassDefinitionType = i983[7]
  return i982
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i985 = data
  var i987 = i985[0]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('TMPro.TMP_Style', i987[i + 0]));
  }
  i984.m_StyleList = i986
  return i984
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TMP_Style' )
  var i991 = data
  i990.m_Name = i991[0]
  i990.m_HashCode = i991[1]
  i990.m_OpeningDefinition = i991[2]
  i990.m_ClosingDefinition = i991[3]
  i990.m_OpeningTagArray = i991[4]
  i990.m_ClosingTagArray = i991[5]
  i990.m_OpeningTagUnicodeArray = i991[6]
  i990.m_ClosingTagUnicodeArray = i991[7]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i993 = data
  var i995 = i993[0]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i995[i + 0]) );
  }
  i992.files = i994
  i992.componentToPrefabIds = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i999 = data
  i998.path = i999[0]
  request.r(i999[1], i999[2], 0, i998, 'unityObject')
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1001 = data
  var i1003 = i1001[0]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1003[i + 0]) );
  }
  i1000.scriptsExecutionOrder = i1002
  var i1005 = i1001[1]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1005[i + 0]) );
  }
  i1000.sortingLayers = i1004
  var i1007 = i1001[2]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1007[i + 0]) );
  }
  i1000.cullingLayers = i1006
  i1000.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1001[3], i1000.timeSettings)
  i1000.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1001[4], i1000.physicsSettings)
  i1000.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1001[5], i1000.physics2DSettings)
  i1000.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1001[6], i1000.qualitySettings)
  i1000.enableRealtimeShadows = !!i1001[7]
  i1000.enableAutoInstancing = !!i1001[8]
  i1000.enableStaticBatching = !!i1001[9]
  i1000.enableDynamicBatching = !!i1001[10]
  i1000.usePreservativeDynamicBatching = !!i1001[11]
  i1000.lightmapEncodingQuality = i1001[12]
  i1000.desiredColorSpace = i1001[13]
  var i1009 = i1001[14]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1000.allTags = i1008
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.value = i1013[1]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1017 = data
  i1016.id = i1017[0]
  i1016.name = i1017[1]
  i1016.value = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1021 = data
  i1020.id = i1021[0]
  i1020.name = i1021[1]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1023 = data
  i1022.fixedDeltaTime = i1023[0]
  i1022.maximumDeltaTime = i1023[1]
  i1022.timeScale = i1023[2]
  i1022.maximumParticleTimestep = i1023[3]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1025 = data
  i1024.gravity = new pc.Vec3( i1025[0], i1025[1], i1025[2] )
  i1024.defaultSolverIterations = i1025[3]
  i1024.bounceThreshold = i1025[4]
  i1024.autoSyncTransforms = !!i1025[5]
  i1024.autoSimulation = !!i1025[6]
  var i1027 = i1025[7]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1027[i + 0]) );
  }
  i1024.collisionMatrix = i1026
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1031 = data
  i1030.enabled = !!i1031[0]
  i1030.layerId = i1031[1]
  i1030.otherLayerId = i1031[2]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'material')
  i1032.gravity = new pc.Vec2( i1033[2], i1033[3] )
  i1032.positionIterations = i1033[4]
  i1032.velocityIterations = i1033[5]
  i1032.velocityThreshold = i1033[6]
  i1032.maxLinearCorrection = i1033[7]
  i1032.maxAngularCorrection = i1033[8]
  i1032.maxTranslationSpeed = i1033[9]
  i1032.maxRotationSpeed = i1033[10]
  i1032.baumgarteScale = i1033[11]
  i1032.baumgarteTOIScale = i1033[12]
  i1032.timeToSleep = i1033[13]
  i1032.linearSleepTolerance = i1033[14]
  i1032.angularSleepTolerance = i1033[15]
  i1032.defaultContactOffset = i1033[16]
  i1032.autoSimulation = !!i1033[17]
  i1032.queriesHitTriggers = !!i1033[18]
  i1032.queriesStartInColliders = !!i1033[19]
  i1032.callbacksOnDisable = !!i1033[20]
  i1032.reuseCollisionCallbacks = !!i1033[21]
  i1032.autoSyncTransforms = !!i1033[22]
  var i1035 = i1033[23]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1035[i + 0]) );
  }
  i1032.collisionMatrix = i1034
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1039 = data
  i1038.enabled = !!i1039[0]
  i1038.layerId = i1039[1]
  i1038.otherLayerId = i1039[2]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1041 = data
  var i1043 = i1041[0]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1043[i + 0]) );
  }
  i1040.qualityLevels = i1042
  var i1045 = i1041[1]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( i1045[i + 0] );
  }
  i1040.names = i1044
  i1040.shadows = i1041[2]
  i1040.anisotropicFiltering = i1041[3]
  i1040.antiAliasing = i1041[4]
  i1040.lodBias = i1041[5]
  i1040.shadowCascades = i1041[6]
  i1040.shadowDistance = i1041[7]
  i1040.shadowmaskMode = i1041[8]
  i1040.shadowProjection = i1041[9]
  i1040.shadowResolution = i1041[10]
  i1040.softParticles = !!i1041[11]
  i1040.softVegetation = !!i1041[12]
  i1040.activeColorSpace = i1041[13]
  i1040.desiredColorSpace = i1041[14]
  i1040.masterTextureLimit = i1041[15]
  i1040.maxQueuedFrames = i1041[16]
  i1040.particleRaycastBudget = i1041[17]
  i1040.pixelLightCount = i1041[18]
  i1040.realtimeReflectionProbes = !!i1041[19]
  i1040.shadowCascade2Split = i1041[20]
  i1040.shadowCascade4Split = new pc.Vec3( i1041[21], i1041[22], i1041[23] )
  i1040.streamingMipmapsActive = !!i1041[24]
  i1040.vSyncCount = i1041[25]
  i1040.asyncUploadBufferSize = i1041[26]
  i1040.asyncUploadTimeSlice = i1041[27]
  i1040.billboardsFaceCameraPosition = !!i1041[28]
  i1040.shadowNearPlaneOffset = i1041[29]
  i1040.streamingMipmapsMemoryBudget = i1041[30]
  i1040.maximumLODLevel = i1041[31]
  i1040.streamingMipmapsAddAllCameras = !!i1041[32]
  i1040.streamingMipmapsMaxLevelReduction = i1041[33]
  i1040.streamingMipmapsRenderersPerFrame = i1041[34]
  i1040.resolutionScalingFixedDPIFactor = i1041[35]
  i1040.streamingMipmapsMaxFileIORequests = i1041[36]
  i1040.currentQualityLevel = i1041[37]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1051 = data
  i1050.weight = i1051[0]
  i1050.vertices = i1051[1]
  i1050.normals = i1051[2]
  i1050.tangents = i1051[3]
  return i1050
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'm_ObjectArgument')
  i1052.m_ObjectArgumentAssemblyTypeName = i1053[2]
  i1052.m_IntArgument = i1053[3]
  i1052.m_FloatArgument = i1053[4]
  i1052.m_StringArgument = i1053[5]
  i1052.m_BoolArgument = !!i1053[6]
  return i1052
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1055 = data
  i1054.xPlacement = i1055[0]
  i1054.yPlacement = i1055[1]
  i1054.xAdvance = i1055[2]
  i1054.yAdvance = i1055[3]
  return i1054
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[17],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[17],"83":[3],"84":[85],"86":[85],"31":[30],"87":[35],"88":[35],"89":[37],"16":[14],"90":[30],"91":[17],"92":[17],"93":[21],"94":[95],"96":[30],"97":[30],"33":[31],"35":[34,30],"98":[30],"32":[31],"99":[30],"100":[30],"101":[30],"102":[30],"103":[30],"104":[30],"105":[30],"106":[30],"107":[30],"108":[34,30],"109":[30],"110":[30],"111":[30],"112":[30],"37":[34,30],"113":[30],"114":[40],"115":[40],"41":[40],"116":[40],"117":[17],"20":[17],"118":[95],"119":[120],"121":[122],"123":[40],"124":[31],"125":[30],"126":[3,30],"122":[30,34],"127":[30],"128":[34,30],"129":[3],"130":[34,30],"131":[30],"132":[95]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","Project.Scripts.HexCore.HexCell","UnityEngine.ParticleSystem","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider","UnityEngine.ParticleSystemRenderer","Project.Scripts.HexCore.HexStack","Project.Scripts.HexCore.Hex","Project.Scripts.InputSystem.DragHandler","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","Project.Scripts.HexCore.HexGrid","Project.Scripts.Game.EntryPoint","Project.Scripts.Game.EndGame","Project.Scripts.HexCore.ChainReactionOfHex","Project.Scripts.UI.TutorialPointer","Project.Scripts.UI.TimerView","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","Project.Scripts.Game.Constants.CustomPalette","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","DragMe","ScrollDetailTexture","ShowSliderValue","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.ScriptMachine","KeyFieldUnSelect","UnityEngine.UI.Selectable","Gentleland.StemapunkUI.DemoAndExample.CharacterStat","TMPro.TextMeshProUGUI","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

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

Deserializers.runtimeAnalysisExcludedClassesCount = "2015";

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

Deserializers.buildID = "f511c67c-214b-4334-8e28-d73c3508e2e1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

