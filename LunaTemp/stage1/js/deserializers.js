var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointSpring' )
  var i527 = data
  i526.spring = i527[0]
  i526.damper = i527[1]
  i526.targetPosition = i527[2]
  return i526
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointMotor' )
  var i529 = data
  i528.m_TargetVelocity = i529[0]
  i528.m_Force = i529[1]
  i528.m_FreeSpin = i529[2]
  return i528
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointLimits' )
  var i531 = data
  i530.m_Min = i531[0]
  i530.m_Max = i531[1]
  i530.m_Bounciness = i531[2]
  i530.m_BounceMinVelocity = i531[3]
  i530.m_ContactDistance = i531[4]
  i530.minBounce = i531[5]
  i530.maxBounce = i531[6]
  return i530
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointDrive' )
  var i533 = data
  i532.m_PositionSpring = i533[0]
  i532.m_PositionDamper = i533[1]
  i532.m_MaximumForce = i533[2]
  i532.m_UseAcceleration = i533[3]
  return i532
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i535 = data
  i534.m_Spring = i535[0]
  i534.m_Damper = i535[1]
  return i534
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i537 = data
  i536.m_Limit = i537[0]
  i536.m_Bounciness = i537[1]
  i536.m_ContactDistance = i537[2]
  return i536
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i539 = data
  i538.m_ExtremumSlip = i539[0]
  i538.m_ExtremumValue = i539[1]
  i538.m_AsymptoteSlip = i539[2]
  i538.m_AsymptoteValue = i539[3]
  i538.m_Stiffness = i539[4]
  return i538
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i541 = data
  i540.m_LowerAngle = i541[0]
  i540.m_UpperAngle = i541[1]
  return i540
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i543 = data
  i542.m_MotorSpeed = i543[0]
  i542.m_MaximumMotorTorque = i543[1]
  return i542
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i545 = data
  i544.m_DampingRatio = i545[0]
  i544.m_Frequency = i545[1]
  i544.m_Angle = i545[2]
  return i544
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i547 = data
  i546.m_LowerTranslation = i547[0]
  i546.m_UpperTranslation = i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i549 = data
  i548.position = new pc.Vec3( i549[0], i549[1], i549[2] )
  i548.scale = new pc.Vec3( i549[3], i549[4], i549[5] )
  i548.rotation = new pc.Quat(i549[6], i549[7], i549[8], i549[9])
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'sharedMesh')
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'additionalVertexStreams')
  i552.enabled = !!i553[2]
  request.r(i553[3], i553[4], 0, i552, 'sharedMaterial')
  var i555 = i553[5]
  var i554 = []
  for(var i = 0; i < i555.length; i += 2) {
  request.r(i555[i + 0], i555[i + 1], 2, i554, '')
  }
  i552.sharedMaterials = i554
  i552.receiveShadows = !!i553[6]
  i552.shadowCastingMode = i553[7]
  i552.sortingLayerID = i553[8]
  i552.sortingOrder = i553[9]
  i552.lightmapIndex = i553[10]
  i552.lightmapSceneIndex = i553[11]
  i552.lightmapScaleOffset = new pc.Vec4( i553[12], i553[13], i553[14], i553[15] )
  i552.lightProbeUsage = i553[16]
  i552.reflectionProbeUsage = i553[17]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i559 = data
  i558.name = i559[0]
  i558.tagId = i559[1]
  i558.enabled = !!i559[2]
  i558.isStatic = !!i559[3]
  i558.layer = i559[4]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i561 = data
  i560.name = i561[0]
  i560.halfPrecision = !!i561[1]
  i560.useSimplification = !!i561[2]
  i560.useUInt32IndexFormat = !!i561[3]
  i560.vertexCount = i561[4]
  i560.aabb = i561[5]
  var i563 = i561[6]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( !!i563[i + 0] );
  }
  i560.streams = i562
  i560.vertices = i561[7]
  var i565 = i561[8]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i565[i + 0]) );
  }
  i560.subMeshes = i564
  var i567 = i561[9]
  var i566 = []
  for(var i = 0; i < i567.length; i += 16) {
    i566.push( new pc.Mat4().setData(i567[i + 0], i567[i + 1], i567[i + 2], i567[i + 3],  i567[i + 4], i567[i + 5], i567[i + 6], i567[i + 7],  i567[i + 8], i567[i + 9], i567[i + 10], i567[i + 11],  i567[i + 12], i567[i + 13], i567[i + 14], i567[i + 15]) );
  }
  i560.bindposes = i566
  var i569 = i561[10]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i569[i + 0]) );
  }
  i560.blendShapes = i568
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i575 = data
  i574.triangles = i575[0]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i581 = data
  i580.name = i581[0]
  var i583 = i581[1]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i583[i + 0]) );
  }
  i580.frames = i582
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i584 = root || new pc.UnityMaterial()
  var i585 = data
  i584.name = i585[0]
  request.r(i585[1], i585[2], 0, i584, 'shader')
  i584.renderQueue = i585[3]
  i584.enableInstancing = !!i585[4]
  var i587 = i585[5]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i587[i + 0]) );
  }
  i584.floatParameters = i586
  var i589 = i585[6]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i589[i + 0]) );
  }
  i584.colorParameters = i588
  var i591 = i585[7]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i591[i + 0]) );
  }
  i584.vectorParameters = i590
  var i593 = i585[8]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i593[i + 0]) );
  }
  i584.textureParameters = i592
  var i595 = i585[9]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i595[i + 0]) );
  }
  i584.materialFlags = i594
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i599 = data
  i598.name = i599[0]
  i598.value = i599[1]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i603 = data
  i602.name = i603[0]
  i602.value = new pc.Color(i603[1], i603[2], i603[3], i603[4])
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i607 = data
  i606.name = i607[0]
  i606.value = new pc.Vec4( i607[1], i607[2], i607[3], i607[4] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i611 = data
  i610.name = i611[0]
  request.r(i611[1], i611[2], 0, i610, 'value')
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i615 = data
  i614.name = i615[0]
  i614.enabled = !!i615[1]
  return i614
}

