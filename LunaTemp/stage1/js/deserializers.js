var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointSpring' )
  var i535 = data
  i534.spring = i535[0]
  i534.damper = i535[1]
  i534.targetPosition = i535[2]
  return i534
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointMotor' )
  var i537 = data
  i536.m_TargetVelocity = i537[0]
  i536.m_Force = i537[1]
  i536.m_FreeSpin = i537[2]
  return i536
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointLimits' )
  var i539 = data
  i538.m_Min = i539[0]
  i538.m_Max = i539[1]
  i538.m_Bounciness = i539[2]
  i538.m_BounceMinVelocity = i539[3]
  i538.m_ContactDistance = i539[4]
  i538.minBounce = i539[5]
  i538.maxBounce = i539[6]
  return i538
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointDrive' )
  var i541 = data
  i540.m_PositionSpring = i541[0]
  i540.m_PositionDamper = i541[1]
  i540.m_MaximumForce = i541[2]
  i540.m_UseAcceleration = i541[3]
  return i540
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i543 = data
  i542.m_Spring = i543[0]
  i542.m_Damper = i543[1]
  return i542
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i545 = data
  i544.m_Limit = i545[0]
  i544.m_Bounciness = i545[1]
  i544.m_ContactDistance = i545[2]
  return i544
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i547 = data
  i546.m_ExtremumSlip = i547[0]
  i546.m_ExtremumValue = i547[1]
  i546.m_AsymptoteSlip = i547[2]
  i546.m_AsymptoteValue = i547[3]
  i546.m_Stiffness = i547[4]
  return i546
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i549 = data
  i548.m_LowerAngle = i549[0]
  i548.m_UpperAngle = i549[1]
  return i548
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i551 = data
  i550.m_MotorSpeed = i551[0]
  i550.m_MaximumMotorTorque = i551[1]
  return i550
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i553 = data
  i552.m_DampingRatio = i553[0]
  i552.m_Frequency = i553[1]
  i552.m_Angle = i553[2]
  return i552
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i555 = data
  i554.m_LowerTranslation = i555[0]
  i554.m_UpperTranslation = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i557 = data
  i556.position = new pc.Vec3( i557[0], i557[1], i557[2] )
  i556.scale = new pc.Vec3( i557[3], i557[4], i557[5] )
  i556.rotation = new pc.Quat(i557[6], i557[7], i557[8], i557[9])
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'sharedMesh')
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'additionalVertexStreams')
  i560.enabled = !!i561[2]
  request.r(i561[3], i561[4], 0, i560, 'sharedMaterial')
  var i563 = i561[5]
  var i562 = []
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 2, i562, '')
  }
  i560.sharedMaterials = i562
  i560.receiveShadows = !!i561[6]
  i560.shadowCastingMode = i561[7]
  i560.sortingLayerID = i561[8]
  i560.sortingOrder = i561[9]
  i560.lightmapIndex = i561[10]
  i560.lightmapSceneIndex = i561[11]
  i560.lightmapScaleOffset = new pc.Vec4( i561[12], i561[13], i561[14], i561[15] )
  i560.lightProbeUsage = i561[16]
  i560.reflectionProbeUsage = i561[17]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i567 = data
  i566.name = i567[0]
  i566.tagId = i567[1]
  i566.enabled = !!i567[2]
  i566.isStatic = !!i567[3]
  i566.layer = i567[4]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i569 = data
  i568.name = i569[0]
  i568.halfPrecision = !!i569[1]
  i568.useSimplification = !!i569[2]
  i568.useUInt32IndexFormat = !!i569[3]
  i568.vertexCount = i569[4]
  i568.aabb = i569[5]
  var i571 = i569[6]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( !!i571[i + 0] );
  }
  i568.streams = i570
  i568.vertices = i569[7]
  var i573 = i569[8]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i573[i + 0]) );
  }
  i568.subMeshes = i572
  var i575 = i569[9]
  var i574 = []
  for(var i = 0; i < i575.length; i += 16) {
    i574.push( new pc.Mat4().setData(i575[i + 0], i575[i + 1], i575[i + 2], i575[i + 3],  i575[i + 4], i575[i + 5], i575[i + 6], i575[i + 7],  i575[i + 8], i575[i + 9], i575[i + 10], i575[i + 11],  i575[i + 12], i575[i + 13], i575[i + 14], i575[i + 15]) );
  }
  i568.bindposes = i574
  var i577 = i569[10]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i577[i + 0]) );
  }
  i568.blendShapes = i576
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i583 = data
  i582.triangles = i583[0]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i589 = data
  i588.name = i589[0]
  var i591 = i589[1]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i591[i + 0]) );
  }
  i588.frames = i590
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i592 = root || new pc.UnityMaterial()
  var i593 = data
  i592.name = i593[0]
  request.r(i593[1], i593[2], 0, i592, 'shader')
  i592.renderQueue = i593[3]
  i592.enableInstancing = !!i593[4]
  var i595 = i593[5]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i595[i + 0]) );
  }
  i592.floatParameters = i594
  var i597 = i593[6]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i597[i + 0]) );
  }
  i592.colorParameters = i596
  var i599 = i593[7]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i599[i + 0]) );
  }
  i592.vectorParameters = i598
  var i601 = i593[8]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i601[i + 0]) );
  }
  i592.textureParameters = i600
  var i603 = i593[9]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i603[i + 0]) );
  }
  i592.materialFlags = i602
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i607 = data
  i606.name = i607[0]
  i606.value = i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i611 = data
  i610.name = i611[0]
  i610.value = new pc.Color(i611[1], i611[2], i611[3], i611[4])
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = new pc.Vec4( i615[1], i615[2], i615[3], i615[4] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i619 = data
  i618.name = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'value')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i623 = data
  i622.name = i623[0]
  i622.enabled = !!i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i625 = data
  i624.name = i625[0]
  i624.width = i625[1]
  i624.height = i625[2]
  i624.mipmapCount = i625[3]
  i624.anisoLevel = i625[4]
  i624.filterMode = i625[5]
  i624.hdr = !!i625[6]
  i624.format = i625[7]
  i624.wrapMode = i625[8]
  i624.alphaIsTransparency = !!i625[9]
  i624.alphaSource = i625[10]
  i624.graphicsFormat = i625[11]
  i624.sRGBTexture = !!i625[12]
  i624.desiredColorSpace = i625[13]
  i624.wrapU = i625[14]
  i624.wrapV = i625[15]
  return i624
}