Deserializers["Project.Scripts.HexCore.HexCell"] = function (request, data, root) {
  var i616 = root || request.c( 'Project.Scripts.HexCore.HexCell' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, '_highlightMaterial')
  request.r(i617[2], i617[3], 0, i616, '_defaultMaterial')
  request.r(i617[4], i617[5], 0, i616, '_meshRenderer')
  request.r(i617[6], i617[7], 0, i616, '_effect')
  request.r(i617[8], i617[9], 0, i616, '_audioSource')
  request.r(i617[10], i617[11], 0, i616, '_destroyClip')
  i616.<IsEmpty>k__BackingField = !!i617[12]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i619 = data
  i618.center = new pc.Vec3( i619[0], i619[1], i619[2] )
  i618.size = new pc.Vec3( i619[3], i619[4], i619[5] )
  i618.enabled = !!i619[6]
  i618.isTrigger = !!i619[7]
  request.r(i619[8], i619[9], 0, i618, 'material')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'clip')
  request.r(i621[2], i621[3], 0, i620, 'outputAudioMixerGroup')
  i620.playOnAwake = !!i621[4]
  i620.loop = !!i621[5]
  i620.time = i621[6]
  i620.volume = i621[7]
  i620.pitch = i621[8]
  i620.enabled = !!i621[9]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i623 = data
  i622.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i623[0], i622.main)
  i622.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i623[1], i622.colorBySpeed)
  i622.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i623[2], i622.colorOverLifetime)
  i622.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i623[3], i622.emission)
  i622.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i623[4], i622.rotationBySpeed)
  i622.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i623[5], i622.rotationOverLifetime)
  i622.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i623[6], i622.shape)
  i622.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i623[7], i622.sizeBySpeed)
  i622.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i623[8], i622.sizeOverLifetime)
  i622.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i623[9], i622.textureSheetAnimation)
  i622.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i623[10], i622.velocityOverLifetime)
  i622.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i623[11], i622.noise)
  i622.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i623[12], i622.inheritVelocity)
  i622.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i623[13], i622.forceOverLifetime)
  i622.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i623[14], i622.limitVelocityOverLifetime)
  i622.useAutoRandomSeed = !!i623[15]
  i622.randomSeed = i623[16]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemMain()
  var i625 = data
  i624.duration = i625[0]
  i624.loop = !!i625[1]
  i624.prewarm = !!i625[2]
  i624.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[3], i624.startDelay)
  i624.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[4], i624.startLifetime)
  i624.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[5], i624.startSpeed)
  i624.startSize3D = !!i625[6]
  i624.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[7], i624.startSizeX)
  i624.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[8], i624.startSizeY)
  i624.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[9], i624.startSizeZ)
  i624.startRotation3D = !!i625[10]
  i624.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[11], i624.startRotationX)
  i624.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[12], i624.startRotationY)
  i624.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[13], i624.startRotationZ)
  i624.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i625[14], i624.startColor)
  i624.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[15], i624.gravityModifier)
  i624.simulationSpace = i625[16]
  request.r(i625[17], i625[18], 0, i624, 'customSimulationSpace')
  i624.simulationSpeed = i625[19]
  i624.useUnscaledTime = !!i625[20]
  i624.scalingMode = i625[21]
  i624.playOnAwake = !!i625[22]
  i624.maxParticles = i625[23]
  i624.emitterVelocityMode = i625[24]
  i624.stopAction = i625[25]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i626 = root || new pc.MinMaxCurve()
  var i627 = data
  i626.mode = i627[0]
  i626.curveMin = new pc.AnimationCurve( { keys_flow: i627[1] } )
  i626.curveMax = new pc.AnimationCurve( { keys_flow: i627[2] } )
  i626.curveMultiplier = i627[3]
  i626.constantMin = i627[4]
  i626.constantMax = i627[5]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i628 = root || new pc.MinMaxGradient()
  var i629 = data
  i628.mode = i629[0]
  i628.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i629[1], i628.gradientMin)
  i628.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i629[2], i628.gradientMax)
  i628.colorMin = new pc.Color(i629[3], i629[4], i629[5], i629[6])
  i628.colorMax = new pc.Color(i629[7], i629[8], i629[9], i629[10])
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i631 = data
  i630.mode = i631[0]
  var i633 = i631[1]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i633[i + 0]) );
  }
  i630.colorKeys = i632
  var i635 = i631[2]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i635[i + 0]) );
  }
  i630.alphaKeys = i634
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemColorBySpeed()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i637[1], i636.color)
  i636.range = new pc.Vec2( i637[2], i637[3] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i641 = data
  i640.color = new pc.Color(i641[0], i641[1], i641[2], i641[3])
  i640.time = i641[4]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i645 = data
  i644.alpha = i645[0]
  i644.time = i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemColorOverLifetime()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i647[1], i646.color)
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemEmitter()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[1], i648.rateOverTime)
  i648.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.rateOverDistance)
  var i651 = i649[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i651[i + 0]) );
  }
  i648.bursts = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemBurst()
  var i655 = data
  i654.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[0], i654.count)
  i654.cycleCount = i655[1]
  i654.minCount = i655[2]
  i654.maxCount = i655[3]
  i654.repeatInterval = i655[4]
  i654.time = i655[5]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemRotationBySpeed()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.x)
  i656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.y)
  i656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.z)
  i656.separateAxes = !!i657[4]
  i656.range = new pc.Vec2( i657[5], i657[6] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemRotationOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.x)
  i658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.y)
  i658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.z)
  i658.separateAxes = !!i659[4]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemShape()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.shapeType = i661[1]
  i660.randomDirectionAmount = i661[2]
  i660.sphericalDirectionAmount = i661[3]
  i660.randomPositionAmount = i661[4]
  i660.alignToDirection = !!i661[5]
  i660.radius = i661[6]
  i660.radiusMode = i661[7]
  i660.radiusSpread = i661[8]
  i660.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[9], i660.radiusSpeed)
  i660.radiusThickness = i661[10]
  i660.angle = i661[11]
  i660.length = i661[12]
  i660.boxThickness = new pc.Vec3( i661[13], i661[14], i661[15] )
  i660.meshShapeType = i661[16]
  request.r(i661[17], i661[18], 0, i660, 'mesh')
  request.r(i661[19], i661[20], 0, i660, 'meshRenderer')
  request.r(i661[21], i661[22], 0, i660, 'skinnedMeshRenderer')
  i660.useMeshMaterialIndex = !!i661[23]
  i660.meshMaterialIndex = i661[24]
  i660.useMeshColors = !!i661[25]
  i660.normalOffset = i661[26]
  i660.arc = i661[27]
  i660.arcMode = i661[28]
  i660.arcSpread = i661[29]
  i660.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[30], i660.arcSpeed)
  i660.donutRadius = i661[31]
  i660.position = new pc.Vec3( i661[32], i661[33], i661[34] )
  i660.rotation = new pc.Vec3( i661[35], i661[36], i661[37] )
  i660.scale = new pc.Vec3( i661[38], i661[39], i661[40] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemSizeBySpeed()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.x)
  i662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.y)
  i662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.z)
  i662.separateAxes = !!i663[4]
  i662.range = new pc.Vec2( i663[5], i663[6] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemSizeOverLifetime()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.x)
  i664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.y)
  i664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.z)
  i664.separateAxes = !!i665[4]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.mode = i667[1]
  i666.animation = i667[2]
  i666.numTilesX = i667[3]
  i666.numTilesY = i667[4]
  i666.useRandomRow = !!i667[5]
  i666.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[6], i666.frameOverTime)
  i666.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[7], i666.startFrame)
  i666.cycleCount = i667[8]
  i666.rowIndex = i667[9]
  i666.flipU = i667[10]
  i666.flipV = i667[11]
  i666.spriteCount = i667[12]
  var i669 = i667[13]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sprites = i668
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[4], i672.radial)
  i672.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[5], i672.speedModifier)
  i672.space = i673[6]
  i672.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[7], i672.orbitalX)
  i672.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[8], i672.orbitalY)
  i672.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[9], i672.orbitalZ)
  i672.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[10], i672.orbitalOffsetX)
  i672.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[11], i672.orbitalOffsetY)
  i672.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[12], i672.orbitalOffsetZ)
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemNoise()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.separateAxes = !!i675[1]
  i674.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.strengthX)
  i674.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.strengthY)
  i674.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[4], i674.strengthZ)
  i674.frequency = i675[5]
  i674.damping = !!i675[6]
  i674.octaveCount = i675[7]
  i674.octaveMultiplier = i675[8]
  i674.octaveScale = i675[9]
  i674.quality = i675[10]
  i674.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[11], i674.scrollSpeed)
  i674.scrollSpeedMultiplier = i675[12]
  i674.remapEnabled = !!i675[13]
  i674.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[14], i674.remapX)
  i674.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[15], i674.remapY)
  i674.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[16], i674.remapZ)
  i674.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[17], i674.positionAmount)
  i674.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[18], i674.rotationAmount)
  i674.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[19], i674.sizeAmount)
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemInheritVelocity()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.mode = i677[1]
  i676.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.curve)
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemForceOverLifetime()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.x)
  i678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.y)
  i678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.z)
  i678.space = i679[4]
  i678.randomized = !!i679[5]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.limit)
  i680.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.limitX)
  i680.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.limitY)
  i680.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[4], i680.limitZ)
  i680.dampen = i681[5]
  i680.separateAxes = !!i681[6]
  i680.space = i681[7]
  i680.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[8], i680.drag)
  i680.multiplyDragByParticleSize = !!i681[9]
  i680.multiplyDragByParticleVelocity = !!i681[10]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'mesh')
  i682.meshCount = i683[2]
  i682.activeVertexStreamsCount = i683[3]
  i682.alignment = i683[4]
  i682.renderMode = i683[5]
  i682.sortMode = i683[6]
  i682.lengthScale = i683[7]
  i682.velocityScale = i683[8]
  i682.cameraVelocityScale = i683[9]
  i682.normalDirection = i683[10]
  i682.sortingFudge = i683[11]
  i682.minParticleSize = i683[12]
  i682.maxParticleSize = i683[13]
  i682.pivot = new pc.Vec3( i683[14], i683[15], i683[16] )
  request.r(i683[17], i683[18], 0, i682, 'trailMaterial')
  i682.applyActiveColorSpace = !!i683[19]
  i682.enabled = !!i683[20]
  request.r(i683[21], i683[22], 0, i682, 'sharedMaterial')
  var i685 = i683[23]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.sharedMaterials = i684
  i682.receiveShadows = !!i683[24]
  i682.shadowCastingMode = i683[25]
  i682.sortingLayerID = i683[26]
  i682.sortingOrder = i683[27]
  i682.lightmapIndex = i683[28]
  i682.lightmapSceneIndex = i683[29]
  i682.lightmapScaleOffset = new pc.Vec4( i683[30], i683[31], i683[32], i683[33] )
  i682.lightProbeUsage = i683[34]
  i682.reflectionProbeUsage = i683[35]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i687 = data
  i686.name = i687[0]
  i686.width = i687[1]
  i686.height = i687[2]
  i686.mipmapCount = i687[3]
  i686.anisoLevel = i687[4]
  i686.filterMode = i687[5]
  i686.hdr = !!i687[6]
  i686.format = i687[7]
  i686.wrapMode = i687[8]
  i686.alphaIsTransparency = !!i687[9]
  i686.alphaSource = i687[10]
  i686.graphicsFormat = i687[11]
  i686.sRGBTexture = !!i687[12]
  i686.desiredColorSpace = i687[13]
  i686.wrapU = i687[14]
  i686.wrapV = i687[15]
  return i686
}