Deserializers["Project.Scripts.HexCore.HexCell"] = function (request, data, root) {
  var i626 = root || request.c( 'Project.Scripts.HexCore.HexCell' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, '_highlightMaterial')
  request.r(i627[2], i627[3], 0, i626, '_defaultMaterial')
  request.r(i627[4], i627[5], 0, i626, '_meshRenderer')
  request.r(i627[6], i627[7], 0, i626, '_effect')
  request.r(i627[8], i627[9], 0, i626, '_audioSource')
  request.r(i627[10], i627[11], 0, i626, '_destroyClip')
  i626.<IsEmpty>k__BackingField = !!i627[12]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i629 = data
  i628.center = new pc.Vec3( i629[0], i629[1], i629[2] )
  i628.size = new pc.Vec3( i629[3], i629[4], i629[5] )
  i628.enabled = !!i629[6]
  i628.isTrigger = !!i629[7]
  request.r(i629[8], i629[9], 0, i628, 'material')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'clip')
  request.r(i631[2], i631[3], 0, i630, 'outputAudioMixerGroup')
  i630.playOnAwake = !!i631[4]
  i630.loop = !!i631[5]
  i630.time = i631[6]
  i630.volume = i631[7]
  i630.pitch = i631[8]
  i630.enabled = !!i631[9]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i633 = data
  i632.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i633[0], i632.main)
  i632.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i633[1], i632.colorBySpeed)
  i632.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i633[2], i632.colorOverLifetime)
  i632.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i633[3], i632.emission)
  i632.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i633[4], i632.rotationBySpeed)
  i632.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i633[5], i632.rotationOverLifetime)
  i632.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i633[6], i632.shape)
  i632.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i633[7], i632.sizeBySpeed)
  i632.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i633[8], i632.sizeOverLifetime)
  i632.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i633[9], i632.textureSheetAnimation)
  i632.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i633[10], i632.velocityOverLifetime)
  i632.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i633[11], i632.noise)
  i632.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i633[12], i632.inheritVelocity)
  i632.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i633[13], i632.forceOverLifetime)
  i632.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i633[14], i632.limitVelocityOverLifetime)
  i632.useAutoRandomSeed = !!i633[15]
  i632.randomSeed = i633[16]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemMain()
  var i635 = data
  i634.duration = i635[0]
  i634.loop = !!i635[1]
  i634.prewarm = !!i635[2]
  i634.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[3], i634.startDelay)
  i634.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[4], i634.startLifetime)
  i634.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[5], i634.startSpeed)
  i634.startSize3D = !!i635[6]
  i634.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[7], i634.startSizeX)
  i634.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[8], i634.startSizeY)
  i634.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[9], i634.startSizeZ)
  i634.startRotation3D = !!i635[10]
  i634.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[11], i634.startRotationX)
  i634.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[12], i634.startRotationY)
  i634.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[13], i634.startRotationZ)
  i634.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i635[14], i634.startColor)
  i634.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[15], i634.gravityModifier)
  i634.simulationSpace = i635[16]
  request.r(i635[17], i635[18], 0, i634, 'customSimulationSpace')
  i634.simulationSpeed = i635[19]
  i634.useUnscaledTime = !!i635[20]
  i634.scalingMode = i635[21]
  i634.playOnAwake = !!i635[22]
  i634.maxParticles = i635[23]
  i634.emitterVelocityMode = i635[24]
  i634.stopAction = i635[25]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i636 = root || new pc.MinMaxCurve()
  var i637 = data
  i636.mode = i637[0]
  i636.curveMin = new pc.AnimationCurve( { keys_flow: i637[1] } )
  i636.curveMax = new pc.AnimationCurve( { keys_flow: i637[2] } )
  i636.curveMultiplier = i637[3]
  i636.constantMin = i637[4]
  i636.constantMax = i637[5]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i638 = root || new pc.MinMaxGradient()
  var i639 = data
  i638.mode = i639[0]
  i638.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i639[1], i638.gradientMin)
  i638.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i639[2], i638.gradientMax)
  i638.colorMin = new pc.Color(i639[3], i639[4], i639[5], i639[6])
  i638.colorMax = new pc.Color(i639[7], i639[8], i639[9], i639[10])
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i641 = data
  i640.mode = i641[0]
  var i643 = i641[1]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i643[i + 0]) );
  }
  i640.colorKeys = i642
  var i645 = i641[2]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i645[i + 0]) );
  }
  i640.alphaKeys = i644
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemColorBySpeed()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i647[1], i646.color)
  i646.range = new pc.Vec2( i647[2], i647[3] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i651 = data
  i650.color = new pc.Color(i651[0], i651[1], i651[2], i651[3])
  i650.time = i651[4]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i655 = data
  i654.alpha = i655[0]
  i654.time = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemColorOverLifetime()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i657[1], i656.color)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemEmitter()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.rateOverTime)
  i658.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.rateOverDistance)
  var i661 = i659[3]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i661[i + 0]) );
  }
  i658.bursts = i660
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemBurst()
  var i665 = data
  i664.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[0], i664.count)
  i664.cycleCount = i665[1]
  i664.minCount = i665[2]
  i664.maxCount = i665[3]
  i664.repeatInterval = i665[4]
  i664.time = i665[5]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemRotationBySpeed()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.separateAxes = !!i667[4]
  i666.range = new pc.Vec2( i667[5], i667[6] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemRotationOverLifetime()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemShape()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.shapeType = i671[1]
  i670.randomDirectionAmount = i671[2]
  i670.sphericalDirectionAmount = i671[3]
  i670.randomPositionAmount = i671[4]
  i670.alignToDirection = !!i671[5]
  i670.radius = i671[6]
  i670.radiusMode = i671[7]
  i670.radiusSpread = i671[8]
  i670.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[9], i670.radiusSpeed)
  i670.radiusThickness = i671[10]
  i670.angle = i671[11]
  i670.length = i671[12]
  i670.boxThickness = new pc.Vec3( i671[13], i671[14], i671[15] )
  i670.meshShapeType = i671[16]
  request.r(i671[17], i671[18], 0, i670, 'mesh')
  request.r(i671[19], i671[20], 0, i670, 'meshRenderer')
  request.r(i671[21], i671[22], 0, i670, 'skinnedMeshRenderer')
  i670.useMeshMaterialIndex = !!i671[23]
  i670.meshMaterialIndex = i671[24]
  i670.useMeshColors = !!i671[25]
  i670.normalOffset = i671[26]
  i670.arc = i671[27]
  i670.arcMode = i671[28]
  i670.arcSpread = i671[29]
  i670.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[30], i670.arcSpeed)
  i670.donutRadius = i671[31]
  i670.position = new pc.Vec3( i671[32], i671[33], i671[34] )
  i670.rotation = new pc.Vec3( i671[35], i671[36], i671[37] )
  i670.scale = new pc.Vec3( i671[38], i671[39], i671[40] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemSizeBySpeed()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  i672.range = new pc.Vec2( i673[5], i673[6] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemSizeOverLifetime()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.mode = i677[1]
  i676.animation = i677[2]
  i676.numTilesX = i677[3]
  i676.numTilesY = i677[4]
  i676.useRandomRow = !!i677[5]
  i676.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[6], i676.frameOverTime)
  i676.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[7], i676.startFrame)
  i676.cycleCount = i677[8]
  i676.rowIndex = i677[9]
  i676.flipU = i677[10]
  i676.flipV = i677[11]
  i676.spriteCount = i677[12]
  var i679 = i677[13]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.sprites = i678
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.x)
  i682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.y)
  i682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.z)
  i682.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[4], i682.radial)
  i682.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[5], i682.speedModifier)
  i682.space = i683[6]
  i682.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[7], i682.orbitalX)
  i682.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[8], i682.orbitalY)
  i682.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[9], i682.orbitalZ)
  i682.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[10], i682.orbitalOffsetX)
  i682.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[11], i682.orbitalOffsetY)
  i682.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[12], i682.orbitalOffsetZ)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemNoise()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.separateAxes = !!i685[1]
  i684.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.strengthX)
  i684.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.strengthY)
  i684.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[4], i684.strengthZ)
  i684.frequency = i685[5]
  i684.damping = !!i685[6]
  i684.octaveCount = i685[7]
  i684.octaveMultiplier = i685[8]
  i684.octaveScale = i685[9]
  i684.quality = i685[10]
  i684.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[11], i684.scrollSpeed)
  i684.scrollSpeedMultiplier = i685[12]
  i684.remapEnabled = !!i685[13]
  i684.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[14], i684.remapX)
  i684.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[15], i684.remapY)
  i684.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[16], i684.remapZ)
  i684.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[17], i684.positionAmount)
  i684.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[18], i684.rotationAmount)
  i684.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[19], i684.sizeAmount)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemInheritVelocity()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.mode = i687[1]
  i686.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.curve)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemForceOverLifetime()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.x)
  i688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.y)
  i688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.z)
  i688.space = i689[4]
  i688.randomized = !!i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.limit)
  i690.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.limitX)
  i690.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.limitY)
  i690.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[4], i690.limitZ)
  i690.dampen = i691[5]
  i690.separateAxes = !!i691[6]
  i690.space = i691[7]
  i690.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[8], i690.drag)
  i690.multiplyDragByParticleSize = !!i691[9]
  i690.multiplyDragByParticleVelocity = !!i691[10]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'mesh')
  i692.meshCount = i693[2]
  i692.activeVertexStreamsCount = i693[3]
  i692.alignment = i693[4]
  i692.renderMode = i693[5]
  i692.sortMode = i693[6]
  i692.lengthScale = i693[7]
  i692.velocityScale = i693[8]
  i692.cameraVelocityScale = i693[9]
  i692.normalDirection = i693[10]
  i692.sortingFudge = i693[11]
  i692.minParticleSize = i693[12]
  i692.maxParticleSize = i693[13]
  i692.pivot = new pc.Vec3( i693[14], i693[15], i693[16] )
  request.r(i693[17], i693[18], 0, i692, 'trailMaterial')
  i692.applyActiveColorSpace = !!i693[19]
  i692.enabled = !!i693[20]
  request.r(i693[21], i693[22], 0, i692, 'sharedMaterial')
  var i695 = i693[23]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.sharedMaterials = i694
  i692.receiveShadows = !!i693[24]
  i692.shadowCastingMode = i693[25]
  i692.sortingLayerID = i693[26]
  i692.sortingOrder = i693[27]
  i692.lightmapIndex = i693[28]
  i692.lightmapSceneIndex = i693[29]
  i692.lightmapScaleOffset = new pc.Vec4( i693[30], i693[31], i693[32], i693[33] )
  i692.lightProbeUsage = i693[34]
  i692.reflectionProbeUsage = i693[35]
  return i692
}

Deserializers["Project.Scripts.HexCore.HexStack"] = function (request, data, root) {
  var i696 = root || request.c( 'Project.Scripts.HexCore.HexStack' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696._possibleColors = i698
  i696._minHexagons = i697[1]
  i696._maxHexagons = i697[2]
  i696._isRandom = !!i697[3]
  i696._noRandomCount = i697[4]
  i696._isTwoColors = !!i697[5]
  request.r(i697[6], i697[7], 0, i696, '_dragHandler')
  return i696
}

Deserializers["Project.Scripts.HexCore.Hex"] = function (request, data, root) {
  var i702 = root || request.c( 'Project.Scripts.HexCore.Hex' )
  var i703 = data
  i702.<HexColor>k__BackingField = i703[0]
  request.r(i703[1], i703[2], 0, i702, '<AudioSource>k__BackingField')
  request.r(i703[3], i703[4], 0, i702, '<MoveClip>k__BackingField')
  request.r(i703[5], i703[6], 0, i702, '<DestroyClip>k__BackingField')
  return i702
}

Deserializers["Project.Scripts.InputSystem.DragHandler"] = function (request, data, root) {
  var i704 = root || request.c( 'Project.Scripts.InputSystem.DragHandler' )
  var i705 = data
  i704._liftHeight = i705[0]
  i704._returnDuration = i705[1]
  request.r(i705[2], i705[3], 0, i704, '_audioSource')
  request.r(i705[4], i705[5], 0, i704, '_pickupClip')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i707 = data
  i706.name = i707[0]
  i706.atlasId = i707[1]
  i706.mipmapCount = i707[2]
  i706.hdr = !!i707[3]
  i706.size = i707[4]
  i706.anisoLevel = i707[5]
  i706.filterMode = i707[6]
  var i709 = i707[7]
  var i708 = []
  for(var i = 0; i < i709.length; i += 4) {
    i708.push( UnityEngine.Rect.MinMaxRect(i709[i + 0], i709[i + 1], i709[i + 2], i709[i + 3]) );
  }
  i706.rects = i708
  i706.wrapU = i707[8]
  i706.wrapV = i707[9]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i713 = data
  i712.name = i713[0]
  i712.index = i713[1]
  i712.startup = !!i713[2]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i715 = data
  i714.aspect = i715[0]
  i714.orthographic = !!i715[1]
  i714.orthographicSize = i715[2]
  i714.backgroundColor = new pc.Color(i715[3], i715[4], i715[5], i715[6])
  i714.nearClipPlane = i715[7]
  i714.farClipPlane = i715[8]
  i714.fieldOfView = i715[9]
  i714.depth = i715[10]
  i714.clearFlags = i715[11]
  i714.cullingMask = i715[12]
  i714.rect = i715[13]
  request.r(i715[14], i715[15], 0, i714, 'targetTexture')
  i714.usePhysicalProperties = !!i715[16]
  i714.focalLength = i715[17]
  i714.sensorSize = new pc.Vec2( i715[18], i715[19] )
  i714.lensShift = new pc.Vec2( i715[20], i715[21] )
  i714.gateFit = i715[22]
  i714.commandBufferCount = i715[23]
  i714.cameraType = i715[24]
  i714.enabled = !!i715[25]
  return i714
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i717 = data
  i716.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i717[0] )
  i716.m_MaxRayIntersections = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i719 = data
  i718.type = i719[0]
  i718.color = new pc.Color(i719[1], i719[2], i719[3], i719[4])
  i718.cullingMask = i719[5]
  i718.intensity = i719[6]
  i718.range = i719[7]
  i718.spotAngle = i719[8]
  i718.shadows = i719[9]
  i718.shadowNormalBias = i719[10]
  i718.shadowBias = i719[11]
  i718.shadowStrength = i719[12]
  i718.shadowResolution = i719[13]
  i718.lightmapBakeType = i719[14]
  i718.renderMode = i719[15]
  request.r(i719[16], i719[17], 0, i718, 'cookie')
  i718.cookieSize = i719[18]
  i718.shadowNearPlane = i719[19]
  i718.occlusionMaskChannel = i719[20]
  i718.isBaked = !!i719[21]
  i718.mixedLightingMode = i719[22]
  i718.enabled = !!i719[23]
  return i718
}

Deserializers["Project.Scripts.HexCore.HexGrid"] = function (request, data, root) {
  var i720 = root || request.c( 'Project.Scripts.HexCore.HexGrid' )
  var i721 = data
  i720._gridRadius = i721[0]
  i720._cellSpacing = i721[1]
  request.r(i721[2], i721[3], 0, i720, '_hexCellPrefab')
  return i720
}

Deserializers["Project.Scripts.Game.EntryPoint"] = function (request, data, root) {
  var i722 = root || request.c( 'Project.Scripts.Game.EntryPoint' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, '_hexGrid')
  var i725 = i723[2]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i722._initialStacks = i724
  request.r(i723[3], i723[4], 0, i722, '_dragHexStackPrefab')
  var i727 = i723[5]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i722._dragHexStackSpawnPoints = i726
  request.r(i723[6], i723[7], 0, i722, '_endGame')
  request.r(i723[8], i723[9], 0, i722, '_chainReactionOfHex')
  request.r(i723[10], i723[11], 0, i722, '_tutorialPointer')
  i722._dragSpawnDuration = i723[12]
  i722._gameDuration = i723[13]
  request.r(i723[14], i723[15], 0, i722, '_timerView')
  return i722
}

Deserializers["Project.Scripts.Game.EndGame"] = function (request, data, root) {
  var i732 = root || request.c( 'Project.Scripts.Game.EndGame' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, '_endGameCanvasGroup')
  request.r(i733[2], i733[3], 0, i732, '_playNowButton')
  request.r(i733[4], i733[5], 0, i732, '_tutorialPointer')
  return i732
}