Deserializers["Project.Scripts.HexCore.HexStack"] = function (request, data, root) {
  var i688 = root || request.c( 'Project.Scripts.HexCore.HexStack' )
  var i689 = data
  var i691 = i689[0]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688._possibleColors = i690
  i688._minHexagons = i689[1]
  i688._maxHexagons = i689[2]
  i688._isRandom = !!i689[3]
  i688._noRandomCount = i689[4]
  i688._isTwoColors = !!i689[5]
  request.r(i689[6], i689[7], 0, i688, '_dragHandler')
  return i688
}

Deserializers["Project.Scripts.HexCore.Hex"] = function (request, data, root) {
  var i694 = root || request.c( 'Project.Scripts.HexCore.Hex' )
  var i695 = data
  i694.<HexColor>k__BackingField = i695[0]
  request.r(i695[1], i695[2], 0, i694, '<AudioSource>k__BackingField')
  request.r(i695[3], i695[4], 0, i694, '<MoveClip>k__BackingField')
  request.r(i695[5], i695[6], 0, i694, '<DestroyClip>k__BackingField')
  return i694
}

Deserializers["Project.Scripts.InputSystem.DragHandler"] = function (request, data, root) {
  var i696 = root || request.c( 'Project.Scripts.InputSystem.DragHandler' )
  var i697 = data
  i696._liftHeight = i697[0]
  i696._returnDuration = i697[1]
  request.r(i697[2], i697[3], 0, i696, '_audioSource')
  request.r(i697[4], i697[5], 0, i696, '_pickupClip')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i699 = data
  i698.name = i699[0]
  i698.atlasId = i699[1]
  i698.mipmapCount = i699[2]
  i698.hdr = !!i699[3]
  i698.size = i699[4]
  i698.anisoLevel = i699[5]
  i698.filterMode = i699[6]
  var i701 = i699[7]
  var i700 = []
  for(var i = 0; i < i701.length; i += 4) {
    i700.push( UnityEngine.Rect.MinMaxRect(i701[i + 0], i701[i + 1], i701[i + 2], i701[i + 3]) );
  }
  i698.rects = i700
  i698.wrapU = i699[8]
  i698.wrapV = i699[9]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i705 = data
  i704.name = i705[0]
  i704.index = i705[1]
  i704.startup = !!i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i707 = data
  i706.aspect = i707[0]
  i706.orthographic = !!i707[1]
  i706.orthographicSize = i707[2]
  i706.backgroundColor = new pc.Color(i707[3], i707[4], i707[5], i707[6])
  i706.nearClipPlane = i707[7]
  i706.farClipPlane = i707[8]
  i706.fieldOfView = i707[9]
  i706.depth = i707[10]
  i706.clearFlags = i707[11]
  i706.cullingMask = i707[12]
  i706.rect = i707[13]
  request.r(i707[14], i707[15], 0, i706, 'targetTexture')
  i706.usePhysicalProperties = !!i707[16]
  i706.focalLength = i707[17]
  i706.sensorSize = new pc.Vec2( i707[18], i707[19] )
  i706.lensShift = new pc.Vec2( i707[20], i707[21] )
  i706.gateFit = i707[22]
  i706.commandBufferCount = i707[23]
  i706.cameraType = i707[24]
  i706.enabled = !!i707[25]
  return i706
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i709 = data
  i708.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i709[0] )
  i708.m_MaxRayIntersections = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i711 = data
  i710.type = i711[0]
  i710.color = new pc.Color(i711[1], i711[2], i711[3], i711[4])
  i710.cullingMask = i711[5]
  i710.intensity = i711[6]
  i710.range = i711[7]
  i710.spotAngle = i711[8]
  i710.shadows = i711[9]
  i710.shadowNormalBias = i711[10]
  i710.shadowBias = i711[11]
  i710.shadowStrength = i711[12]
  i710.shadowResolution = i711[13]
  i710.lightmapBakeType = i711[14]
  i710.renderMode = i711[15]
  request.r(i711[16], i711[17], 0, i710, 'cookie')
  i710.cookieSize = i711[18]
  i710.shadowNearPlane = i711[19]
  i710.occlusionMaskChannel = i711[20]
  i710.isBaked = !!i711[21]
  i710.mixedLightingMode = i711[22]
  i710.enabled = !!i711[23]
  return i710
}

Deserializers["Project.Scripts.HexCore.HexGrid"] = function (request, data, root) {
  var i712 = root || request.c( 'Project.Scripts.HexCore.HexGrid' )
  var i713 = data
  i712._gridRadius = i713[0]
  i712._cellSpacing = i713[1]
  request.r(i713[2], i713[3], 0, i712, '_hexCellPrefab')
  return i712
}

Deserializers["Project.Scripts.Game.EntryPoint"] = function (request, data, root) {
  var i714 = root || request.c( 'Project.Scripts.Game.EntryPoint' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, '_hexGrid')
  var i717 = i715[2]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i714._initialStacks = i716
  request.r(i715[3], i715[4], 0, i714, '_dragHexStackPrefab')
  var i719 = i715[5]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i714._dragHexStackSpawnPoints = i718
  request.r(i715[6], i715[7], 0, i714, '_endGame')
  request.r(i715[8], i715[9], 0, i714, '_chainReactionOfHex')
  request.r(i715[10], i715[11], 0, i714, '_tutorialPointer')
  i714._dragSpawnDuration = i715[12]
  i714._gameDuration = i715[13]
  request.r(i715[14], i715[15], 0, i714, '_timerView')
  return i714
}

Deserializers["Project.Scripts.Game.EndGame"] = function (request, data, root) {
  var i724 = root || request.c( 'Project.Scripts.Game.EndGame' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, '_endGameCanvasGroup')
  request.r(i725[2], i725[3], 0, i724, '_playNowButton')
  request.r(i725[4], i725[5], 0, i724, '_tutorialPointer')
  return i724
}