Deserializers["Project.Scripts.HexCore.ChainReactionOfHex"] = function (request, data, root) {
  var i734 = root || request.c( 'Project.Scripts.HexCore.ChainReactionOfHex' )
  var i735 = data
  i734._moveCurve = new pc.AnimationCurve( { keys_flow: i735[0] } )
  request.r(i735[1], i735[2], 0, i734, '_hexGrid')
  i734._baseMoveDuration = i735[3]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i737 = data
  i736.pivot = new pc.Vec2( i737[0], i737[1] )
  i736.anchorMin = new pc.Vec2( i737[2], i737[3] )
  i736.anchorMax = new pc.Vec2( i737[4], i737[5] )
  i736.sizeDelta = new pc.Vec2( i737[6], i737[7] )
  i736.anchoredPosition3D = new pc.Vec3( i737[8], i737[9], i737[10] )
  i736.rotation = new pc.Quat(i737[11], i737[12], i737[13], i737[14])
  i736.scale = new pc.Vec3( i737[15], i737[16], i737[17] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i739 = data
  i738.planeDistance = i739[0]
  i738.referencePixelsPerUnit = i739[1]
  i738.isFallbackOverlay = !!i739[2]
  i738.renderMode = i739[3]
  i738.renderOrder = i739[4]
  i738.sortingLayerName = i739[5]
  i738.sortingOrder = i739[6]
  i738.scaleFactor = i739[7]
  request.r(i739[8], i739[9], 0, i738, 'worldCamera')
  i738.overrideSorting = !!i739[10]
  i738.pixelPerfect = !!i739[11]
  i738.targetDisplay = i739[12]
  i738.overridePixelPerfect = !!i739[13]
  i738.enabled = !!i739[14]
  return i738
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i741 = data
  i740.m_UiScaleMode = i741[0]
  i740.m_ReferencePixelsPerUnit = i741[1]
  i740.m_ScaleFactor = i741[2]
  i740.m_ReferenceResolution = new pc.Vec2( i741[3], i741[4] )
  i740.m_ScreenMatchMode = i741[5]
  i740.m_MatchWidthOrHeight = i741[6]
  i740.m_PhysicalUnit = i741[7]
  i740.m_FallbackScreenDPI = i741[8]
  i740.m_DefaultSpriteDPI = i741[9]
  i740.m_DynamicPixelsPerUnit = i741[10]
  i740.m_PresetInfoIsWorld = !!i741[11]
  return i740
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i743 = data
  i742.m_IgnoreReversedGraphics = !!i743[0]
  i742.m_BlockingObjects = i743[1]
  i742.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i743[2] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i745 = data
  i744.m_Alpha = i745[0]
  i744.m_Interactable = !!i745[1]
  i744.m_BlocksRaycasts = !!i745[2]
  i744.m_IgnoreParentGroups = !!i745[3]
  i744.enabled = !!i745[4]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i747 = data
  i746.cullTransparentMesh = !!i747[0]
  return i746
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Image' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_Sprite')
  i748.m_Type = i749[2]
  i748.m_PreserveAspect = !!i749[3]
  i748.m_FillCenter = !!i749[4]
  i748.m_FillMethod = i749[5]
  i748.m_FillAmount = i749[6]
  i748.m_FillClockwise = !!i749[7]
  i748.m_FillOrigin = i749[8]
  i748.m_UseSpriteMesh = !!i749[9]
  i748.m_PixelsPerUnitMultiplier = i749[10]
  request.r(i749[11], i749[12], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[13]
  i748.m_Color = new pc.Color(i749[14], i749[15], i749[16], i749[17])
  i748.m_RaycastTarget = !!i749[18]
  i748.m_RaycastPadding = new pc.Vec4( i749[19], i749[20], i749[21], i749[22] )
  return i748
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Button' )
  var i751 = data
  i750.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i751[0], i750.m_OnClick)
  i750.m_Navigation = request.d('UnityEngine.UI.Navigation', i751[1], i750.m_Navigation)
  i750.m_Transition = i751[2]
  i750.m_Colors = request.d('UnityEngine.UI.ColorBlock', i751[3], i750.m_Colors)
  i750.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i751[4], i750.m_SpriteState)
  i750.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i751[5], i750.m_AnimationTriggers)
  i750.m_Interactable = !!i751[6]
  request.r(i751[7], i751[8], 0, i750, 'm_TargetGraphic')
  return i750
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i753 = data
  i752.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i753[0], i752.m_PersistentCalls)
  return i752
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('UnityEngine.Events.PersistentCall', i757[i + 0]));
  }
  i754.m_Calls = i756
  return i754
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_Target')
  i760.m_TargetAssemblyTypeName = i761[2]
  i760.m_MethodName = i761[3]
  i760.m_Mode = i761[4]
  i760.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i761[5], i760.m_Arguments)
  i760.m_CallState = i761[6]
  return i760
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i763 = data
  i762.m_Mode = i763[0]
  i762.m_WrapAround = !!i763[1]
  request.r(i763[2], i763[3], 0, i762, 'm_SelectOnUp')
  request.r(i763[4], i763[5], 0, i762, 'm_SelectOnDown')
  request.r(i763[6], i763[7], 0, i762, 'm_SelectOnLeft')
  request.r(i763[8], i763[9], 0, i762, 'm_SelectOnRight')
  return i762
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i765 = data
  i764.m_NormalColor = new pc.Color(i765[0], i765[1], i765[2], i765[3])
  i764.m_HighlightedColor = new pc.Color(i765[4], i765[5], i765[6], i765[7])
  i764.m_PressedColor = new pc.Color(i765[8], i765[9], i765[10], i765[11])
  i764.m_SelectedColor = new pc.Color(i765[12], i765[13], i765[14], i765[15])
  i764.m_DisabledColor = new pc.Color(i765[16], i765[17], i765[18], i765[19])
  i764.m_ColorMultiplier = i765[20]
  i764.m_FadeDuration = i765[21]
  return i764
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_HighlightedSprite')
  request.r(i767[2], i767[3], 0, i766, 'm_PressedSprite')
  request.r(i767[4], i767[5], 0, i766, 'm_SelectedSprite')
  request.r(i767[6], i767[7], 0, i766, 'm_DisabledSprite')
  return i766
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i769 = data
  i768.m_NormalTrigger = i769[0]
  i768.m_HighlightedTrigger = i769[1]
  i768.m_PressedTrigger = i769[2]
  i768.m_SelectedTrigger = i769[3]
  i768.m_DisabledTrigger = i769[4]
  return i768
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.Text' )
  var i771 = data
  i770.m_FontData = request.d('UnityEngine.UI.FontData', i771[0], i770.m_FontData)
  i770.m_Text = i771[1]
  request.r(i771[2], i771[3], 0, i770, 'm_Material')
  i770.m_Maskable = !!i771[4]
  i770.m_Color = new pc.Color(i771[5], i771[6], i771[7], i771[8])
  i770.m_RaycastTarget = !!i771[9]
  i770.m_RaycastPadding = new pc.Vec4( i771[10], i771[11], i771[12], i771[13] )
  return i770
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.FontData' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'm_Font')
  i772.m_FontSize = i773[2]
  i772.m_FontStyle = i773[3]
  i772.m_BestFit = !!i773[4]
  i772.m_MinSize = i773[5]
  i772.m_MaxSize = i773[6]
  i772.m_Alignment = i773[7]
  i772.m_AlignByGeometry = !!i773[8]
  i772.m_RichText = !!i773[9]
  i772.m_HorizontalOverflow = i773[10]
  i772.m_VerticalOverflow = i773[11]
  i772.m_LineSpacing = i773[12]
  return i772
}

Deserializers["Project.Scripts.UI.TutorialPointer"] = function (request, data, root) {
  var i774 = root || request.c( 'Project.Scripts.UI.TutorialPointer' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, '_handObject')
  request.r(i775[2], i775[3], 0, i774, '_handRect')
  request.r(i775[4], i775[5], 0, i774, '_parentCanvas')
  request.r(i775[6], i775[7], 0, i774, '_entryPoint')
  i774._idleTimeToShow = i775[8]
  i774._distance = i775[9]
  i774._duration = i775[10]
  return i774
}