Deserializers["Project.Scripts.HexCore.ChainReactionOfHex"] = function (request, data, root) {
  var i726 = root || request.c( 'Project.Scripts.HexCore.ChainReactionOfHex' )
  var i727 = data
  i726._moveCurve = new pc.AnimationCurve( { keys_flow: i727[0] } )
  request.r(i727[1], i727[2], 0, i726, '_hexGrid')
  i726._baseMoveDuration = i727[3]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i729 = data
  i728.pivot = new pc.Vec2( i729[0], i729[1] )
  i728.anchorMin = new pc.Vec2( i729[2], i729[3] )
  i728.anchorMax = new pc.Vec2( i729[4], i729[5] )
  i728.sizeDelta = new pc.Vec2( i729[6], i729[7] )
  i728.anchoredPosition3D = new pc.Vec3( i729[8], i729[9], i729[10] )
  i728.rotation = new pc.Quat(i729[11], i729[12], i729[13], i729[14])
  i728.scale = new pc.Vec3( i729[15], i729[16], i729[17] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i731 = data
  i730.planeDistance = i731[0]
  i730.referencePixelsPerUnit = i731[1]
  i730.isFallbackOverlay = !!i731[2]
  i730.renderMode = i731[3]
  i730.renderOrder = i731[4]
  i730.sortingLayerName = i731[5]
  i730.sortingOrder = i731[6]
  i730.scaleFactor = i731[7]
  request.r(i731[8], i731[9], 0, i730, 'worldCamera')
  i730.overrideSorting = !!i731[10]
  i730.pixelPerfect = !!i731[11]
  i730.targetDisplay = i731[12]
  i730.overridePixelPerfect = !!i731[13]
  i730.enabled = !!i731[14]
  return i730
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i733 = data
  i732.m_UiScaleMode = i733[0]
  i732.m_ReferencePixelsPerUnit = i733[1]
  i732.m_ScaleFactor = i733[2]
  i732.m_ReferenceResolution = new pc.Vec2( i733[3], i733[4] )
  i732.m_ScreenMatchMode = i733[5]
  i732.m_MatchWidthOrHeight = i733[6]
  i732.m_PhysicalUnit = i733[7]
  i732.m_FallbackScreenDPI = i733[8]
  i732.m_DefaultSpriteDPI = i733[9]
  i732.m_DynamicPixelsPerUnit = i733[10]
  i732.m_PresetInfoIsWorld = !!i733[11]
  return i732
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i735 = data
  i734.m_IgnoreReversedGraphics = !!i735[0]
  i734.m_BlockingObjects = i735[1]
  i734.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i735[2] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i737 = data
  i736.m_Alpha = i737[0]
  i736.m_Interactable = !!i737[1]
  i736.m_BlocksRaycasts = !!i737[2]
  i736.m_IgnoreParentGroups = !!i737[3]
  i736.enabled = !!i737[4]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i739 = data
  i738.cullTransparentMesh = !!i739[0]
  return i738
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.Image' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_Sprite')
  i740.m_Type = i741[2]
  i740.m_PreserveAspect = !!i741[3]
  i740.m_FillCenter = !!i741[4]
  i740.m_FillMethod = i741[5]
  i740.m_FillAmount = i741[6]
  i740.m_FillClockwise = !!i741[7]
  i740.m_FillOrigin = i741[8]
  i740.m_UseSpriteMesh = !!i741[9]
  i740.m_PixelsPerUnitMultiplier = i741[10]
  request.r(i741[11], i741[12], 0, i740, 'm_Material')
  i740.m_Maskable = !!i741[13]
  i740.m_Color = new pc.Color(i741[14], i741[15], i741[16], i741[17])
  i740.m_RaycastTarget = !!i741[18]
  i740.m_RaycastPadding = new pc.Vec4( i741[19], i741[20], i741[21], i741[22] )
  return i740
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.Button' )
  var i743 = data
  i742.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i743[0], i742.m_OnClick)
  i742.m_Navigation = request.d('UnityEngine.UI.Navigation', i743[1], i742.m_Navigation)
  i742.m_Transition = i743[2]
  i742.m_Colors = request.d('UnityEngine.UI.ColorBlock', i743[3], i742.m_Colors)
  i742.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i743[4], i742.m_SpriteState)
  i742.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i743[5], i742.m_AnimationTriggers)
  i742.m_Interactable = !!i743[6]
  request.r(i743[7], i743[8], 0, i742, 'm_TargetGraphic')
  return i742
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i745 = data
  i744.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i745[0], i744.m_PersistentCalls)
  return i744
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i747 = data
  var i749 = i747[0]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i749.length; i += 1) {
    i748.add(request.d('UnityEngine.Events.PersistentCall', i749[i + 0]));
  }
  i746.m_Calls = i748
  return i746
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_Target')
  i752.m_TargetAssemblyTypeName = i753[2]
  i752.m_MethodName = i753[3]
  i752.m_Mode = i753[4]
  i752.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i753[5], i752.m_Arguments)
  i752.m_CallState = i753[6]
  return i752
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i755 = data
  i754.m_Mode = i755[0]
  i754.m_WrapAround = !!i755[1]
  request.r(i755[2], i755[3], 0, i754, 'm_SelectOnUp')
  request.r(i755[4], i755[5], 0, i754, 'm_SelectOnDown')
  request.r(i755[6], i755[7], 0, i754, 'm_SelectOnLeft')
  request.r(i755[8], i755[9], 0, i754, 'm_SelectOnRight')
  return i754
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i757 = data
  i756.m_NormalColor = new pc.Color(i757[0], i757[1], i757[2], i757[3])
  i756.m_HighlightedColor = new pc.Color(i757[4], i757[5], i757[6], i757[7])
  i756.m_PressedColor = new pc.Color(i757[8], i757[9], i757[10], i757[11])
  i756.m_SelectedColor = new pc.Color(i757[12], i757[13], i757[14], i757[15])
  i756.m_DisabledColor = new pc.Color(i757[16], i757[17], i757[18], i757[19])
  i756.m_ColorMultiplier = i757[20]
  i756.m_FadeDuration = i757[21]
  return i756
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_HighlightedSprite')
  request.r(i759[2], i759[3], 0, i758, 'm_PressedSprite')
  request.r(i759[4], i759[5], 0, i758, 'm_SelectedSprite')
  request.r(i759[6], i759[7], 0, i758, 'm_DisabledSprite')
  return i758
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i761 = data
  i760.m_NormalTrigger = i761[0]
  i760.m_HighlightedTrigger = i761[1]
  i760.m_PressedTrigger = i761[2]
  i760.m_SelectedTrigger = i761[3]
  i760.m_DisabledTrigger = i761[4]
  return i760
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.Text' )
  var i763 = data
  i762.m_FontData = request.d('UnityEngine.UI.FontData', i763[0], i762.m_FontData)
  i762.m_Text = i763[1]
  request.r(i763[2], i763[3], 0, i762, 'm_Material')
  i762.m_Maskable = !!i763[4]
  i762.m_Color = new pc.Color(i763[5], i763[6], i763[7], i763[8])
  i762.m_RaycastTarget = !!i763[9]
  i762.m_RaycastPadding = new pc.Vec4( i763[10], i763[11], i763[12], i763[13] )
  return i762
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.FontData' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_Font')
  i764.m_FontSize = i765[2]
  i764.m_FontStyle = i765[3]
  i764.m_BestFit = !!i765[4]
  i764.m_MinSize = i765[5]
  i764.m_MaxSize = i765[6]
  i764.m_Alignment = i765[7]
  i764.m_AlignByGeometry = !!i765[8]
  i764.m_RichText = !!i765[9]
  i764.m_HorizontalOverflow = i765[10]
  i764.m_VerticalOverflow = i765[11]
  i764.m_LineSpacing = i765[12]
  return i764
}

Deserializers["Project.Scripts.UI.TutorialPointer"] = function (request, data, root) {
  var i766 = root || request.c( 'Project.Scripts.UI.TutorialPointer' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, '_handObject')
  request.r(i767[2], i767[3], 0, i766, '_handRect')
  request.r(i767[4], i767[5], 0, i766, '_parentCanvas')
  request.r(i767[6], i767[7], 0, i766, '_entryPoint')
  i766._idleTimeToShow = i767[8]
  i766._distance = i767[9]
  i766._duration = i767[10]
  return i766
}