Deserializers["Project.Scripts.UI.TimerView"] = function (request, data, root) {
  var i776 = root || request.c( 'Project.Scripts.UI.TimerView' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, '_fillImage')
  return i776
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'm_FirstSelected')
  i778.m_sendNavigationEvents = !!i779[2]
  i778.m_DragThreshold = i779[3]
  return i778
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i781 = data
  i780.m_HorizontalAxis = i781[0]
  i780.m_VerticalAxis = i781[1]
  i780.m_SubmitButton = i781[2]
  i780.m_CancelButton = i781[3]
  i780.m_InputActionsPerSecond = i781[4]
  i780.m_RepeatDelay = i781[5]
  i780.m_ForceModuleActive = !!i781[6]
  i780.m_SendPointerHoverToParent = !!i781[7]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i783 = data
  i782.ambientIntensity = i783[0]
  i782.reflectionIntensity = i783[1]
  i782.ambientMode = i783[2]
  i782.ambientLight = new pc.Color(i783[3], i783[4], i783[5], i783[6])
  i782.ambientSkyColor = new pc.Color(i783[7], i783[8], i783[9], i783[10])
  i782.ambientGroundColor = new pc.Color(i783[11], i783[12], i783[13], i783[14])
  i782.ambientEquatorColor = new pc.Color(i783[15], i783[16], i783[17], i783[18])
  i782.fogColor = new pc.Color(i783[19], i783[20], i783[21], i783[22])
  i782.fogEndDistance = i783[23]
  i782.fogStartDistance = i783[24]
  i782.fogDensity = i783[25]
  i782.fog = !!i783[26]
  request.r(i783[27], i783[28], 0, i782, 'skybox')
  i782.fogMode = i783[29]
  var i785 = i783[30]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i785[i + 0]) );
  }
  i782.lightmaps = i784
  i782.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i783[31], i782.lightProbes)
  i782.lightmapsMode = i783[32]
  i782.mixedBakeMode = i783[33]
  i782.environmentLightingMode = i783[34]
  i782.ambientProbe = new pc.SphericalHarmonicsL2(i783[35])
  request.r(i783[36], i783[37], 0, i782, 'customReflection')
  request.r(i783[38], i783[39], 0, i782, 'defaultReflection')
  i782.defaultReflectionMode = i783[40]
  i782.defaultReflectionResolution = i783[41]
  i782.sunLightObjectId = i783[42]
  i782.pixelLightCount = i783[43]
  i782.defaultReflectionHDR = !!i783[44]
  i782.hasLightDataAsset = !!i783[45]
  i782.hasManualGenerate = !!i783[46]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'lightmapColor')
  request.r(i789[2], i789[3], 0, i788, 'lightmapDirection')
  request.r(i789[4], i789[5], 0, i788, 'shadowMask')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i790 = root || new UnityEngine.LightProbes()
  var i791 = data
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i799 = data
  var i801 = i799[0]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i801[i + 0]));
  }
  i798.ShaderCompilationErrors = i800
  i798.name = i799[1]
  i798.guid = i799[2]
  var i803 = i799[3]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i798.shaderDefinedKeywords = i802
  var i805 = i799[4]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i805[i + 0]) );
  }
  i798.passes = i804
  var i807 = i799[5]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i807[i + 0]) );
  }
  i798.usePasses = i806
  var i809 = i799[6]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i809[i + 0]) );
  }
  i798.defaultParameterValues = i808
  request.r(i799[7], i799[8], 0, i798, 'unityFallbackShader')
  i798.readDepth = !!i799[9]
  i798.hasDepthOnlyPass = !!i799[10]
  i798.isCreatedByShaderGraph = !!i799[11]
  i798.disableBatching = !!i799[12]
  i798.compiled = !!i799[13]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i813 = data
  i812.shaderName = i813[0]
  i812.errorMessage = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i818 = root || new pc.UnityShaderPass()
  var i819 = data
  i818.id = i819[0]
  i818.subShaderIndex = i819[1]
  i818.name = i819[2]
  i818.passType = i819[3]
  i818.grabPassTextureName = i819[4]
  i818.usePass = !!i819[5]
  i818.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[6], i818.zTest)
  i818.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[7], i818.zWrite)
  i818.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[8], i818.culling)
  i818.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i819[9], i818.blending)
  i818.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i819[10], i818.alphaBlending)
  i818.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[11], i818.colorWriteMask)
  i818.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[12], i818.offsetUnits)
  i818.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[13], i818.offsetFactor)
  i818.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[14], i818.stencilRef)
  i818.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[15], i818.stencilReadMask)
  i818.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[16], i818.stencilWriteMask)
  i818.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i819[17], i818.stencilOp)
  i818.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i819[18], i818.stencilOpFront)
  i818.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i819[19], i818.stencilOpBack)
  var i821 = i819[20]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i821[i + 0]) );
  }
  i818.tags = i820
  var i823 = i819[21]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i818.passDefinedKeywords = i822
  var i825 = i819[22]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i825[i + 0]) );
  }
  i818.passDefinedKeywordGroups = i824
  var i827 = i819[23]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i827[i + 0]) );
  }
  i818.variants = i826
  var i829 = i819[24]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i829[i + 0]) );
  }
  i818.excludedVariants = i828
  i818.hasDepthReader = !!i819[25]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i831 = data
  i830.val = i831[0]
  i830.name = i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i833 = data
  i832.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[0], i832.src)
  i832.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[1], i832.dst)
  i832.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[2], i832.op)
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i835 = data
  i834.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[0], i834.pass)
  i834.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[1], i834.fail)
  i834.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[2], i834.zFail)
  i834.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[3], i834.comp)
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i839 = data
  i838.name = i839[0]
  i838.value = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i843 = data
  var i845 = i843[0]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i842.keywords = i844
  i842.hasDiscard = !!i843[1]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i849 = data
  i848.passId = i849[0]
  i848.subShaderIndex = i849[1]
  var i851 = i849[2]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( i851[i + 0] );
  }
  i848.keywords = i850
  i848.vertexProgram = i849[3]
  i848.fragmentProgram = i849[4]
  i848.exportedForWebGl2 = !!i849[5]
  i848.readDepth = !!i849[6]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'shader')
  i854.pass = i855[2]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i859 = data
  i858.name = i859[0]
  i858.type = i859[1]
  i858.value = new pc.Vec4( i859[2], i859[3], i859[4], i859[5] )
  i858.textureValue = i859[6]
  i858.shaderPropertyFlag = i859[7]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i861 = data
  i860.name = i861[0]
  request.r(i861[1], i861[2], 0, i860, 'texture')
  i860.aabb = i861[3]
  i860.vertices = i861[4]
  i860.triangles = i861[5]
  i860.textureRect = UnityEngine.Rect.MinMaxRect(i861[6], i861[7], i861[8], i861[9])
  i860.packedRect = UnityEngine.Rect.MinMaxRect(i861[10], i861[11], i861[12], i861[13])
  i860.border = new pc.Vec4( i861[14], i861[15], i861[16], i861[17] )
  i860.transparency = i861[18]
  i860.bounds = i861[19]
  i860.pixelsPerUnit = i861[20]
  i860.textureWidth = i861[21]
  i860.textureHeight = i861[22]
  i860.nativeSize = new pc.Vec2( i861[23], i861[24] )
  i860.pivot = new pc.Vec2( i861[25], i861[26] )
  i860.textureRectOffset = new pc.Vec2( i861[27], i861[28] )
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i863 = data
  i862.name = i863[0]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i865 = data
  i864.name = i865[0]
  i864.ascent = i865[1]
  i864.originalLineHeight = i865[2]
  i864.fontSize = i865[3]
  var i867 = i865[4]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i867[i + 0]) );
  }
  i864.characterInfo = i866
  request.r(i865[5], i865[6], 0, i864, 'texture')
  i864.originalFontSize = i865[7]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i871 = data
  i870.index = i871[0]
  i870.advance = i871[1]
  i870.bearing = i871[2]
  i870.glyphWidth = i871[3]
  i870.glyphHeight = i871[4]
  i870.minX = i871[5]
  i870.maxX = i871[6]
  i870.minY = i871[7]
  i870.maxY = i871[8]
  i870.uvBottomLeftX = i871[9]
  i870.uvBottomLeftY = i871[10]
  i870.uvBottomRightX = i871[11]
  i870.uvBottomRightY = i871[12]
  i870.uvTopLeftX = i871[13]
  i870.uvTopLeftY = i871[14]
  i870.uvTopRightX = i871[15]
  i870.uvTopRightY = i871[16]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i873 = data
  i872.name = i873[0]
  i872.bytes64 = i873[1]
  i872.data = i873[2]
  return i872
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i874 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i875 = data
  i874.useSafeMode = !!i875[0]
  i874.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i875[1], i874.safeModeOptions)
  i874.timeScale = i875[2]
  i874.unscaledTimeScale = i875[3]
  i874.useSmoothDeltaTime = !!i875[4]
  i874.maxSmoothUnscaledTime = i875[5]
  i874.rewindCallbackMode = i875[6]
  i874.showUnityEditorReport = !!i875[7]
  i874.logBehaviour = i875[8]
  i874.drawGizmos = !!i875[9]
  i874.defaultRecyclable = !!i875[10]
  i874.defaultAutoPlay = i875[11]
  i874.defaultUpdateType = i875[12]
  i874.defaultTimeScaleIndependent = !!i875[13]
  i874.defaultEaseType = i875[14]
  i874.defaultEaseOvershootOrAmplitude = i875[15]
  i874.defaultEasePeriod = i875[16]
  i874.defaultAutoKill = !!i875[17]
  i874.defaultLoopType = i875[18]
  i874.debugMode = !!i875[19]
  i874.debugStoreTargetId = !!i875[20]
  i874.showPreviewPanel = !!i875[21]
  i874.storeSettingsLocation = i875[22]
  i874.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i875[23], i874.modules)
  i874.createASMDEF = !!i875[24]
  i874.showPlayingTweens = !!i875[25]
  i874.showPausedTweens = !!i875[26]
  return i874
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i876 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i877 = data
  i876.logBehaviour = i877[0]
  i876.nestedTweenFailureBehaviour = i877[1]
  return i876
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i878 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i879 = data
  i878.showPanel = !!i879[0]
  i878.audioEnabled = !!i879[1]
  i878.physicsEnabled = !!i879[2]
  i878.physics2DEnabled = !!i879[3]
  i878.spriteEnabled = !!i879[4]
  i878.uiEnabled = !!i879[5]
  i878.textMeshProEnabled = !!i879[6]
  i878.tk2DEnabled = !!i879[7]
  i878.deAudioEnabled = !!i879[8]
  i878.deUnityExtendedEnabled = !!i879[9]
  i878.epoOutlineEnabled = !!i879[10]
  return i878
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetSettings' )
  var i881 = data
  i880.m_DefaultGroup = i881[0]
  i880.m_currentHash = request.d('UnityEngine.Hash128', i881[1], i880.m_currentHash)
  i880.m_OptimizeCatalogSize = !!i881[2]
  i880.m_BuildRemoteCatalog = !!i881[3]
  i880.m_BundleLocalCatalog = !!i881[4]
  i880.m_CatalogRequestsTimeout = i881[5]
  i880.m_DisableCatalogUpdateOnStart = !!i881[6]
  i880.m_IgnoreUnsupportedFilesInBuild = !!i881[7]
  i880.m_UniqueBundleIds = !!i881[8]
  i880.m_NonRecursiveBuilding = !!i881[9]
  i880.m_CCDEnabled = !!i881[10]
  i880.m_maxConcurrentWebRequests = i881[11]
  i880.m_ContiguousBundles = !!i881[12]
  i880.m_StripUnityVersionFromBundleBuild = !!i881[13]
  i880.m_DisableVisibleSubAssetRepresentations = !!i881[14]
  i880.m_ShaderBundleNaming = i881[15]
  i880.m_ShaderBundleCustomNaming = i881[16]
  i880.m_MonoScriptBundleNaming = i881[17]
  i880.m_CheckForContentUpdateRestrictionsOption = i881[18]
  i880.m_MonoScriptBundleCustomNaming = i881[19]
  i880.m_RemoteCatalogBuildPath = request.d('UnityEditor.AddressableAssets.Settings.ProfileValueReference', i881[20], i880.m_RemoteCatalogBuildPath)
  i880.m_RemoteCatalogLoadPath = request.d('UnityEditor.AddressableAssets.Settings.ProfileValueReference', i881[21], i880.m_RemoteCatalogLoadPath)
  i880.m_ContentStateBuildPathProfileVariableName = i881[22]
  i880.m_CustomContentStateBuildPath = i881[23]
  i880.m_ContentStateBuildPath = i881[24]
  i880.m_BuildAddressablesWithPlayerBuild = i881[25]
  i880.m_overridePlayerVersion = i881[26]
  var i883 = i881[27]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.Settings.AddressableAssetGroup')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i880.m_GroupAssets = i882
  i880.m_BuildSettings = request.d('UnityEditor.AddressableAssets.Settings.AddressableAssetBuildSettings', i881[28], i880.m_BuildSettings)
  i880.m_ProfileSettings = request.d('UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings', i881[29], i880.m_ProfileSettings)
  i880.m_LabelTable = request.d('UnityEditor.AddressableAssets.Settings.LabelTable', i881[30], i880.m_LabelTable)
  var i885 = i881[31]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.Settings.AddressableAssetGroupSchemaTemplate')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('UnityEditor.AddressableAssets.Settings.AddressableAssetGroupSchemaTemplate', i885[i + 0]));
  }
  i880.m_SchemaTemplates = i884
  var i887 = i881[32]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ScriptableObject')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i880.m_GroupTemplateObjects = i886
  var i889 = i881[33]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ScriptableObject')))
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 1, i888, '')
  }
  i880.m_InitializationObjects = i888
  i880.m_CertificateHandlerType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i881[34], i880.m_CertificateHandlerType)
  i880.m_ActivePlayerDataBuilderIndex = i881[35]
  var i891 = i881[36]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ScriptableObject')))
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 1, i890, '')
  }
  i880.m_DataBuilders = i890
  i880.m_ActiveProfileId = i881[37]
  i880.m_HostingServicesManager = request.d('UnityEditor.AddressableAssets.HostingServices.HostingServicesManager', i881[38], i880.m_HostingServicesManager)
  return i880
}