Deserializers["Project.Scripts.UI.TimerView"] = function (request, data, root) {
  var i768 = root || request.c( 'Project.Scripts.UI.TimerView' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, '_fillImage')
  return i768
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_FirstSelected')
  i770.m_sendNavigationEvents = !!i771[2]
  i770.m_DragThreshold = i771[3]
  return i770
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i773 = data
  i772.m_HorizontalAxis = i773[0]
  i772.m_VerticalAxis = i773[1]
  i772.m_SubmitButton = i773[2]
  i772.m_CancelButton = i773[3]
  i772.m_InputActionsPerSecond = i773[4]
  i772.m_RepeatDelay = i773[5]
  i772.m_ForceModuleActive = !!i773[6]
  i772.m_SendPointerHoverToParent = !!i773[7]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i775 = data
  i774.ambientIntensity = i775[0]
  i774.reflectionIntensity = i775[1]
  i774.ambientMode = i775[2]
  i774.ambientLight = new pc.Color(i775[3], i775[4], i775[5], i775[6])
  i774.ambientSkyColor = new pc.Color(i775[7], i775[8], i775[9], i775[10])
  i774.ambientGroundColor = new pc.Color(i775[11], i775[12], i775[13], i775[14])
  i774.ambientEquatorColor = new pc.Color(i775[15], i775[16], i775[17], i775[18])
  i774.fogColor = new pc.Color(i775[19], i775[20], i775[21], i775[22])
  i774.fogEndDistance = i775[23]
  i774.fogStartDistance = i775[24]
  i774.fogDensity = i775[25]
  i774.fog = !!i775[26]
  request.r(i775[27], i775[28], 0, i774, 'skybox')
  i774.fogMode = i775[29]
  var i777 = i775[30]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i777[i + 0]) );
  }
  i774.lightmaps = i776
  i774.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i775[31], i774.lightProbes)
  i774.lightmapsMode = i775[32]
  i774.mixedBakeMode = i775[33]
  i774.environmentLightingMode = i775[34]
  i774.ambientProbe = new pc.SphericalHarmonicsL2(i775[35])
  request.r(i775[36], i775[37], 0, i774, 'customReflection')
  request.r(i775[38], i775[39], 0, i774, 'defaultReflection')
  i774.defaultReflectionMode = i775[40]
  i774.defaultReflectionResolution = i775[41]
  i774.sunLightObjectId = i775[42]
  i774.pixelLightCount = i775[43]
  i774.defaultReflectionHDR = !!i775[44]
  i774.hasLightDataAsset = !!i775[45]
  i774.hasManualGenerate = !!i775[46]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'lightmapColor')
  request.r(i781[2], i781[3], 0, i780, 'lightmapDirection')
  request.r(i781[4], i781[5], 0, i780, 'shadowMask')
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i782 = root || new UnityEngine.LightProbes()
  var i783 = data
  return i782
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'panelPrefab')
  var i793 = i791[2]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i793[i + 0]));
  }
  i790.prefabs = i792
  return i790
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i797 = data
  i796.type = i797[0]
  request.r(i797[1], i797[2], 0, i796, 'prefab')
  return i796
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i799 = data
  i798.m_Spacing = i799[0]
  i798.m_ChildForceExpandWidth = !!i799[1]
  i798.m_ChildForceExpandHeight = !!i799[2]
  i798.m_ChildControlWidth = !!i799[3]
  i798.m_ChildControlHeight = !!i799[4]
  i798.m_ChildScaleWidth = !!i799[5]
  i798.m_ChildScaleHeight = !!i799[6]
  i798.m_ReverseArrangement = !!i799[7]
  i798.m_Padding = UnityEngine.RectOffset.FromPaddings(i799[8], i799[9], i799[10], i799[11])
  i798.m_ChildAlignment = i799[12]
  return i798
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i801 = data
  i800.m_HorizontalFit = i801[0]
  i800.m_VerticalFit = i801[1]
  return i800
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'contentHolder')
  return i802
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'nameLabel')
  request.r(i805[2], i805[3], 0, i804, 'scrollRect')
  request.r(i805[4], i805[5], 0, i804, 'viewport')
  request.r(i805[6], i805[7], 0, i804, 'Canvas')
  return i804
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i807 = data
  i806.m_IgnoreLayout = !!i807[0]
  i806.m_MinWidth = i807[1]
  i806.m_MinHeight = i807[2]
  i806.m_PreferredWidth = i807[3]
  i806.m_PreferredHeight = i807[4]
  i806.m_FlexibleWidth = i807[5]
  i806.m_FlexibleHeight = i807[6]
  i806.m_LayoutPriority = i807[7]
  return i806
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_ObjectArgument')
  i808.m_ObjectArgumentAssemblyTypeName = i809[2]
  i808.m_IntArgument = i809[3]
  i808.m_FloatArgument = i809[4]
  i808.m_StringArgument = i809[5]
  i808.m_BoolArgument = !!i809[6]
  return i808
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_Content')
  i810.m_Horizontal = !!i811[2]
  i810.m_Vertical = !!i811[3]
  i810.m_MovementType = i811[4]
  i810.m_Elasticity = i811[5]
  i810.m_Inertia = !!i811[6]
  i810.m_DecelerationRate = i811[7]
  i810.m_ScrollSensitivity = i811[8]
  request.r(i811[9], i811[10], 0, i810, 'm_Viewport')
  request.r(i811[11], i811[12], 0, i810, 'm_HorizontalScrollbar')
  request.r(i811[13], i811[14], 0, i810, 'm_VerticalScrollbar')
  i810.m_HorizontalScrollbarVisibility = i811[15]
  i810.m_VerticalScrollbarVisibility = i811[16]
  i810.m_HorizontalScrollbarSpacing = i811[17]
  i810.m_VerticalScrollbarSpacing = i811[18]
  i810.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i811[19], i810.m_OnValueChanged)
  return i810
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i813 = data
  i812.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i813[0], i812.m_PersistentCalls)
  return i812
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.Mask' )
  var i815 = data
  i814.m_ShowMaskGraphic = !!i815[0]
  return i814
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_HandleRect')
  i816.m_Direction = i817[2]
  i816.m_Value = i817[3]
  i816.m_Size = i817[4]
  i816.m_NumberOfSteps = i817[5]
  i816.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i817[6], i816.m_OnValueChanged)
  i816.m_Navigation = request.d('UnityEngine.UI.Navigation', i817[7], i816.m_Navigation)
  i816.m_Transition = i817[8]
  i816.m_Colors = request.d('UnityEngine.UI.ColorBlock', i817[9], i816.m_Colors)
  i816.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i817[10], i816.m_SpriteState)
  i816.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i817[11], i816.m_AnimationTriggers)
  i816.m_Interactable = !!i817[12]
  request.r(i817[13], i817[14], 0, i816, 'm_TargetGraphic')
  return i816
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i819 = data
  i818.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i819[0], i818.m_PersistentCalls)
  return i818
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i821 = data
  var i823 = i821[0]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i823[i + 0]));
  }
  i820.m_Delegates = i822
  return i820
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i827 = data
  i826.eventID = i827[0]
  i826.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i827[1], i826.callback)
  return i826
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i829 = data
  i828.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i829[0], i828.m_PersistentCalls)
  return i828
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'nameLabel')
  request.r(i831[2], i831[3], 0, i830, 'valueLabel')
  i830.colorDefault = new pc.Color(i831[4], i831[5], i831[6], i831[7])
  i830.colorSelected = new pc.Color(i831[8], i831[9], i831[10], i831[11])
  return i830
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'nameLabel')
  request.r(i833[2], i833[3], 0, i832, 'valueToggle')
  request.r(i833[4], i833[5], 0, i832, 'checkmarkImage')
  i832.colorDefault = new pc.Color(i833[6], i833[7], i833[8], i833[9])
  i832.colorSelected = new pc.Color(i833[10], i833[11], i833[12], i833[13])
  return i832
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i835 = data
  i834.toggleTransition = i835[0]
  request.r(i835[1], i835[2], 0, i834, 'graphic')
  i834.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i835[3], i834.onValueChanged)
  request.r(i835[4], i835[5], 0, i834, 'm_Group')
  i834.m_IsOn = !!i835[6]
  i834.m_Navigation = request.d('UnityEngine.UI.Navigation', i835[7], i834.m_Navigation)
  i834.m_Transition = i835[8]
  i834.m_Colors = request.d('UnityEngine.UI.ColorBlock', i835[9], i834.m_Colors)
  i834.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i835[10], i834.m_SpriteState)
  i834.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i835[11], i834.m_AnimationTriggers)
  i834.m_Interactable = !!i835[12]
  request.r(i835[13], i835[14], 0, i834, 'm_TargetGraphic')
  return i834
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i837 = data
  i836.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i837[0], i836.m_PersistentCalls)
  return i836
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'nameLabel')
  request.r(i839[2], i839[3], 0, i838, 'valueLabel')
  i838.colorDefault = new pc.Color(i839[4], i839[5], i839[6], i839[7])
  i838.colorSelected = new pc.Color(i839[8], i839[9], i839[10], i839[11])
  return i838
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'nameLabel')
  request.r(i841[2], i841[3], 0, i840, 'valueLabel')
  i840.colorDefault = new pc.Color(i841[4], i841[5], i841[6], i841[7])
  i840.colorSelected = new pc.Color(i841[8], i841[9], i841[10], i841[11])
  return i840
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'nameLabel')
  request.r(i843[2], i843[3], 0, i842, 'valueLabel')
  i842.colorDefault = new pc.Color(i843[4], i843[5], i843[6], i843[7])
  i842.colorSelected = new pc.Color(i843[8], i843[9], i843[10], i843[11])
  return i842
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'nextButtonText')
  request.r(i845[2], i845[3], 0, i844, 'previousButtonText')
  request.r(i845[4], i845[5], 0, i844, 'nameLabel')
  request.r(i845[6], i845[7], 0, i844, 'valueLabel')
  i844.colorDefault = new pc.Color(i845[8], i845[9], i845[10], i845[11])
  i844.colorSelected = new pc.Color(i845[12], i845[13], i845[14], i845[15])
  return i844
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'nameLabel')
  i846.colorDefault = new pc.Color(i847[2], i847[3], i847[4], i847[5])
  i846.colorSelected = new pc.Color(i847[6], i847[7], i847[8], i847[9])
  return i846
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'nameLabel')
  request.r(i849[2], i849[3], 0, i848, 'valueToggle')
  i848.colorDefault = new pc.Color(i849[4], i849[5], i849[6], i849[7])
  i848.colorSelected = new pc.Color(i849[8], i849[9], i849[10], i849[11])
  return i848
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'content')
  request.r(i851[2], i851[3], 0, i850, 'arrowOpened')
  request.r(i851[4], i851[5], 0, i850, 'arrowClosed')
  i850.toggleTransition = i851[6]
  request.r(i851[7], i851[8], 0, i850, 'graphic')
  i850.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i851[9], i850.onValueChanged)
  request.r(i851[10], i851[11], 0, i850, 'm_Group')
  i850.m_IsOn = !!i851[12]
  i850.m_Navigation = request.d('UnityEngine.UI.Navigation', i851[13], i850.m_Navigation)
  i850.m_Transition = i851[14]
  i850.m_Colors = request.d('UnityEngine.UI.ColorBlock', i851[15], i850.m_Colors)
  i850.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i851[16], i850.m_SpriteState)
  i850.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i851[17], i850.m_AnimationTriggers)
  i850.m_Interactable = !!i851[18]
  request.r(i851[19], i851[20], 0, i850, 'm_TargetGraphic')
  return i850
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'nameLabel')
  request.r(i853[2], i853[3], 0, i852, 'valueToggle')
  request.r(i853[4], i853[5], 0, i852, 'colorImage')
  request.r(i853[6], i853[7], 0, i852, 'fieldR')
  request.r(i853[8], i853[9], 0, i852, 'fieldG')
  request.r(i853[10], i853[11], 0, i852, 'fieldB')
  request.r(i853[12], i853[13], 0, i852, 'fieldA')
  i852.colorDefault = new pc.Color(i853[14], i853[15], i853[16], i853[17])
  i852.colorSelected = new pc.Color(i853[18], i853[19], i853[20], i853[21])
  return i852
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'nameLabel')
  request.r(i855[2], i855[3], 0, i854, 'valueLabel')
  i854.colorDefault = new pc.Color(i855[4], i855[5], i855[6], i855[7])
  i854.colorSelected = new pc.Color(i855[8], i855[9], i855[10], i855[11])
  return i854
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'nameLabel')
  request.r(i857[2], i857[3], 0, i856, 'valueToggle')
  request.r(i857[4], i857[5], 0, i856, 'fieldX')
  request.r(i857[6], i857[7], 0, i856, 'fieldY')
  i856.colorDefault = new pc.Color(i857[8], i857[9], i857[10], i857[11])
  i856.colorSelected = new pc.Color(i857[12], i857[13], i857[14], i857[15])
  return i856
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'nameLabel')
  request.r(i859[2], i859[3], 0, i858, 'valueToggle')
  request.r(i859[4], i859[5], 0, i858, 'fieldX')
  request.r(i859[6], i859[7], 0, i858, 'fieldY')
  request.r(i859[8], i859[9], 0, i858, 'fieldZ')
  i858.colorDefault = new pc.Color(i859[10], i859[11], i859[12], i859[13])
  i858.colorSelected = new pc.Color(i859[14], i859[15], i859[16], i859[17])
  return i858
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'nameLabel')
  request.r(i861[2], i861[3], 0, i860, 'valueToggle')
  request.r(i861[4], i861[5], 0, i860, 'fieldX')
  request.r(i861[6], i861[7], 0, i860, 'fieldY')
  request.r(i861[8], i861[9], 0, i860, 'fieldZ')
  request.r(i861[10], i861[11], 0, i860, 'fieldW')
  i860.colorDefault = new pc.Color(i861[12], i861[13], i861[14], i861[15])
  i860.colorSelected = new pc.Color(i861[16], i861[17], i861[18], i861[19])
  return i860
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i863 = data
  i862.colorDefault = new pc.Color(i863[0], i863[1], i863[2], i863[3])
  i862.colorSelected = new pc.Color(i863[4], i863[5], i863[6], i863[7])
  return i862
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i865 = data
  i864.m_Spacing = i865[0]
  i864.m_ChildForceExpandWidth = !!i865[1]
  i864.m_ChildForceExpandHeight = !!i865[2]
  i864.m_ChildControlWidth = !!i865[3]
  i864.m_ChildControlHeight = !!i865[4]
  i864.m_ChildScaleWidth = !!i865[5]
  i864.m_ChildScaleHeight = !!i865[6]
  i864.m_ReverseArrangement = !!i865[7]
  i864.m_Padding = UnityEngine.RectOffset.FromPaddings(i865[8], i865[9], i865[10], i865[11])
  i864.m_ChildAlignment = i865[12]
  return i864
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i867 = data
  i866.colorDefault = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  i866.colorSelected = new pc.Color(i867[4], i867[5], i867[6], i867[7])
  return i866
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'nameLabel')
  request.r(i869[2], i869[3], 0, i868, 'header')
  i868.colorDefault = new pc.Color(i869[4], i869[5], i869[6], i869[7])
  i868.colorSelected = new pc.Color(i869[8], i869[9], i869[10], i869[11])
  return i868
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'nameLabel')
  request.r(i871[2], i871[3], 0, i870, 'valueToggle')
  var i873 = i871[4]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 1, i872, '')
  }
  i870.toggles = i872
  i870.colorDefault = new pc.Color(i871[5], i871[6], i871[7], i871[8])
  i870.colorSelected = new pc.Color(i871[9], i871[10], i871[11], i871[12])
  return i870
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'nameLabel')
  request.r(i877[2], i877[3], 0, i876, 'valueToggle')
  request.r(i877[4], i877[5], 0, i876, 'checkmarkImage')
  i876.colorDefault = new pc.Color(i877[6], i877[7], i877[8], i877[9])
  i876.colorSelected = new pc.Color(i877[10], i877[11], i877[12], i877[13])
  return i876
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'nameLabel')
  request.r(i879[2], i879[3], 0, i878, 'valueToggle')
  request.r(i879[4], i879[5], 0, i878, 'checkmarkImage')
  i878.colorDefault = new pc.Color(i879[6], i879[7], i879[8], i879[9])
  i878.colorSelected = new pc.Color(i879[10], i879[11], i879[12], i879[13])
  return i878
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'nextButtonText')
  request.r(i881[2], i881[3], 0, i880, 'previousButtonText')
  request.r(i881[4], i881[5], 0, i880, 'nameLabel')
  request.r(i881[6], i881[7], 0, i880, 'valueLabel')
  i880.colorDefault = new pc.Color(i881[8], i881[9], i881[10], i881[11])
  i880.colorSelected = new pc.Color(i881[12], i881[13], i881[14], i881[15])
  return i880
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'nameLabel')
  request.r(i883[2], i883[3], 0, i882, 'valueToggle')
  i882.colorDefault = new pc.Color(i883[4], i883[5], i883[6], i883[7])
  i882.colorSelected = new pc.Color(i883[8], i883[9], i883[10], i883[11])
  return i882
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'nameLabel')
  i884.colorDefault = new pc.Color(i885[2], i885[3], i885[4], i885[5])
  i884.colorSelected = new pc.Color(i885[6], i885[7], i885[8], i885[9])
  return i884
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'nameLabel')
  request.r(i887[2], i887[3], 0, i886, 'valueLabel')
  request.r(i887[4], i887[5], 0, i886, 'progressBarRect')
  i886.colorDefault = new pc.Color(i887[6], i887[7], i887[8], i887[9])
  i886.colorSelected = new pc.Color(i887[10], i887[11], i887[12], i887[13])
  return i886
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'nameLabel')
  request.r(i889[2], i889[3], 0, i888, 'valueLabel')
  i888.colorDefault = new pc.Color(i889[4], i889[5], i889[6], i889[7])
  i888.colorSelected = new pc.Color(i889[8], i889[9], i889[10], i889[11])
  return i888
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'nameLabel')
  request.r(i891[2], i891[3], 0, i890, 'valueLabel')
  i890.colorDefault = new pc.Color(i891[4], i891[5], i891[6], i891[7])
  i890.colorSelected = new pc.Color(i891[8], i891[9], i891[10], i891[11])
  return i890
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'nextButtonText')
  request.r(i893[2], i893[3], 0, i892, 'previousButtonText')
  request.r(i893[4], i893[5], 0, i892, 'nameLabel')
  request.r(i893[6], i893[7], 0, i892, 'valueLabel')
  i892.colorDefault = new pc.Color(i893[8], i893[9], i893[10], i893[11])
  i892.colorSelected = new pc.Color(i893[12], i893[13], i893[14], i893[15])
  return i892
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'nextButtonText')
  request.r(i895[2], i895[3], 0, i894, 'previousButtonText')
  request.r(i895[4], i895[5], 0, i894, 'nameLabel')
  request.r(i895[6], i895[7], 0, i894, 'valueLabel')
  i894.colorDefault = new pc.Color(i895[8], i895[9], i895[10], i895[11])
  i894.colorSelected = new pc.Color(i895[12], i895[13], i895[14], i895[15])
  return i894
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'panel')
  request.r(i897[2], i897[3], 0, i896, 'valuePrefab')
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i899 = data
  var i901 = i899[0]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i901[i + 0]));
  }
  i898.ShaderCompilationErrors = i900
  i898.name = i899[1]
  i898.guid = i899[2]
  var i903 = i899[3]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i898.shaderDefinedKeywords = i902
  var i905 = i899[4]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i905[i + 0]) );
  }
  i898.passes = i904
  var i907 = i899[5]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i907[i + 0]) );
  }
  i898.usePasses = i906
  var i909 = i899[6]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i909[i + 0]) );
  }
  i898.defaultParameterValues = i908
  request.r(i899[7], i899[8], 0, i898, 'unityFallbackShader')
  i898.readDepth = !!i899[9]
  i898.hasDepthOnlyPass = !!i899[10]
  i898.isCreatedByShaderGraph = !!i899[11]
  i898.disableBatching = !!i899[12]
  i898.compiled = !!i899[13]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i913 = data
  i912.shaderName = i913[0]
  i912.errorMessage = i913[1]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i918 = root || new pc.UnityShaderPass()
  var i919 = data
  i918.id = i919[0]
  i918.subShaderIndex = i919[1]
  i918.name = i919[2]
  i918.passType = i919[3]
  i918.grabPassTextureName = i919[4]
  i918.usePass = !!i919[5]
  i918.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[6], i918.zTest)
  i918.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[7], i918.zWrite)
  i918.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[8], i918.culling)
  i918.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i919[9], i918.blending)
  i918.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i919[10], i918.alphaBlending)
  i918.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[11], i918.colorWriteMask)
  i918.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[12], i918.offsetUnits)
  i918.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[13], i918.offsetFactor)
  i918.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[14], i918.stencilRef)
  i918.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[15], i918.stencilReadMask)
  i918.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i919[16], i918.stencilWriteMask)
  i918.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i919[17], i918.stencilOp)
  i918.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i919[18], i918.stencilOpFront)
  i918.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i919[19], i918.stencilOpBack)
  var i921 = i919[20]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i921[i + 0]) );
  }
  i918.tags = i920
  var i923 = i919[21]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i918.passDefinedKeywords = i922
  var i925 = i919[22]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i925[i + 0]) );
  }
  i918.passDefinedKeywordGroups = i924
  var i927 = i919[23]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i927[i + 0]) );
  }
  i918.variants = i926
  var i929 = i919[24]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i929[i + 0]) );
  }
  i918.excludedVariants = i928
  i918.hasDepthReader = !!i919[25]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i931 = data
  i930.val = i931[0]
  i930.name = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i933 = data
  i932.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[0], i932.src)
  i932.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[1], i932.dst)
  i932.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i933[2], i932.op)
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i935 = data
  i934.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[0], i934.pass)
  i934.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[1], i934.fail)
  i934.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[2], i934.zFail)
  i934.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i935[3], i934.comp)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i939 = data
  i938.name = i939[0]
  i938.value = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i943 = data
  var i945 = i943[0]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i942.keywords = i944
  i942.hasDiscard = !!i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i949 = data
  i948.passId = i949[0]
  i948.subShaderIndex = i949[1]
  var i951 = i949[2]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i948.keywords = i950
  i948.vertexProgram = i949[3]
  i948.fragmentProgram = i949[4]
  i948.exportedForWebGl2 = !!i949[5]
  i948.readDepth = !!i949[6]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'shader')
  i954.pass = i955[2]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i959 = data
  i958.name = i959[0]
  i958.type = i959[1]
  i958.value = new pc.Vec4( i959[2], i959[3], i959[4], i959[5] )
  i958.textureValue = i959[6]
  i958.shaderPropertyFlag = i959[7]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i961 = data
  i960.name = i961[0]
  request.r(i961[1], i961[2], 0, i960, 'texture')
  i960.aabb = i961[3]
  i960.vertices = i961[4]
  i960.triangles = i961[5]
  i960.textureRect = UnityEngine.Rect.MinMaxRect(i961[6], i961[7], i961[8], i961[9])
  i960.packedRect = UnityEngine.Rect.MinMaxRect(i961[10], i961[11], i961[12], i961[13])
  i960.border = new pc.Vec4( i961[14], i961[15], i961[16], i961[17] )
  i960.transparency = i961[18]
  i960.bounds = i961[19]
  i960.pixelsPerUnit = i961[20]
  i960.textureWidth = i961[21]
  i960.textureHeight = i961[22]
  i960.nativeSize = new pc.Vec2( i961[23], i961[24] )
  i960.pivot = new pc.Vec2( i961[25], i961[26] )
  i960.textureRectOffset = new pc.Vec2( i961[27], i961[28] )
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i963 = data
  i962.name = i963[0]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i965 = data
  i964.name = i965[0]
  i964.ascent = i965[1]
  i964.originalLineHeight = i965[2]
  i964.fontSize = i965[3]
  var i967 = i965[4]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i967[i + 0]) );
  }
  i964.characterInfo = i966
  request.r(i965[5], i965[6], 0, i964, 'texture')
  i964.originalFontSize = i965[7]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i971 = data
  i970.index = i971[0]
  i970.advance = i971[1]
  i970.bearing = i971[2]
  i970.glyphWidth = i971[3]
  i970.glyphHeight = i971[4]
  i970.minX = i971[5]
  i970.maxX = i971[6]
  i970.minY = i971[7]
  i970.maxY = i971[8]
  i970.uvBottomLeftX = i971[9]
  i970.uvBottomLeftY = i971[10]
  i970.uvBottomRightX = i971[11]
  i970.uvBottomRightY = i971[12]
  i970.uvTopLeftX = i971[13]
  i970.uvTopLeftY = i971[14]
  i970.uvTopRightX = i971[15]
  i970.uvTopRightY = i971[16]
  return i970
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i973 = data
  i972.useSafeMode = !!i973[0]
  i972.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i973[1], i972.safeModeOptions)
  i972.timeScale = i973[2]
  i972.unscaledTimeScale = i973[3]
  i972.useSmoothDeltaTime = !!i973[4]
  i972.maxSmoothUnscaledTime = i973[5]
  i972.rewindCallbackMode = i973[6]
  i972.showUnityEditorReport = !!i973[7]
  i972.logBehaviour = i973[8]
  i972.drawGizmos = !!i973[9]
  i972.defaultRecyclable = !!i973[10]
  i972.defaultAutoPlay = i973[11]
  i972.defaultUpdateType = i973[12]
  i972.defaultTimeScaleIndependent = !!i973[13]
  i972.defaultEaseType = i973[14]
  i972.defaultEaseOvershootOrAmplitude = i973[15]
  i972.defaultEasePeriod = i973[16]
  i972.defaultAutoKill = !!i973[17]
  i972.defaultLoopType = i973[18]
  i972.debugMode = !!i973[19]
  i972.debugStoreTargetId = !!i973[20]
  i972.showPreviewPanel = !!i973[21]
  i972.storeSettingsLocation = i973[22]
  i972.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i973[23], i972.modules)
  i972.createASMDEF = !!i973[24]
  i972.showPlayingTweens = !!i973[25]
  i972.showPausedTweens = !!i973[26]
  return i972
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i974 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i975 = data
  i974.logBehaviour = i975[0]
  i974.nestedTweenFailureBehaviour = i975[1]
  return i974
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i976 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i977 = data
  i976.showPanel = !!i977[0]
  i976.audioEnabled = !!i977[1]
  i976.physicsEnabled = !!i977[2]
  i976.physics2DEnabled = !!i977[3]
  i976.spriteEnabled = !!i977[4]
  i976.uiEnabled = !!i977[5]
  i976.textMeshProEnabled = !!i977[6]
  i976.tk2DEnabled = !!i977[7]
  i976.deAudioEnabled = !!i977[8]
  i976.deUnityExtendedEnabled = !!i977[9]
  i976.epoOutlineEnabled = !!i977[10]
  return i976
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_Settings' )
  var i979 = data
  i978.m_enableWordWrapping = !!i979[0]
  i978.m_enableKerning = !!i979[1]
  i978.m_enableExtraPadding = !!i979[2]
  i978.m_enableTintAllSprites = !!i979[3]
  i978.m_enableParseEscapeCharacters = !!i979[4]
  i978.m_EnableRaycastTarget = !!i979[5]
  i978.m_GetFontFeaturesAtRuntime = !!i979[6]
  i978.m_missingGlyphCharacter = i979[7]
  i978.m_warningsDisabled = !!i979[8]
  request.r(i979[9], i979[10], 0, i978, 'm_defaultFontAsset')
  i978.m_defaultFontAssetPath = i979[11]
  i978.m_defaultFontSize = i979[12]
  i978.m_defaultAutoSizeMinRatio = i979[13]
  i978.m_defaultAutoSizeMaxRatio = i979[14]
  i978.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i979[15], i979[16] )
  i978.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i979[17], i979[18] )
  i978.m_autoSizeTextContainer = !!i979[19]
  i978.m_IsTextObjectScaleStatic = !!i979[20]
  var i981 = i979[21]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i978.m_fallbackFontAssets = i980
  i978.m_matchMaterialPreset = !!i979[22]
  request.r(i979[23], i979[24], 0, i978, 'm_defaultSpriteAsset')
  i978.m_defaultSpriteAssetPath = i979[25]
  i978.m_enableEmojiSupport = !!i979[26]
  i978.m_MissingCharacterSpriteUnicode = i979[27]
  i978.m_defaultColorGradientPresetsPath = i979[28]
  request.r(i979[29], i979[30], 0, i978, 'm_defaultStyleSheet')
  i978.m_StyleSheetsResourcePath = i979[31]
  request.r(i979[32], i979[33], 0, i978, 'm_leadingCharacters')
  request.r(i979[34], i979[35], 0, i978, 'm_followingCharacters')
  i978.m_UseModernHangulLineBreakingRules = !!i979[36]
  return i978
}