Deserializers["UnityEngine.Hash128"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Hash128' )
  var i893 = data
  return i892
}

Deserializers["UnityEditor.AddressableAssets.Settings.ProfileValueReference"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEditor.AddressableAssets.Settings.ProfileValueReference' )
  var i895 = data
  i894.m_Id = i895[0]
  return i894
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetBuildSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetBuildSettings' )
  var i899 = data
  i898.m_CompileScriptsInVirtualMode = !!i899[0]
  i898.m_CleanupStreamingAssetsAfterBuilds = !!i899[1]
  i898.m_LogResourceManagerExceptions = !!i899[2]
  i898.m_BundleBuildPath = i899[3]
  return i898
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings' )
  var i901 = data
  var i903 = i901[0]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+BuildProfile')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+BuildProfile', i903[i + 0]));
  }
  i900.m_Profiles = i902
  var i905 = i901[1]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+ProfileIdData')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+ProfileIdData', i905[i + 0]));
  }
  i900.m_ProfileEntryNames = i904
  i900.m_ProfileVersion = i901[2]
  return i900
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+BuildProfile"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+BuildProfile' )
  var i909 = data
  i908.m_InheritedParent = i909[0]
  i908.m_Id = i909[1]
  i908.m_ProfileName = i909[2]
  var i911 = i909[3]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+BuildProfile+ProfileEntry')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+BuildProfile+ProfileEntry', i911[i + 0]));
  }
  i908.m_Values = i910
  return i908
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+BuildProfile+ProfileEntry"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+BuildProfile+ProfileEntry' )
  var i915 = data
  i914.m_Id = i915[0]
  i914.m_Value = i915[1]
  return i914
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+ProfileIdData"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetProfileSettings+ProfileIdData' )
  var i919 = data
  i918.m_Id = i919[0]
  i918.m_Name = i919[1]
  i918.m_InlineUsage = !!i919[2]
  return i918
}

Deserializers["UnityEditor.AddressableAssets.Settings.LabelTable"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEditor.AddressableAssets.Settings.LabelTable' )
  var i921 = data
  var i923 = i921[0]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(i923[i + 0]);
  }
  i920.m_LabelNames = i922
  return i920
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetGroupSchemaTemplate"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetGroupSchemaTemplate' )
  var i929 = data
  i928.m_DisplayName = i929[0]
  i928.m_Description = i929[1]
  var i931 = i929[2]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ResourceManagement.Util.SerializedType')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('UnityEngine.ResourceManagement.Util.SerializedType', i931[i + 0]));
  }
  i928.m_SchemaTypes = i930
  return i928
}

Deserializers["UnityEngine.ResourceManagement.Util.SerializedType"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.ResourceManagement.Util.SerializedType' )
  var i935 = data
  i934.m_AssemblyName = i935[0]
  i934.m_ClassName = i935[1]
  return i934
}

Deserializers["UnityEditor.AddressableAssets.HostingServices.HostingServicesManager"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEditor.AddressableAssets.HostingServices.HostingServicesManager' )
  var i937 = data
  var i939 = i937[0]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.HostingServices.HostingServicesManager+HostingServiceInfo')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('UnityEditor.AddressableAssets.HostingServices.HostingServicesManager+HostingServiceInfo', i939[i + 0]));
  }
  i936.m_HostingServiceInfos = i938
  request.r(i937[1], i937[2], 0, i936, 'm_Settings')
  i936.m_NextInstanceId = i937[3]
  var i941 = i937[4]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(i941[i + 0]);
  }
  i936.m_RegisteredServiceTypeRefs = i940
  i936.m_PingTimeoutInMilliseconds = i937[5]
  return i936
}

Deserializers["UnityEditor.AddressableAssets.HostingServices.HostingServicesManager+HostingServiceInfo"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEditor.AddressableAssets.HostingServices.HostingServicesManager+HostingServiceInfo' )
  var i945 = data
  i944.classRef = i945[0]
  i944.dataStore = request.d('UnityEditor.AddressableAssets.Settings.KeyDataStore', i945[1], i944.dataStore)
  return i944
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetGroup"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetGroup' )
  var i947 = data
  i946.m_GroupName = i947[0]
  i946.m_Data = request.d('UnityEditor.AddressableAssets.Settings.KeyDataStore', i947[1], i946.m_Data)
  i946.m_GUID = i947[2]
  var i949 = i947[3]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.Settings.AddressableAssetEntry')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('UnityEditor.AddressableAssets.Settings.AddressableAssetEntry', i949[i + 0]));
  }
  i946.m_SerializeEntries = i948
  i946.m_ReadOnly = !!i947[4]
  request.r(i947[5], i947[6], 0, i946, 'm_Settings')
  i946.m_SchemaSet = request.d('UnityEditor.AddressableAssets.Settings.AddressableAssetGroupSchemaSet', i947[7], i946.m_SchemaSet)
  return i946
}

Deserializers["UnityEditor.AddressableAssets.Settings.KeyDataStore"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEditor.AddressableAssets.Settings.KeyDataStore' )
  var i951 = data
  var i953 = i951[0]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.Settings.KeyDataStore+Entry')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('UnityEditor.AddressableAssets.Settings.KeyDataStore+Entry', i953[i + 0]));
  }
  i950.m_SerializedData = i952
  return i950
}

Deserializers["UnityEditor.AddressableAssets.Settings.KeyDataStore+Entry"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEditor.AddressableAssets.Settings.KeyDataStore+Entry' )
  var i957 = data
  i956.m_AssemblyName = i957[0]
  i956.m_ClassName = i957[1]
  i956.m_Data = i957[2]
  i956.m_Key = i957[3]
  return i956
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetEntry"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetEntry' )
  var i961 = data
  i960.FlaggedDuringContentUpdateRestriction = !!i961[0]
  i960.m_GUID = i961[1]
  i960.m_Address = i961[2]
  i960.m_ReadOnly = !!i961[3]
  var i963 = i961[4]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(i963[i + 0]);
  }
  i960.m_SerializedLabels = i962
  return i960
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetGroupSchemaSet"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetGroupSchemaSet' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.Settings.AddressableAssetGroupSchema')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i964.m_Schemas = i966
  return i964
}

Deserializers["UnityEditor.AddressableAssets.Settings.GroupSchemas.BundledAssetGroupSchema"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEditor.AddressableAssets.Settings.GroupSchemas.BundledAssetGroupSchema' )
  var i971 = data
  i970.m_InternalBundleIdMode = i971[0]
  i970.m_Compression = i971[1]
  i970.m_IncludeAddressInCatalog = !!i971[2]
  i970.m_IncludeGUIDInCatalog = !!i971[3]
  i970.m_IncludeLabelsInCatalog = !!i971[4]
  i970.m_InternalIdNamingMode = i971[5]
  i970.m_CacheClearBehavior = i971[6]
  i970.m_IncludeInBuild = !!i971[7]
  i970.m_BundledAssetProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i971[8], i970.m_BundledAssetProviderType)
  i970.m_ForceUniqueProvider = !!i971[9]
  i970.m_UseAssetBundleCache = !!i971[10]
  i970.m_UseAssetBundleCrc = !!i971[11]
  i970.m_UseAssetBundleCrcForCachedBundles = !!i971[12]
  i970.m_UseUWRForLocalBundles = !!i971[13]
  i970.m_Timeout = i971[14]
  i970.m_ChunkedTransfer = !!i971[15]
  i970.m_RedirectLimit = i971[16]
  i970.m_RetryCount = i971[17]
  i970.m_BuildPath = request.d('UnityEditor.AddressableAssets.Settings.ProfileValueReference', i971[18], i970.m_BuildPath)
  i970.m_LoadPath = request.d('UnityEditor.AddressableAssets.Settings.ProfileValueReference', i971[19], i970.m_LoadPath)
  i970.m_BundleMode = i971[20]
  i970.m_AssetBundleProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i971[21], i970.m_AssetBundleProviderType)
  i970.m_BundleNaming = i971[22]
  i970.m_AssetLoadMode = i971[23]
  request.r(i971[24], i971[25], 0, i970, 'm_Group')
  return i970
}

Deserializers["UnityEditor.AddressableAssets.Settings.GroupSchemas.ContentUpdateGroupSchema"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEditor.AddressableAssets.Settings.GroupSchemas.ContentUpdateGroupSchema' )
  var i973 = data
  i972.m_StaticContent = !!i973[0]
  request.r(i973[1], i973[2], 0, i972, 'm_Group')
  return i972
}

Deserializers["UnityEditor.AddressableAssets.Settings.GroupSchemas.PlayerDataGroupSchema"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEditor.AddressableAssets.Settings.GroupSchemas.PlayerDataGroupSchema' )
  var i975 = data
  i974.m_IncludeResourcesFolders = !!i975[0]
  i974.m_IncludeBuildSettingsScenes = !!i975[1]
  request.r(i975[2], i975[3], 0, i974, 'm_Group')
  return i974
}

Deserializers["UnityEditor.AddressableAssets.Settings.AddressableAssetGroupTemplate"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEditor.AddressableAssets.Settings.AddressableAssetGroupTemplate' )
  var i977 = data
  var i979 = i977[0]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.AddressableAssets.Settings.AddressableAssetGroupSchema')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i976.m_SchemaObjects = i978
  i976.m_Description = i977[1]
  request.r(i977[2], i977[3], 0, i976, 'm_Settings')
  return i976
}

Deserializers["UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptFastMode"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptFastMode' )
  var i981 = data
  i980.instanceProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i981[0], i980.instanceProviderType)
  i980.sceneProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i981[1], i980.sceneProviderType)
  return i980
}

Deserializers["UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptVirtualMode"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptVirtualMode' )
  var i983 = data
  i982.instanceProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i983[0], i982.instanceProviderType)
  i982.sceneProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i983[1], i982.sceneProviderType)
  return i982
}

Deserializers["UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptPackedPlayMode"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptPackedPlayMode' )
  var i985 = data
  i984.instanceProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i985[0], i984.instanceProviderType)
  i984.sceneProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i985[1], i984.sceneProviderType)
  return i984
}

Deserializers["UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptPackedMode"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptPackedMode' )
  var i987 = data
  i986.instanceProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i987[0], i986.instanceProviderType)
  i986.sceneProviderType = request.d('UnityEngine.ResourceManagement.Util.SerializedType', i987[1], i986.sceneProviderType)
  return i986
}

Deserializers["UnityEditor.AddressableAssets.AddressableAssetSettingsDefaultObject"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEditor.AddressableAssets.AddressableAssetSettingsDefaultObject' )
  var i989 = data
  i988.m_AddressableAssetSettingsGuid = i989[0]
  return i988
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TMP_Settings' )
  var i991 = data
  i990.m_enableWordWrapping = !!i991[0]
  i990.m_enableKerning = !!i991[1]
  i990.m_enableExtraPadding = !!i991[2]
  i990.m_enableTintAllSprites = !!i991[3]
  i990.m_enableParseEscapeCharacters = !!i991[4]
  i990.m_EnableRaycastTarget = !!i991[5]
  i990.m_GetFontFeaturesAtRuntime = !!i991[6]
  i990.m_missingGlyphCharacter = i991[7]
  i990.m_warningsDisabled = !!i991[8]
  request.r(i991[9], i991[10], 0, i990, 'm_defaultFontAsset')
  i990.m_defaultFontAssetPath = i991[11]
  i990.m_defaultFontSize = i991[12]
  i990.m_defaultAutoSizeMinRatio = i991[13]
  i990.m_defaultAutoSizeMaxRatio = i991[14]
  i990.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i991[15], i991[16] )
  i990.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i991[17], i991[18] )
  i990.m_autoSizeTextContainer = !!i991[19]
  i990.m_IsTextObjectScaleStatic = !!i991[20]
  var i993 = i991[21]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 1, i992, '')
  }
  i990.m_fallbackFontAssets = i992
  i990.m_matchMaterialPreset = !!i991[22]
  request.r(i991[23], i991[24], 0, i990, 'm_defaultSpriteAsset')
  i990.m_defaultSpriteAssetPath = i991[25]
  i990.m_enableEmojiSupport = !!i991[26]
  i990.m_MissingCharacterSpriteUnicode = i991[27]
  i990.m_defaultColorGradientPresetsPath = i991[28]
  request.r(i991[29], i991[30], 0, i990, 'm_defaultStyleSheet')
  i990.m_StyleSheetsResourcePath = i991[31]
  request.r(i991[32], i991[33], 0, i990, 'm_leadingCharacters')
  request.r(i991[34], i991[35], 0, i990, 'm_followingCharacters')
  i990.m_UseModernHangulLineBreakingRules = !!i991[36]
  return i990
}

Deserializers["Project.Scripts.Game.Constants.CustomPalette"] = function (request, data, root) {
  var i996 = root || request.c( 'Project.Scripts.Game.Constants.CustomPalette' )
  var i997 = data
  var i999 = i997[0]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Project.Scripts.Game.Constants.ColorEntry', i999[i + 0]) );
  }
  i996.colors = i998
  return i996
}