Deserializers["Project.Scripts.Game.Constants.CustomPalette"] = function (request, data, root) {
  var i984 = root || request.c( 'Project.Scripts.Game.Constants.CustomPalette' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Project.Scripts.Game.Constants.ColorEntry', i987[i + 0]) );
  }
  i984.colors = i986
  return i984
}

Deserializers["Project.Scripts.Game.Constants.ColorEntry"] = function (request, data, root) {
  var i990 = root || request.c( 'Project.Scripts.Game.Constants.ColorEntry' )
  var i991 = data
  i990.Name = i991[0]
  i990.Color = new pc.Color(i991[1], i991[2], i991[3], i991[4])
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"91":[92],"93":[92],"94":[92],"95":[92],"96":[92],"97":[92],"98":[99],"100":[17],"101":[102],"103":[102],"104":[102],"105":[102],"106":[102],"107":[102],"108":[102],"109":[110],"111":[110],"112":[110],"113":[110],"114":[110],"115":[110],"116":[110],"117":[110],"118":[110],"119":[110],"120":[110],"121":[110],"122":[110],"123":[17],"124":[3],"125":[126],"127":[126],"31":[30],"128":[35],"129":[35],"130":[37],"16":[14],"62":[30],"131":[17],"132":[17],"133":[21],"134":[135],"136":[30],"137":[30],"33":[31],"35":[34,30],"138":[30],"32":[31],"45":[30],"139":[30],"69":[30],"140":[30],"49":[30],"141":[30],"44":[30],"51":[30],"142":[30],"143":[34,30],"144":[30],"50":[30],"48":[30],"145":[30],"37":[34,30],"55":[30],"146":[40],"147":[40],"41":[40],"148":[40],"149":[17],"20":[17],"150":[135],"151":[152],"153":[154],"155":[40],"156":[31],"157":[30],"158":[3,30],"154":[30,34],"159":[30],"160":[34,30],"161":[3],"162":[34,30],"163":[30],"164":[135]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.MonoBehaviour","Project.Scripts.HexCore.HexCell","UnityEngine.ParticleSystem","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","Project.Scripts.HexCore.HexStack","Project.Scripts.HexCore.Hex","Project.Scripts.InputSystem.DragHandler","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","Project.Scripts.HexCore.HexGrid","Project.Scripts.Game.EntryPoint","Project.Scripts.Game.EndGame","Project.Scripts.HexCore.ChainReactionOfHex","Project.Scripts.UI.TutorialPointer","Project.Scripts.UI.TimerView","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","Project.Scripts.Game.Constants.CustomPalette","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","DragMe","ScrollDetailTexture","ShowSliderValue","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.ScriptMachine","KeyFieldUnSelect","UnityEngine.UI.Selectable","Gentleland.StemapunkUI.DemoAndExample.CharacterStat","TMPro.TextMeshProUGUI","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "SecondProject";

Deserializers.lunaInitializationTime = "05/05/2026 07:49:44";

Deserializers.lunaDaysRunning = "7.3";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "ThreeInRow";

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

Deserializers.linearColorSpace = false;

Deserializers.buildID = "7c0dcb0e-41a6-4792-a45c-8402a9f4812b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