Deserializers["Project.Scripts.Game.Constants.ColorEntry"] = function (request, data, root) {
  var i1002 = root || request.c( 'Project.Scripts.Game.Constants.ColorEntry' )
  var i1003 = data
  i1002.Name = i1003[0]
  i1002.Color = new pc.Color(i1003[1], i1003[2], i1003[3], i1003[4])
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1007[i + 0]) );
  }
  i1004.files = i1006
  i1004.componentToPrefabIds = i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1011 = data
  i1010.path = i1011[0]
  request.r(i1011[1], i1011[2], 0, i1010, 'unityObject')
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1015[i + 0]) );
  }
  i1012.scriptsExecutionOrder = i1014
  var i1017 = i1013[1]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1017[i + 0]) );
  }
  i1012.sortingLayers = i1016
  var i1019 = i1013[2]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1019[i + 0]) );
  }
  i1012.cullingLayers = i1018
  i1012.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1013[3], i1012.timeSettings)
  i1012.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1013[4], i1012.physicsSettings)
  i1012.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1013[5], i1012.physics2DSettings)
  i1012.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1013[6], i1012.qualitySettings)
  i1012.enableRealtimeShadows = !!i1013[7]
  i1012.enableAutoInstancing = !!i1013[8]
  i1012.enableStaticBatching = !!i1013[9]
  i1012.enableDynamicBatching = !!i1013[10]
  i1012.usePreservativeDynamicBatching = !!i1013[11]
  i1012.lightmapEncodingQuality = i1013[12]
  i1012.desiredColorSpace = i1013[13]
  var i1021 = i1013[14]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( i1021[i + 0] );
  }
  i1012.allTags = i1020
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.value = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1029 = data
  i1028.id = i1029[0]
  i1028.name = i1029[1]
  i1028.value = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1033 = data
  i1032.id = i1033[0]
  i1032.name = i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1035 = data
  i1034.fixedDeltaTime = i1035[0]
  i1034.maximumDeltaTime = i1035[1]
  i1034.timeScale = i1035[2]
  i1034.maximumParticleTimestep = i1035[3]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1037 = data
  i1036.gravity = new pc.Vec3( i1037[0], i1037[1], i1037[2] )
  i1036.defaultSolverIterations = i1037[3]
  i1036.bounceThreshold = i1037[4]
  i1036.autoSyncTransforms = !!i1037[5]
  i1036.autoSimulation = !!i1037[6]
  var i1039 = i1037[7]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1039[i + 0]) );
  }
  i1036.collisionMatrix = i1038
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1043 = data
  i1042.enabled = !!i1043[0]
  i1042.layerId = i1043[1]
  i1042.otherLayerId = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'material')
  i1044.gravity = new pc.Vec2( i1045[2], i1045[3] )
  i1044.positionIterations = i1045[4]
  i1044.velocityIterations = i1045[5]
  i1044.velocityThreshold = i1045[6]
  i1044.maxLinearCorrection = i1045[7]
  i1044.maxAngularCorrection = i1045[8]
  i1044.maxTranslationSpeed = i1045[9]
  i1044.maxRotationSpeed = i1045[10]
  i1044.baumgarteScale = i1045[11]
  i1044.baumgarteTOIScale = i1045[12]
  i1044.timeToSleep = i1045[13]
  i1044.linearSleepTolerance = i1045[14]
  i1044.angularSleepTolerance = i1045[15]
  i1044.defaultContactOffset = i1045[16]
  i1044.autoSimulation = !!i1045[17]
  i1044.queriesHitTriggers = !!i1045[18]
  i1044.queriesStartInColliders = !!i1045[19]
  i1044.callbacksOnDisable = !!i1045[20]
  i1044.reuseCollisionCallbacks = !!i1045[21]
  i1044.autoSyncTransforms = !!i1045[22]
  var i1047 = i1045[23]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1047[i + 0]) );
  }
  i1044.collisionMatrix = i1046
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1051 = data
  i1050.enabled = !!i1051[0]
  i1050.layerId = i1051[1]
  i1050.otherLayerId = i1051[2]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1055[i + 0]) );
  }
  i1052.qualityLevels = i1054
  var i1057 = i1053[1]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1052.names = i1056
  i1052.shadows = i1053[2]
  i1052.anisotropicFiltering = i1053[3]
  i1052.antiAliasing = i1053[4]
  i1052.lodBias = i1053[5]
  i1052.shadowCascades = i1053[6]
  i1052.shadowDistance = i1053[7]
  i1052.shadowmaskMode = i1053[8]
  i1052.shadowProjection = i1053[9]
  i1052.shadowResolution = i1053[10]
  i1052.softParticles = !!i1053[11]
  i1052.softVegetation = !!i1053[12]
  i1052.activeColorSpace = i1053[13]
  i1052.desiredColorSpace = i1053[14]
  i1052.masterTextureLimit = i1053[15]
  i1052.maxQueuedFrames = i1053[16]
  i1052.particleRaycastBudget = i1053[17]
  i1052.pixelLightCount = i1053[18]
  i1052.realtimeReflectionProbes = !!i1053[19]
  i1052.shadowCascade2Split = i1053[20]
  i1052.shadowCascade4Split = new pc.Vec3( i1053[21], i1053[22], i1053[23] )
  i1052.streamingMipmapsActive = !!i1053[24]
  i1052.vSyncCount = i1053[25]
  i1052.asyncUploadBufferSize = i1053[26]
  i1052.asyncUploadTimeSlice = i1053[27]
  i1052.billboardsFaceCameraPosition = !!i1053[28]
  i1052.shadowNearPlaneOffset = i1053[29]
  i1052.streamingMipmapsMemoryBudget = i1053[30]
  i1052.maximumLODLevel = i1053[31]
  i1052.streamingMipmapsAddAllCameras = !!i1053[32]
  i1052.streamingMipmapsMaxLevelReduction = i1053[33]
  i1052.streamingMipmapsRenderersPerFrame = i1053[34]
  i1052.resolutionScalingFixedDPIFactor = i1053[35]
  i1052.streamingMipmapsMaxFileIORequests = i1053[36]
  i1052.currentQualityLevel = i1053[37]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1063 = data
  i1062.weight = i1063[0]
  i1062.vertices = i1063[1]
  i1062.normals = i1063[2]
  i1062.tangents = i1063[3]
  return i1062
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'm_ObjectArgument')
  i1064.m_ObjectArgumentAssemblyTypeName = i1065[2]
  i1064.m_IntArgument = i1065[3]
  i1064.m_FloatArgument = i1065[4]
  i1064.m_StringArgument = i1065[5]
  i1064.m_BoolArgument = !!i1065[6]
  return i1064
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[17],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[17],"94":[3],"95":[96],"97":[96],"31":[30],"98":[35],"99":[35],"100":[37],"16":[14],"101":[102],"103":[30],"104":[30],"33":[31],"35":[34,30],"105":[30],"32":[31],"106":[30],"107":[30],"108":[30],"109":[30],"110":[30],"111":[30],"112":[30],"113":[30],"114":[30],"115":[34,30],"116":[30],"117":[30],"118":[30],"119":[30],"37":[34,30],"120":[30],"121":[40],"122":[40],"41":[40],"123":[40],"124":[17],"20":[17],"125":[102],"126":[127],"128":[129],"130":[40],"131":[31],"132":[30],"133":[3,30],"129":[30,34],"134":[30],"135":[34,30],"136":[3],"137":[34,30],"138":[30],"139":[102]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","Project.Scripts.HexCore.HexCell","UnityEngine.ParticleSystem","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider","UnityEngine.ParticleSystemRenderer","Project.Scripts.HexCore.HexStack","Project.Scripts.HexCore.Hex","Project.Scripts.InputSystem.DragHandler","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","Project.Scripts.HexCore.HexGrid","Project.Scripts.Game.EntryPoint","Project.Scripts.Game.EndGame","Project.Scripts.HexCore.ChainReactionOfHex","Project.Scripts.UI.TutorialPointer","Project.Scripts.UI.TimerView","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEditor.AddressableAssets.Settings.AddressableAssetSettings","UnityEditor.AddressableAssets.Settings.AddressableAssetGroup","UnityEditor.AddressableAssets.Settings.AddressableAssetGroupTemplate","UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptFastMode","UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptVirtualMode","UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptPackedPlayMode","UnityEditor.AddressableAssets.Build.DataBuilders.BuildScriptPackedMode","UnityEditor.AddressableAssets.Settings.GroupSchemas.BundledAssetGroupSchema","UnityEditor.AddressableAssets.Settings.GroupSchemas.ContentUpdateGroupSchema","UnityEditor.AddressableAssets.Settings.GroupSchemas.PlayerDataGroupSchema","UnityEditor.AddressableAssets.AddressableAssetSettingsDefaultObject","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","Project.Scripts.Game.Constants.CustomPalette","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","DragMe","ScrollDetailTexture","ShowSliderValue","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.ScriptMachine","KeyFieldUnSelect","UnityEngine.UI.Selectable","Gentleland.StemapunkUI.DemoAndExample.CharacterStat","TMPro.TextMeshProUGUI","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "SecondProject";

Deserializers.lunaInitializationTime = "05/05/2026 07:49:44";

Deserializers.lunaDaysRunning = "7.2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1834";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3329";

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

Deserializers.buildID = "59a9b795-6338-408a-a7bc-08505f83c903";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["Cysharp","Threading","Tasks","PlayerLoopHelper","Init"],["Reflex","Injectors","UnityInjector","AfterAssembliesLoaded"]],[],[["Reflex","Configuration","ReflexSettings","InitializeReflex"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["UnityEngine","ResourceManagement","ResourceProviders","AssetBundleProvider","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

