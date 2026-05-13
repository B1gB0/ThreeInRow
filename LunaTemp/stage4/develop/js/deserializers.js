var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5002 = root || request.c( 'UnityEngine.JointSpring' )
  var i5003 = data
  i5002.spring = i5003[0]
  i5002.damper = i5003[1]
  i5002.targetPosition = i5003[2]
  return i5002
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5004 = root || request.c( 'UnityEngine.JointMotor' )
  var i5005 = data
  i5004.m_TargetVelocity = i5005[0]
  i5004.m_Force = i5005[1]
  i5004.m_FreeSpin = i5005[2]
  return i5004
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5006 = root || request.c( 'UnityEngine.JointLimits' )
  var i5007 = data
  i5006.m_Min = i5007[0]
  i5006.m_Max = i5007[1]
  i5006.m_Bounciness = i5007[2]
  i5006.m_BounceMinVelocity = i5007[3]
  i5006.m_ContactDistance = i5007[4]
  i5006.minBounce = i5007[5]
  i5006.maxBounce = i5007[6]
  return i5006
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5008 = root || request.c( 'UnityEngine.JointDrive' )
  var i5009 = data
  i5008.m_PositionSpring = i5009[0]
  i5008.m_PositionDamper = i5009[1]
  i5008.m_MaximumForce = i5009[2]
  i5008.m_UseAcceleration = i5009[3]
  return i5008
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5010 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5011 = data
  i5010.m_Spring = i5011[0]
  i5010.m_Damper = i5011[1]
  return i5010
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5013 = data
  i5012.m_Limit = i5013[0]
  i5012.m_Bounciness = i5013[1]
  i5012.m_ContactDistance = i5013[2]
  return i5012
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5014 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5015 = data
  i5014.m_ExtremumSlip = i5015[0]
  i5014.m_ExtremumValue = i5015[1]
  i5014.m_AsymptoteSlip = i5015[2]
  i5014.m_AsymptoteValue = i5015[3]
  i5014.m_Stiffness = i5015[4]
  return i5014
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5016 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5017 = data
  i5016.m_LowerAngle = i5017[0]
  i5016.m_UpperAngle = i5017[1]
  return i5016
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5018 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5019 = data
  i5018.m_MotorSpeed = i5019[0]
  i5018.m_MaximumMotorTorque = i5019[1]
  return i5018
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5020 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5021 = data
  i5020.m_DampingRatio = i5021[0]
  i5020.m_Frequency = i5021[1]
  i5020.m_Angle = i5021[2]
  return i5020
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5022 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5023 = data
  i5022.m_LowerTranslation = i5023[0]
  i5022.m_UpperTranslation = i5023[1]
  return i5022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5025 = data
  i5024.position = new pc.Vec3( i5025[0], i5025[1], i5025[2] )
  i5024.scale = new pc.Vec3( i5025[3], i5025[4], i5025[5] )
  i5024.rotation = new pc.Quat(i5025[6], i5025[7], i5025[8], i5025[9])
  return i5024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5027 = data
  request.r(i5027[0], i5027[1], 0, i5026, 'sharedMesh')
  return i5026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5029 = data
  request.r(i5029[0], i5029[1], 0, i5028, 'additionalVertexStreams')
  i5028.enabled = !!i5029[2]
  request.r(i5029[3], i5029[4], 0, i5028, 'sharedMaterial')
  var i5031 = i5029[5]
  var i5030 = []
  for(var i = 0; i < i5031.length; i += 2) {
  request.r(i5031[i + 0], i5031[i + 1], 2, i5030, '')
  }
  i5028.sharedMaterials = i5030
  i5028.receiveShadows = !!i5029[6]
  i5028.shadowCastingMode = i5029[7]
  i5028.sortingLayerID = i5029[8]
  i5028.sortingOrder = i5029[9]
  i5028.lightmapIndex = i5029[10]
  i5028.lightmapSceneIndex = i5029[11]
  i5028.lightmapScaleOffset = new pc.Vec4( i5029[12], i5029[13], i5029[14], i5029[15] )
  i5028.lightProbeUsage = i5029[16]
  i5028.reflectionProbeUsage = i5029[17]
  return i5028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5035 = data
  i5034.name = i5035[0]
  i5034.tagId = i5035[1]
  i5034.enabled = !!i5035[2]
  i5034.isStatic = !!i5035[3]
  i5034.layer = i5035[4]
  return i5034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5037 = data
  i5036.name = i5037[0]
  i5036.halfPrecision = !!i5037[1]
  i5036.useSimplification = !!i5037[2]
  i5036.useUInt32IndexFormat = !!i5037[3]
  i5036.vertexCount = i5037[4]
  i5036.aabb = i5037[5]
  var i5039 = i5037[6]
  var i5038 = []
  for(var i = 0; i < i5039.length; i += 1) {
    i5038.push( !!i5039[i + 0] );
  }
  i5036.streams = i5038
  i5036.vertices = i5037[7]
  var i5041 = i5037[8]
  var i5040 = []
  for(var i = 0; i < i5041.length; i += 1) {
    i5040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5041[i + 0]) );
  }
  i5036.subMeshes = i5040
  var i5043 = i5037[9]
  var i5042 = []
  for(var i = 0; i < i5043.length; i += 16) {
    i5042.push( new pc.Mat4().setData(i5043[i + 0], i5043[i + 1], i5043[i + 2], i5043[i + 3],  i5043[i + 4], i5043[i + 5], i5043[i + 6], i5043[i + 7],  i5043[i + 8], i5043[i + 9], i5043[i + 10], i5043[i + 11],  i5043[i + 12], i5043[i + 13], i5043[i + 14], i5043[i + 15]) );
  }
  i5036.bindposes = i5042
  var i5045 = i5037[10]
  var i5044 = []
  for(var i = 0; i < i5045.length; i += 1) {
    i5044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5045[i + 0]) );
  }
  i5036.blendShapes = i5044
  return i5036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5051 = data
  i5050.triangles = i5051[0]
  return i5050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5057 = data
  i5056.name = i5057[0]
  var i5059 = i5057[1]
  var i5058 = []
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5059[i + 0]) );
  }
  i5056.frames = i5058
  return i5056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5060 = root || new pc.UnityMaterial()
  var i5061 = data
  i5060.name = i5061[0]
  request.r(i5061[1], i5061[2], 0, i5060, 'shader')
  i5060.renderQueue = i5061[3]
  i5060.enableInstancing = !!i5061[4]
  var i5063 = i5061[5]
  var i5062 = []
  for(var i = 0; i < i5063.length; i += 1) {
    i5062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5063[i + 0]) );
  }
  i5060.floatParameters = i5062
  var i5065 = i5061[6]
  var i5064 = []
  for(var i = 0; i < i5065.length; i += 1) {
    i5064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5065[i + 0]) );
  }
  i5060.colorParameters = i5064
  var i5067 = i5061[7]
  var i5066 = []
  for(var i = 0; i < i5067.length; i += 1) {
    i5066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5067[i + 0]) );
  }
  i5060.vectorParameters = i5066
  var i5069 = i5061[8]
  var i5068 = []
  for(var i = 0; i < i5069.length; i += 1) {
    i5068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5069[i + 0]) );
  }
  i5060.textureParameters = i5068
  var i5071 = i5061[9]
  var i5070 = []
  for(var i = 0; i < i5071.length; i += 1) {
    i5070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5071[i + 0]) );
  }
  i5060.materialFlags = i5070
  return i5060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5075 = data
  i5074.name = i5075[0]
  i5074.value = i5075[1]
  return i5074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5079 = data
  i5078.name = i5079[0]
  i5078.value = new pc.Color(i5079[1], i5079[2], i5079[3], i5079[4])
  return i5078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5083 = data
  i5082.name = i5083[0]
  i5082.value = new pc.Vec4( i5083[1], i5083[2], i5083[3], i5083[4] )
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5087 = data
  i5086.name = i5087[0]
  request.r(i5087[1], i5087[2], 0, i5086, 'value')
  return i5086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5091 = data
  i5090.name = i5091[0]
  i5090.enabled = !!i5091[1]
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5093 = data
  i5092.name = i5093[0]
  i5092.width = i5093[1]
  i5092.height = i5093[2]
  i5092.mipmapCount = i5093[3]
  i5092.anisoLevel = i5093[4]
  i5092.filterMode = i5093[5]
  i5092.hdr = !!i5093[6]
  i5092.format = i5093[7]
  i5092.wrapMode = i5093[8]
  i5092.alphaIsTransparency = !!i5093[9]
  i5092.alphaSource = i5093[10]
  i5092.graphicsFormat = i5093[11]
  i5092.sRGBTexture = !!i5093[12]
  i5092.desiredColorSpace = i5093[13]
  i5092.wrapU = i5093[14]
  i5092.wrapV = i5093[15]
  return i5092
}

Deserializers["Project.Scripts.HexCore.HexCell"] = function (request, data, root) {
  var i5094 = root || request.c( 'Project.Scripts.HexCore.HexCell' )
  var i5095 = data
  request.r(i5095[0], i5095[1], 0, i5094, '_highlightMaterial')
  request.r(i5095[2], i5095[3], 0, i5094, '_defaultMaterial')
  request.r(i5095[4], i5095[5], 0, i5094, '_meshRenderer')
  request.r(i5095[6], i5095[7], 0, i5094, '_effect')
  request.r(i5095[8], i5095[9], 0, i5094, '_audioSource')
  request.r(i5095[10], i5095[11], 0, i5094, '_destroyClip')
  return i5094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5097 = data
  i5096.center = new pc.Vec3( i5097[0], i5097[1], i5097[2] )
  i5096.size = new pc.Vec3( i5097[3], i5097[4], i5097[5] )
  i5096.enabled = !!i5097[6]
  i5096.isTrigger = !!i5097[7]
  request.r(i5097[8], i5097[9], 0, i5096, 'material')
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5099 = data
  request.r(i5099[0], i5099[1], 0, i5098, 'clip')
  request.r(i5099[2], i5099[3], 0, i5098, 'outputAudioMixerGroup')
  i5098.playOnAwake = !!i5099[4]
  i5098.loop = !!i5099[5]
  i5098.time = i5099[6]
  i5098.volume = i5099[7]
  i5098.pitch = i5099[8]
  i5098.enabled = !!i5099[9]
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5101 = data
  i5100.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5101[0], i5100.main)
  i5100.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5101[1], i5100.colorBySpeed)
  i5100.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5101[2], i5100.colorOverLifetime)
  i5100.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5101[3], i5100.emission)
  i5100.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5101[4], i5100.rotationBySpeed)
  i5100.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5101[5], i5100.rotationOverLifetime)
  i5100.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5101[6], i5100.shape)
  i5100.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5101[7], i5100.sizeBySpeed)
  i5100.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5101[8], i5100.sizeOverLifetime)
  i5100.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5101[9], i5100.textureSheetAnimation)
  i5100.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5101[10], i5100.velocityOverLifetime)
  i5100.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5101[11], i5100.noise)
  i5100.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5101[12], i5100.inheritVelocity)
  i5100.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5101[13], i5100.forceOverLifetime)
  i5100.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5101[14], i5100.limitVelocityOverLifetime)
  i5100.useAutoRandomSeed = !!i5101[15]
  i5100.randomSeed = i5101[16]
  return i5100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5102 = root || new pc.ParticleSystemMain()
  var i5103 = data
  i5102.duration = i5103[0]
  i5102.loop = !!i5103[1]
  i5102.prewarm = !!i5103[2]
  i5102.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[3], i5102.startDelay)
  i5102.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[4], i5102.startLifetime)
  i5102.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[5], i5102.startSpeed)
  i5102.startSize3D = !!i5103[6]
  i5102.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[7], i5102.startSizeX)
  i5102.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[8], i5102.startSizeY)
  i5102.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[9], i5102.startSizeZ)
  i5102.startRotation3D = !!i5103[10]
  i5102.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[11], i5102.startRotationX)
  i5102.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[12], i5102.startRotationY)
  i5102.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[13], i5102.startRotationZ)
  i5102.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5103[14], i5102.startColor)
  i5102.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5103[15], i5102.gravityModifier)
  i5102.simulationSpace = i5103[16]
  request.r(i5103[17], i5103[18], 0, i5102, 'customSimulationSpace')
  i5102.simulationSpeed = i5103[19]
  i5102.useUnscaledTime = !!i5103[20]
  i5102.scalingMode = i5103[21]
  i5102.playOnAwake = !!i5103[22]
  i5102.maxParticles = i5103[23]
  i5102.emitterVelocityMode = i5103[24]
  i5102.stopAction = i5103[25]
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5104 = root || new pc.MinMaxCurve()
  var i5105 = data
  i5104.mode = i5105[0]
  i5104.curveMin = new pc.AnimationCurve( { keys_flow: i5105[1] } )
  i5104.curveMax = new pc.AnimationCurve( { keys_flow: i5105[2] } )
  i5104.curveMultiplier = i5105[3]
  i5104.constantMin = i5105[4]
  i5104.constantMax = i5105[5]
  return i5104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5106 = root || new pc.MinMaxGradient()
  var i5107 = data
  i5106.mode = i5107[0]
  i5106.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5107[1], i5106.gradientMin)
  i5106.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5107[2], i5106.gradientMax)
  i5106.colorMin = new pc.Color(i5107[3], i5107[4], i5107[5], i5107[6])
  i5106.colorMax = new pc.Color(i5107[7], i5107[8], i5107[9], i5107[10])
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5109 = data
  i5108.mode = i5109[0]
  var i5111 = i5109[1]
  var i5110 = []
  for(var i = 0; i < i5111.length; i += 1) {
    i5110.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5111[i + 0]) );
  }
  i5108.colorKeys = i5110
  var i5113 = i5109[2]
  var i5112 = []
  for(var i = 0; i < i5113.length; i += 1) {
    i5112.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5113[i + 0]) );
  }
  i5108.alphaKeys = i5112
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5114 = root || new pc.ParticleSystemColorBySpeed()
  var i5115 = data
  i5114.enabled = !!i5115[0]
  i5114.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5115[1], i5114.color)
  i5114.range = new pc.Vec2( i5115[2], i5115[3] )
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5119 = data
  i5118.color = new pc.Color(i5119[0], i5119[1], i5119[2], i5119[3])
  i5118.time = i5119[4]
  return i5118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5123 = data
  i5122.alpha = i5123[0]
  i5122.time = i5123[1]
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5124 = root || new pc.ParticleSystemColorOverLifetime()
  var i5125 = data
  i5124.enabled = !!i5125[0]
  i5124.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5125[1], i5124.color)
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5126 = root || new pc.ParticleSystemEmitter()
  var i5127 = data
  i5126.enabled = !!i5127[0]
  i5126.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[1], i5126.rateOverTime)
  i5126.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[2], i5126.rateOverDistance)
  var i5129 = i5127[3]
  var i5128 = []
  for(var i = 0; i < i5129.length; i += 1) {
    i5128.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5129[i + 0]) );
  }
  i5126.bursts = i5128
  return i5126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5132 = root || new pc.ParticleSystemBurst()
  var i5133 = data
  i5132.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5133[0], i5132.count)
  i5132.cycleCount = i5133[1]
  i5132.minCount = i5133[2]
  i5132.maxCount = i5133[3]
  i5132.repeatInterval = i5133[4]
  i5132.time = i5133[5]
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5134 = root || new pc.ParticleSystemRotationBySpeed()
  var i5135 = data
  i5134.enabled = !!i5135[0]
  i5134.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5135[1], i5134.x)
  i5134.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5135[2], i5134.y)
  i5134.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5135[3], i5134.z)
  i5134.separateAxes = !!i5135[4]
  i5134.range = new pc.Vec2( i5135[5], i5135[6] )
  return i5134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5136 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5137 = data
  i5136.enabled = !!i5137[0]
  i5136.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5137[1], i5136.x)
  i5136.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5137[2], i5136.y)
  i5136.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5137[3], i5136.z)
  i5136.separateAxes = !!i5137[4]
  return i5136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5138 = root || new pc.ParticleSystemShape()
  var i5139 = data
  i5138.enabled = !!i5139[0]
  i5138.shapeType = i5139[1]
  i5138.randomDirectionAmount = i5139[2]
  i5138.sphericalDirectionAmount = i5139[3]
  i5138.randomPositionAmount = i5139[4]
  i5138.alignToDirection = !!i5139[5]
  i5138.radius = i5139[6]
  i5138.radiusMode = i5139[7]
  i5138.radiusSpread = i5139[8]
  i5138.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[9], i5138.radiusSpeed)
  i5138.radiusThickness = i5139[10]
  i5138.angle = i5139[11]
  i5138.length = i5139[12]
  i5138.boxThickness = new pc.Vec3( i5139[13], i5139[14], i5139[15] )
  i5138.meshShapeType = i5139[16]
  request.r(i5139[17], i5139[18], 0, i5138, 'mesh')
  request.r(i5139[19], i5139[20], 0, i5138, 'meshRenderer')
  request.r(i5139[21], i5139[22], 0, i5138, 'skinnedMeshRenderer')
  i5138.useMeshMaterialIndex = !!i5139[23]
  i5138.meshMaterialIndex = i5139[24]
  i5138.useMeshColors = !!i5139[25]
  i5138.normalOffset = i5139[26]
  i5138.arc = i5139[27]
  i5138.arcMode = i5139[28]
  i5138.arcSpread = i5139[29]
  i5138.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[30], i5138.arcSpeed)
  i5138.donutRadius = i5139[31]
  i5138.position = new pc.Vec3( i5139[32], i5139[33], i5139[34] )
  i5138.rotation = new pc.Vec3( i5139[35], i5139[36], i5139[37] )
  i5138.scale = new pc.Vec3( i5139[38], i5139[39], i5139[40] )
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5140 = root || new pc.ParticleSystemSizeBySpeed()
  var i5141 = data
  i5140.enabled = !!i5141[0]
  i5140.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[1], i5140.x)
  i5140.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[2], i5140.y)
  i5140.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[3], i5140.z)
  i5140.separateAxes = !!i5141[4]
  i5140.range = new pc.Vec2( i5141[5], i5141[6] )
  return i5140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5142 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5143 = data
  i5142.enabled = !!i5143[0]
  i5142.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5143[1], i5142.x)
  i5142.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5143[2], i5142.y)
  i5142.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5143[3], i5142.z)
  i5142.separateAxes = !!i5143[4]
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5144 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5145 = data
  i5144.enabled = !!i5145[0]
  i5144.mode = i5145[1]
  i5144.animation = i5145[2]
  i5144.numTilesX = i5145[3]
  i5144.numTilesY = i5145[4]
  i5144.useRandomRow = !!i5145[5]
  i5144.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5145[6], i5144.frameOverTime)
  i5144.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5145[7], i5144.startFrame)
  i5144.cycleCount = i5145[8]
  i5144.rowIndex = i5145[9]
  i5144.flipU = i5145[10]
  i5144.flipV = i5145[11]
  i5144.spriteCount = i5145[12]
  var i5147 = i5145[13]
  var i5146 = []
  for(var i = 0; i < i5147.length; i += 2) {
  request.r(i5147[i + 0], i5147[i + 1], 2, i5146, '')
  }
  i5144.sprites = i5146
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5150 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5151 = data
  i5150.enabled = !!i5151[0]
  i5150.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[1], i5150.x)
  i5150.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[2], i5150.y)
  i5150.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[3], i5150.z)
  i5150.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[4], i5150.radial)
  i5150.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[5], i5150.speedModifier)
  i5150.space = i5151[6]
  i5150.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[7], i5150.orbitalX)
  i5150.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[8], i5150.orbitalY)
  i5150.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[9], i5150.orbitalZ)
  i5150.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[10], i5150.orbitalOffsetX)
  i5150.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[11], i5150.orbitalOffsetY)
  i5150.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[12], i5150.orbitalOffsetZ)
  return i5150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5152 = root || new pc.ParticleSystemNoise()
  var i5153 = data
  i5152.enabled = !!i5153[0]
  i5152.separateAxes = !!i5153[1]
  i5152.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[2], i5152.strengthX)
  i5152.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[3], i5152.strengthY)
  i5152.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[4], i5152.strengthZ)
  i5152.frequency = i5153[5]
  i5152.damping = !!i5153[6]
  i5152.octaveCount = i5153[7]
  i5152.octaveMultiplier = i5153[8]
  i5152.octaveScale = i5153[9]
  i5152.quality = i5153[10]
  i5152.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[11], i5152.scrollSpeed)
  i5152.scrollSpeedMultiplier = i5153[12]
  i5152.remapEnabled = !!i5153[13]
  i5152.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[14], i5152.remapX)
  i5152.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[15], i5152.remapY)
  i5152.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[16], i5152.remapZ)
  i5152.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[17], i5152.positionAmount)
  i5152.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[18], i5152.rotationAmount)
  i5152.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5153[19], i5152.sizeAmount)
  return i5152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5154 = root || new pc.ParticleSystemInheritVelocity()
  var i5155 = data
  i5154.enabled = !!i5155[0]
  i5154.mode = i5155[1]
  i5154.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[2], i5154.curve)
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5156 = root || new pc.ParticleSystemForceOverLifetime()
  var i5157 = data
  i5156.enabled = !!i5157[0]
  i5156.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5157[1], i5156.x)
  i5156.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5157[2], i5156.y)
  i5156.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5157[3], i5156.z)
  i5156.space = i5157[4]
  i5156.randomized = !!i5157[5]
  return i5156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5158 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5159 = data
  i5158.enabled = !!i5159[0]
  i5158.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[1], i5158.limit)
  i5158.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[2], i5158.limitX)
  i5158.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[3], i5158.limitY)
  i5158.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[4], i5158.limitZ)
  i5158.dampen = i5159[5]
  i5158.separateAxes = !!i5159[6]
  i5158.space = i5159[7]
  i5158.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[8], i5158.drag)
  i5158.multiplyDragByParticleSize = !!i5159[9]
  i5158.multiplyDragByParticleVelocity = !!i5159[10]
  return i5158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5161 = data
  request.r(i5161[0], i5161[1], 0, i5160, 'mesh')
  i5160.meshCount = i5161[2]
  i5160.activeVertexStreamsCount = i5161[3]
  i5160.alignment = i5161[4]
  i5160.renderMode = i5161[5]
  i5160.sortMode = i5161[6]
  i5160.lengthScale = i5161[7]
  i5160.velocityScale = i5161[8]
  i5160.cameraVelocityScale = i5161[9]
  i5160.normalDirection = i5161[10]
  i5160.sortingFudge = i5161[11]
  i5160.minParticleSize = i5161[12]
  i5160.maxParticleSize = i5161[13]
  i5160.pivot = new pc.Vec3( i5161[14], i5161[15], i5161[16] )
  request.r(i5161[17], i5161[18], 0, i5160, 'trailMaterial')
  i5160.applyActiveColorSpace = !!i5161[19]
  i5160.enabled = !!i5161[20]
  request.r(i5161[21], i5161[22], 0, i5160, 'sharedMaterial')
  var i5163 = i5161[23]
  var i5162 = []
  for(var i = 0; i < i5163.length; i += 2) {
  request.r(i5163[i + 0], i5163[i + 1], 2, i5162, '')
  }
  i5160.sharedMaterials = i5162
  i5160.receiveShadows = !!i5161[24]
  i5160.shadowCastingMode = i5161[25]
  i5160.sortingLayerID = i5161[26]
  i5160.sortingOrder = i5161[27]
  i5160.lightmapIndex = i5161[28]
  i5160.lightmapSceneIndex = i5161[29]
  i5160.lightmapScaleOffset = new pc.Vec4( i5161[30], i5161[31], i5161[32], i5161[33] )
  i5160.lightProbeUsage = i5161[34]
  i5160.reflectionProbeUsage = i5161[35]
  return i5160
}

Deserializers["Project.Scripts.HexCore.HexStack"] = function (request, data, root) {
  var i5164 = root || request.c( 'Project.Scripts.HexCore.HexStack' )
  var i5165 = data
  var i5167 = i5165[0]
  var i5166 = []
  for(var i = 0; i < i5167.length; i += 2) {
  request.r(i5167[i + 0], i5167[i + 1], 2, i5166, '')
  }
  i5164._possibleColors = i5166
  i5164._minHexagons = i5165[1]
  i5164._maxHexagons = i5165[2]
  i5164._isRandom = !!i5165[3]
  i5164._noRandomCount = i5165[4]
  i5164._isTwoColors = !!i5165[5]
  request.r(i5165[6], i5165[7], 0, i5164, '_dragHandler')
  return i5164
}

Deserializers["Project.Scripts.HexCore.Hex"] = function (request, data, root) {
  var i5170 = root || request.c( 'Project.Scripts.HexCore.Hex' )
  var i5171 = data
  i5170._hexColor = i5171[0]
  request.r(i5171[1], i5171[2], 0, i5170, '_audioSource')
  request.r(i5171[3], i5171[4], 0, i5170, '_moveClip')
  request.r(i5171[5], i5171[6], 0, i5170, '_destroyClip')
  return i5170
}

Deserializers["Project.Scripts.InputSystem.DragHandler"] = function (request, data, root) {
  var i5172 = root || request.c( 'Project.Scripts.InputSystem.DragHandler' )
  var i5173 = data
  i5172._liftHeight = i5173[0]
  i5172._returnDuration = i5173[1]
  request.r(i5173[2], i5173[3], 0, i5172, '_audioSource')
  request.r(i5173[4], i5173[5], 0, i5172, '_pickupClip')
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5175 = data
  i5174.name = i5175[0]
  i5174.atlasId = i5175[1]
  i5174.mipmapCount = i5175[2]
  i5174.hdr = !!i5175[3]
  i5174.size = i5175[4]
  i5174.anisoLevel = i5175[5]
  i5174.filterMode = i5175[6]
  var i5177 = i5175[7]
  var i5176 = []
  for(var i = 0; i < i5177.length; i += 4) {
    i5176.push( UnityEngine.Rect.MinMaxRect(i5177[i + 0], i5177[i + 1], i5177[i + 2], i5177[i + 3]) );
  }
  i5174.rects = i5176
  i5174.wrapU = i5175[8]
  i5174.wrapV = i5175[9]
  return i5174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5181 = data
  i5180.name = i5181[0]
  i5180.index = i5181[1]
  i5180.startup = !!i5181[2]
  return i5180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5183 = data
  i5182.aspect = i5183[0]
  i5182.orthographic = !!i5183[1]
  i5182.orthographicSize = i5183[2]
  i5182.backgroundColor = new pc.Color(i5183[3], i5183[4], i5183[5], i5183[6])
  i5182.nearClipPlane = i5183[7]
  i5182.farClipPlane = i5183[8]
  i5182.fieldOfView = i5183[9]
  i5182.depth = i5183[10]
  i5182.clearFlags = i5183[11]
  i5182.cullingMask = i5183[12]
  i5182.rect = i5183[13]
  request.r(i5183[14], i5183[15], 0, i5182, 'targetTexture')
  i5182.usePhysicalProperties = !!i5183[16]
  i5182.focalLength = i5183[17]
  i5182.sensorSize = new pc.Vec2( i5183[18], i5183[19] )
  i5182.lensShift = new pc.Vec2( i5183[20], i5183[21] )
  i5182.gateFit = i5183[22]
  i5182.commandBufferCount = i5183[23]
  i5182.cameraType = i5183[24]
  i5182.enabled = !!i5183[25]
  return i5182
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i5184 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i5185 = data
  i5184.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i5185[0] )
  i5184.m_MaxRayIntersections = i5185[1]
  return i5184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5187 = data
  i5186.type = i5187[0]
  i5186.color = new pc.Color(i5187[1], i5187[2], i5187[3], i5187[4])
  i5186.cullingMask = i5187[5]
  i5186.intensity = i5187[6]
  i5186.range = i5187[7]
  i5186.spotAngle = i5187[8]
  i5186.shadows = i5187[9]
  i5186.shadowNormalBias = i5187[10]
  i5186.shadowBias = i5187[11]
  i5186.shadowStrength = i5187[12]
  i5186.shadowResolution = i5187[13]
  i5186.lightmapBakeType = i5187[14]
  i5186.renderMode = i5187[15]
  request.r(i5187[16], i5187[17], 0, i5186, 'cookie')
  i5186.cookieSize = i5187[18]
  i5186.shadowNearPlane = i5187[19]
  i5186.occlusionMaskChannel = i5187[20]
  i5186.isBaked = !!i5187[21]
  i5186.mixedLightingMode = i5187[22]
  i5186.enabled = !!i5187[23]
  return i5186
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i5188 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i5189 = data
  i5188.m_Version = i5189[0]
  i5188.m_UsePipelineSettings = !!i5189[1]
  i5188.m_AdditionalLightsShadowResolutionTier = i5189[2]
  i5188.m_LightLayerMask = i5189[3]
  i5188.m_RenderingLayers = i5189[4]
  i5188.m_CustomShadowLayers = !!i5189[5]
  i5188.m_ShadowLayerMask = i5189[6]
  i5188.m_ShadowRenderingLayers = i5189[7]
  i5188.m_LightCookieSize = new pc.Vec2( i5189[8], i5189[9] )
  i5188.m_LightCookieOffset = new pc.Vec2( i5189[10], i5189[11] )
  i5188.m_SoftShadowQuality = i5189[12]
  return i5188
}

Deserializers["Project.Scripts.HexCore.HexGrid"] = function (request, data, root) {
  var i5190 = root || request.c( 'Project.Scripts.HexCore.HexGrid' )
  var i5191 = data
  i5190._gridRadius = i5191[0]
  i5190._cellSpacing = i5191[1]
  request.r(i5191[2], i5191[3], 0, i5190, '_hexCellPrefab')
  return i5190
}

Deserializers["Project.Scripts.Game.EntryPoint"] = function (request, data, root) {
  var i5192 = root || request.c( 'Project.Scripts.Game.EntryPoint' )
  var i5193 = data
  request.r(i5193[0], i5193[1], 0, i5192, '_hexGrid')
  var i5195 = i5193[2]
  var i5194 = []
  for(var i = 0; i < i5195.length; i += 2) {
  request.r(i5195[i + 0], i5195[i + 1], 2, i5194, '')
  }
  i5192._initialStacks = i5194
  request.r(i5193[3], i5193[4], 0, i5192, '_dragHexStackPrefab')
  var i5197 = i5193[5]
  var i5196 = []
  for(var i = 0; i < i5197.length; i += 2) {
  request.r(i5197[i + 0], i5197[i + 1], 2, i5196, '')
  }
  i5192._dragHexStackSpawnPoints = i5196
  request.r(i5193[6], i5193[7], 0, i5192, '_endGame')
  request.r(i5193[8], i5193[9], 0, i5192, '_chainReactionOfHex')
  request.r(i5193[10], i5193[11], 0, i5192, '_tutorialPointer')
  i5192._dragSpawnDuration = i5193[12]
  i5192._gameDuration = i5193[13]
  request.r(i5193[14], i5193[15], 0, i5192, '_timerView')
  return i5192
}

Deserializers["Project.Scripts.Game.EndGame"] = function (request, data, root) {
  var i5202 = root || request.c( 'Project.Scripts.Game.EndGame' )
  var i5203 = data
  request.r(i5203[0], i5203[1], 0, i5202, '_endGameCanvasGroup')
  request.r(i5203[2], i5203[3], 0, i5202, '_playNowButton')
  request.r(i5203[4], i5203[5], 0, i5202, '_tutorialPointer')
  return i5202
}

Deserializers["Project.Scripts.HexCore.ChainReactionOfHex"] = function (request, data, root) {
  var i5204 = root || request.c( 'Project.Scripts.HexCore.ChainReactionOfHex' )
  var i5205 = data
  i5204._moveCurve = new pc.AnimationCurve( { keys_flow: i5205[0] } )
  request.r(i5205[1], i5205[2], 0, i5204, '_hexGrid')
  i5204._baseMoveDuration = i5205[3]
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5207 = data
  i5206.pivot = new pc.Vec2( i5207[0], i5207[1] )
  i5206.anchorMin = new pc.Vec2( i5207[2], i5207[3] )
  i5206.anchorMax = new pc.Vec2( i5207[4], i5207[5] )
  i5206.sizeDelta = new pc.Vec2( i5207[6], i5207[7] )
  i5206.anchoredPosition3D = new pc.Vec3( i5207[8], i5207[9], i5207[10] )
  i5206.rotation = new pc.Quat(i5207[11], i5207[12], i5207[13], i5207[14])
  i5206.scale = new pc.Vec3( i5207[15], i5207[16], i5207[17] )
  return i5206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5209 = data
  i5208.planeDistance = i5209[0]
  i5208.referencePixelsPerUnit = i5209[1]
  i5208.isFallbackOverlay = !!i5209[2]
  i5208.renderMode = i5209[3]
  i5208.renderOrder = i5209[4]
  i5208.sortingLayerName = i5209[5]
  i5208.sortingOrder = i5209[6]
  i5208.scaleFactor = i5209[7]
  request.r(i5209[8], i5209[9], 0, i5208, 'worldCamera')
  i5208.overrideSorting = !!i5209[10]
  i5208.pixelPerfect = !!i5209[11]
  i5208.targetDisplay = i5209[12]
  i5208.overridePixelPerfect = !!i5209[13]
  i5208.enabled = !!i5209[14]
  return i5208
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5210 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5211 = data
  i5210.m_UiScaleMode = i5211[0]
  i5210.m_ReferencePixelsPerUnit = i5211[1]
  i5210.m_ScaleFactor = i5211[2]
  i5210.m_ReferenceResolution = new pc.Vec2( i5211[3], i5211[4] )
  i5210.m_ScreenMatchMode = i5211[5]
  i5210.m_MatchWidthOrHeight = i5211[6]
  i5210.m_PhysicalUnit = i5211[7]
  i5210.m_FallbackScreenDPI = i5211[8]
  i5210.m_DefaultSpriteDPI = i5211[9]
  i5210.m_DynamicPixelsPerUnit = i5211[10]
  i5210.m_PresetInfoIsWorld = !!i5211[11]
  return i5210
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5212 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5213 = data
  i5212.m_IgnoreReversedGraphics = !!i5213[0]
  i5212.m_BlockingObjects = i5213[1]
  i5212.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5213[2] )
  return i5212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5215 = data
  i5214.m_Alpha = i5215[0]
  i5214.m_Interactable = !!i5215[1]
  i5214.m_BlocksRaycasts = !!i5215[2]
  i5214.m_IgnoreParentGroups = !!i5215[3]
  i5214.enabled = !!i5215[4]
  return i5214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5217 = data
  i5216.cullTransparentMesh = !!i5217[0]
  return i5216
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5218 = root || request.c( 'UnityEngine.UI.Image' )
  var i5219 = data
  request.r(i5219[0], i5219[1], 0, i5218, 'm_Sprite')
  i5218.m_Type = i5219[2]
  i5218.m_PreserveAspect = !!i5219[3]
  i5218.m_FillCenter = !!i5219[4]
  i5218.m_FillMethod = i5219[5]
  i5218.m_FillAmount = i5219[6]
  i5218.m_FillClockwise = !!i5219[7]
  i5218.m_FillOrigin = i5219[8]
  i5218.m_UseSpriteMesh = !!i5219[9]
  i5218.m_PixelsPerUnitMultiplier = i5219[10]
  request.r(i5219[11], i5219[12], 0, i5218, 'm_Material')
  i5218.m_Maskable = !!i5219[13]
  i5218.m_Color = new pc.Color(i5219[14], i5219[15], i5219[16], i5219[17])
  i5218.m_RaycastTarget = !!i5219[18]
  i5218.m_RaycastPadding = new pc.Vec4( i5219[19], i5219[20], i5219[21], i5219[22] )
  return i5218
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5220 = root || request.c( 'UnityEngine.UI.Button' )
  var i5221 = data
  i5220.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5221[0], i5220.m_OnClick)
  i5220.m_Navigation = request.d('UnityEngine.UI.Navigation', i5221[1], i5220.m_Navigation)
  i5220.m_Transition = i5221[2]
  i5220.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5221[3], i5220.m_Colors)
  i5220.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5221[4], i5220.m_SpriteState)
  i5220.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5221[5], i5220.m_AnimationTriggers)
  i5220.m_Interactable = !!i5221[6]
  request.r(i5221[7], i5221[8], 0, i5220, 'm_TargetGraphic')
  return i5220
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5222 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5223 = data
  i5222.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5223[0], i5222.m_PersistentCalls)
  return i5222
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5224 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5225 = data
  var i5227 = i5225[0]
  var i5226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5227.length; i += 1) {
    i5226.add(request.d('UnityEngine.Events.PersistentCall', i5227[i + 0]));
  }
  i5224.m_Calls = i5226
  return i5224
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5230 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5231 = data
  request.r(i5231[0], i5231[1], 0, i5230, 'm_Target')
  i5230.m_TargetAssemblyTypeName = i5231[2]
  i5230.m_MethodName = i5231[3]
  i5230.m_Mode = i5231[4]
  i5230.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5231[5], i5230.m_Arguments)
  i5230.m_CallState = i5231[6]
  return i5230
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5232 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5233 = data
  i5232.m_Mode = i5233[0]
  i5232.m_WrapAround = !!i5233[1]
  request.r(i5233[2], i5233[3], 0, i5232, 'm_SelectOnUp')
  request.r(i5233[4], i5233[5], 0, i5232, 'm_SelectOnDown')
  request.r(i5233[6], i5233[7], 0, i5232, 'm_SelectOnLeft')
  request.r(i5233[8], i5233[9], 0, i5232, 'm_SelectOnRight')
  return i5232
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5234 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5235 = data
  i5234.m_NormalColor = new pc.Color(i5235[0], i5235[1], i5235[2], i5235[3])
  i5234.m_HighlightedColor = new pc.Color(i5235[4], i5235[5], i5235[6], i5235[7])
  i5234.m_PressedColor = new pc.Color(i5235[8], i5235[9], i5235[10], i5235[11])
  i5234.m_SelectedColor = new pc.Color(i5235[12], i5235[13], i5235[14], i5235[15])
  i5234.m_DisabledColor = new pc.Color(i5235[16], i5235[17], i5235[18], i5235[19])
  i5234.m_ColorMultiplier = i5235[20]
  i5234.m_FadeDuration = i5235[21]
  return i5234
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5236 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5237 = data
  request.r(i5237[0], i5237[1], 0, i5236, 'm_HighlightedSprite')
  request.r(i5237[2], i5237[3], 0, i5236, 'm_PressedSprite')
  request.r(i5237[4], i5237[5], 0, i5236, 'm_SelectedSprite')
  request.r(i5237[6], i5237[7], 0, i5236, 'm_DisabledSprite')
  return i5236
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5238 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5239 = data
  i5238.m_NormalTrigger = i5239[0]
  i5238.m_HighlightedTrigger = i5239[1]
  i5238.m_PressedTrigger = i5239[2]
  i5238.m_SelectedTrigger = i5239[3]
  i5238.m_DisabledTrigger = i5239[4]
  return i5238
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5240 = root || request.c( 'UnityEngine.UI.Text' )
  var i5241 = data
  i5240.m_FontData = request.d('UnityEngine.UI.FontData', i5241[0], i5240.m_FontData)
  i5240.m_Text = i5241[1]
  request.r(i5241[2], i5241[3], 0, i5240, 'm_Material')
  i5240.m_Maskable = !!i5241[4]
  i5240.m_Color = new pc.Color(i5241[5], i5241[6], i5241[7], i5241[8])
  i5240.m_RaycastTarget = !!i5241[9]
  i5240.m_RaycastPadding = new pc.Vec4( i5241[10], i5241[11], i5241[12], i5241[13] )
  return i5240
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5242 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5243 = data
  request.r(i5243[0], i5243[1], 0, i5242, 'm_Font')
  i5242.m_FontSize = i5243[2]
  i5242.m_FontStyle = i5243[3]
  i5242.m_BestFit = !!i5243[4]
  i5242.m_MinSize = i5243[5]
  i5242.m_MaxSize = i5243[6]
  i5242.m_Alignment = i5243[7]
  i5242.m_AlignByGeometry = !!i5243[8]
  i5242.m_RichText = !!i5243[9]
  i5242.m_HorizontalOverflow = i5243[10]
  i5242.m_VerticalOverflow = i5243[11]
  i5242.m_LineSpacing = i5243[12]
  return i5242
}

Deserializers["Project.Scripts.UI.TutorialPointer"] = function (request, data, root) {
  var i5244 = root || request.c( 'Project.Scripts.UI.TutorialPointer' )
  var i5245 = data
  request.r(i5245[0], i5245[1], 0, i5244, '_handObject')
  request.r(i5245[2], i5245[3], 0, i5244, '_handRect')
  request.r(i5245[4], i5245[5], 0, i5244, '_parentCanvas')
  request.r(i5245[6], i5245[7], 0, i5244, '_entryPoint')
  i5244._idleTimeToShow = i5245[8]
  i5244._distance = i5245[9]
  i5244._duration = i5245[10]
  return i5244
}

Deserializers["Project.Scripts.UI.TimerView"] = function (request, data, root) {
  var i5246 = root || request.c( 'Project.Scripts.UI.TimerView' )
  var i5247 = data
  request.r(i5247[0], i5247[1], 0, i5246, '_fillImage')
  return i5246
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5248 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5249 = data
  request.r(i5249[0], i5249[1], 0, i5248, 'm_FirstSelected')
  i5248.m_sendNavigationEvents = !!i5249[2]
  i5248.m_DragThreshold = i5249[3]
  return i5248
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5250 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5251 = data
  i5250.m_HorizontalAxis = i5251[0]
  i5250.m_VerticalAxis = i5251[1]
  i5250.m_SubmitButton = i5251[2]
  i5250.m_CancelButton = i5251[3]
  i5250.m_InputActionsPerSecond = i5251[4]
  i5250.m_RepeatDelay = i5251[5]
  i5250.m_ForceModuleActive = !!i5251[6]
  i5250.m_SendPointerHoverToParent = !!i5251[7]
  return i5250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5253 = data
  i5252.ambientIntensity = i5253[0]
  i5252.reflectionIntensity = i5253[1]
  i5252.ambientMode = i5253[2]
  i5252.ambientLight = new pc.Color(i5253[3], i5253[4], i5253[5], i5253[6])
  i5252.ambientSkyColor = new pc.Color(i5253[7], i5253[8], i5253[9], i5253[10])
  i5252.ambientGroundColor = new pc.Color(i5253[11], i5253[12], i5253[13], i5253[14])
  i5252.ambientEquatorColor = new pc.Color(i5253[15], i5253[16], i5253[17], i5253[18])
  i5252.fogColor = new pc.Color(i5253[19], i5253[20], i5253[21], i5253[22])
  i5252.fogEndDistance = i5253[23]
  i5252.fogStartDistance = i5253[24]
  i5252.fogDensity = i5253[25]
  i5252.fog = !!i5253[26]
  request.r(i5253[27], i5253[28], 0, i5252, 'skybox')
  i5252.fogMode = i5253[29]
  var i5255 = i5253[30]
  var i5254 = []
  for(var i = 0; i < i5255.length; i += 1) {
    i5254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5255[i + 0]) );
  }
  i5252.lightmaps = i5254
  i5252.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5253[31], i5252.lightProbes)
  i5252.lightmapsMode = i5253[32]
  i5252.mixedBakeMode = i5253[33]
  i5252.environmentLightingMode = i5253[34]
  i5252.ambientProbe = new pc.SphericalHarmonicsL2(i5253[35])
  request.r(i5253[36], i5253[37], 0, i5252, 'customReflection')
  request.r(i5253[38], i5253[39], 0, i5252, 'defaultReflection')
  i5252.defaultReflectionMode = i5253[40]
  i5252.defaultReflectionResolution = i5253[41]
  i5252.sunLightObjectId = i5253[42]
  i5252.pixelLightCount = i5253[43]
  i5252.defaultReflectionHDR = !!i5253[44]
  i5252.hasLightDataAsset = !!i5253[45]
  i5252.hasManualGenerate = !!i5253[46]
  return i5252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5259 = data
  request.r(i5259[0], i5259[1], 0, i5258, 'lightmapColor')
  request.r(i5259[2], i5259[3], 0, i5258, 'lightmapDirection')
  request.r(i5259[4], i5259[5], 0, i5258, 'shadowMask')
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5260 = root || new UnityEngine.LightProbes()
  var i5261 = data
  return i5260
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i5268 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i5269 = data
  request.r(i5269[0], i5269[1], 0, i5268, 'panelPrefab')
  var i5271 = i5269[2]
  var i5270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i5271.length; i += 1) {
    i5270.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i5271[i + 0]));
  }
  i5268.prefabs = i5270
  return i5268
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i5274 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i5275 = data
  i5274.type = i5275[0]
  request.r(i5275[1], i5275[2], 0, i5274, 'prefab')
  return i5274
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i5276 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i5277 = data
  i5276.m_Spacing = i5277[0]
  i5276.m_ChildForceExpandWidth = !!i5277[1]
  i5276.m_ChildForceExpandHeight = !!i5277[2]
  i5276.m_ChildControlWidth = !!i5277[3]
  i5276.m_ChildControlHeight = !!i5277[4]
  i5276.m_ChildScaleWidth = !!i5277[5]
  i5276.m_ChildScaleHeight = !!i5277[6]
  i5276.m_ReverseArrangement = !!i5277[7]
  i5276.m_Padding = UnityEngine.RectOffset.FromPaddings(i5277[8], i5277[9], i5277[10], i5277[11])
  i5276.m_ChildAlignment = i5277[12]
  return i5276
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i5278 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i5279 = data
  i5278.m_HorizontalFit = i5279[0]
  i5278.m_VerticalFit = i5279[1]
  return i5278
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i5280 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i5281 = data
  request.r(i5281[0], i5281[1], 0, i5280, 'contentHolder')
  return i5280
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i5282 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i5283 = data
  request.r(i5283[0], i5283[1], 0, i5282, 'nameLabel')
  request.r(i5283[2], i5283[3], 0, i5282, 'scrollRect')
  request.r(i5283[4], i5283[5], 0, i5282, 'viewport')
  request.r(i5283[6], i5283[7], 0, i5282, 'Canvas')
  return i5282
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i5284 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i5285 = data
  i5284.m_IgnoreLayout = !!i5285[0]
  i5284.m_MinWidth = i5285[1]
  i5284.m_MinHeight = i5285[2]
  i5284.m_PreferredWidth = i5285[3]
  i5284.m_PreferredHeight = i5285[4]
  i5284.m_FlexibleWidth = i5285[5]
  i5284.m_FlexibleHeight = i5285[6]
  i5284.m_LayoutPriority = i5285[7]
  return i5284
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5286 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5287 = data
  request.r(i5287[0], i5287[1], 0, i5286, 'm_ObjectArgument')
  i5286.m_ObjectArgumentAssemblyTypeName = i5287[2]
  i5286.m_IntArgument = i5287[3]
  i5286.m_FloatArgument = i5287[4]
  i5286.m_StringArgument = i5287[5]
  i5286.m_BoolArgument = !!i5287[6]
  return i5286
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i5288 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i5289 = data
  request.r(i5289[0], i5289[1], 0, i5288, 'm_Content')
  i5288.m_Horizontal = !!i5289[2]
  i5288.m_Vertical = !!i5289[3]
  i5288.m_MovementType = i5289[4]
  i5288.m_Elasticity = i5289[5]
  i5288.m_Inertia = !!i5289[6]
  i5288.m_DecelerationRate = i5289[7]
  i5288.m_ScrollSensitivity = i5289[8]
  request.r(i5289[9], i5289[10], 0, i5288, 'm_Viewport')
  request.r(i5289[11], i5289[12], 0, i5288, 'm_HorizontalScrollbar')
  request.r(i5289[13], i5289[14], 0, i5288, 'm_VerticalScrollbar')
  i5288.m_HorizontalScrollbarVisibility = i5289[15]
  i5288.m_VerticalScrollbarVisibility = i5289[16]
  i5288.m_HorizontalScrollbarSpacing = i5289[17]
  i5288.m_VerticalScrollbarSpacing = i5289[18]
  i5288.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i5289[19], i5288.m_OnValueChanged)
  return i5288
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i5290 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i5291 = data
  i5290.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5291[0], i5290.m_PersistentCalls)
  return i5290
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5292 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5293 = data
  i5292.m_ShowMaskGraphic = !!i5293[0]
  return i5292
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i5294 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i5295 = data
  request.r(i5295[0], i5295[1], 0, i5294, 'm_HandleRect')
  i5294.m_Direction = i5295[2]
  i5294.m_Value = i5295[3]
  i5294.m_Size = i5295[4]
  i5294.m_NumberOfSteps = i5295[5]
  i5294.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i5295[6], i5294.m_OnValueChanged)
  i5294.m_Navigation = request.d('UnityEngine.UI.Navigation', i5295[7], i5294.m_Navigation)
  i5294.m_Transition = i5295[8]
  i5294.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5295[9], i5294.m_Colors)
  i5294.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5295[10], i5294.m_SpriteState)
  i5294.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5295[11], i5294.m_AnimationTriggers)
  i5294.m_Interactable = !!i5295[12]
  request.r(i5295[13], i5295[14], 0, i5294, 'm_TargetGraphic')
  return i5294
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i5296 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i5297 = data
  i5296.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5297[0], i5296.m_PersistentCalls)
  return i5296
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i5298 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i5299 = data
  var i5301 = i5299[0]
  var i5300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i5301.length; i += 1) {
    i5300.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i5301[i + 0]));
  }
  i5298.m_Delegates = i5300
  return i5298
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i5304 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i5305 = data
  i5304.eventID = i5305[0]
  i5304.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i5305[1], i5304.callback)
  return i5304
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i5306 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i5307 = data
  i5306.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5307[0], i5306.m_PersistentCalls)
  return i5306
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i5308 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i5309 = data
  request.r(i5309[0], i5309[1], 0, i5308, 'nameLabel')
  request.r(i5309[2], i5309[3], 0, i5308, 'valueLabel')
  i5308.colorDefault = new pc.Color(i5309[4], i5309[5], i5309[6], i5309[7])
  i5308.colorSelected = new pc.Color(i5309[8], i5309[9], i5309[10], i5309[11])
  return i5308
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i5310 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i5311 = data
  request.r(i5311[0], i5311[1], 0, i5310, 'nameLabel')
  request.r(i5311[2], i5311[3], 0, i5310, 'valueToggle')
  request.r(i5311[4], i5311[5], 0, i5310, 'checkmarkImage')
  i5310.colorDefault = new pc.Color(i5311[6], i5311[7], i5311[8], i5311[9])
  i5310.colorSelected = new pc.Color(i5311[10], i5311[11], i5311[12], i5311[13])
  return i5310
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i5312 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i5313 = data
  i5312.toggleTransition = i5313[0]
  request.r(i5313[1], i5313[2], 0, i5312, 'graphic')
  i5312.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i5313[3], i5312.onValueChanged)
  request.r(i5313[4], i5313[5], 0, i5312, 'm_Group')
  i5312.m_IsOn = !!i5313[6]
  i5312.m_Navigation = request.d('UnityEngine.UI.Navigation', i5313[7], i5312.m_Navigation)
  i5312.m_Transition = i5313[8]
  i5312.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5313[9], i5312.m_Colors)
  i5312.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5313[10], i5312.m_SpriteState)
  i5312.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5313[11], i5312.m_AnimationTriggers)
  i5312.m_Interactable = !!i5313[12]
  request.r(i5313[13], i5313[14], 0, i5312, 'm_TargetGraphic')
  return i5312
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i5314 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i5315 = data
  i5314.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5315[0], i5314.m_PersistentCalls)
  return i5314
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i5316 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i5317 = data
  request.r(i5317[0], i5317[1], 0, i5316, 'nameLabel')
  request.r(i5317[2], i5317[3], 0, i5316, 'valueLabel')
  i5316.colorDefault = new pc.Color(i5317[4], i5317[5], i5317[6], i5317[7])
  i5316.colorSelected = new pc.Color(i5317[8], i5317[9], i5317[10], i5317[11])
  return i5316
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i5318 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i5319 = data
  request.r(i5319[0], i5319[1], 0, i5318, 'nameLabel')
  request.r(i5319[2], i5319[3], 0, i5318, 'valueLabel')
  i5318.colorDefault = new pc.Color(i5319[4], i5319[5], i5319[6], i5319[7])
  i5318.colorSelected = new pc.Color(i5319[8], i5319[9], i5319[10], i5319[11])
  return i5318
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i5320 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i5321 = data
  request.r(i5321[0], i5321[1], 0, i5320, 'nameLabel')
  request.r(i5321[2], i5321[3], 0, i5320, 'valueLabel')
  i5320.colorDefault = new pc.Color(i5321[4], i5321[5], i5321[6], i5321[7])
  i5320.colorSelected = new pc.Color(i5321[8], i5321[9], i5321[10], i5321[11])
  return i5320
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i5322 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i5323 = data
  request.r(i5323[0], i5323[1], 0, i5322, 'nextButtonText')
  request.r(i5323[2], i5323[3], 0, i5322, 'previousButtonText')
  request.r(i5323[4], i5323[5], 0, i5322, 'nameLabel')
  request.r(i5323[6], i5323[7], 0, i5322, 'valueLabel')
  i5322.colorDefault = new pc.Color(i5323[8], i5323[9], i5323[10], i5323[11])
  i5322.colorSelected = new pc.Color(i5323[12], i5323[13], i5323[14], i5323[15])
  return i5322
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i5324 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i5325 = data
  request.r(i5325[0], i5325[1], 0, i5324, 'nameLabel')
  i5324.colorDefault = new pc.Color(i5325[2], i5325[3], i5325[4], i5325[5])
  i5324.colorSelected = new pc.Color(i5325[6], i5325[7], i5325[8], i5325[9])
  return i5324
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i5326 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i5327 = data
  request.r(i5327[0], i5327[1], 0, i5326, 'nameLabel')
  request.r(i5327[2], i5327[3], 0, i5326, 'valueToggle')
  i5326.colorDefault = new pc.Color(i5327[4], i5327[5], i5327[6], i5327[7])
  i5326.colorSelected = new pc.Color(i5327[8], i5327[9], i5327[10], i5327[11])
  return i5326
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i5328 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i5329 = data
  request.r(i5329[0], i5329[1], 0, i5328, 'content')
  request.r(i5329[2], i5329[3], 0, i5328, 'arrowOpened')
  request.r(i5329[4], i5329[5], 0, i5328, 'arrowClosed')
  i5328.toggleTransition = i5329[6]
  request.r(i5329[7], i5329[8], 0, i5328, 'graphic')
  i5328.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i5329[9], i5328.onValueChanged)
  request.r(i5329[10], i5329[11], 0, i5328, 'm_Group')
  i5328.m_IsOn = !!i5329[12]
  i5328.m_Navigation = request.d('UnityEngine.UI.Navigation', i5329[13], i5328.m_Navigation)
  i5328.m_Transition = i5329[14]
  i5328.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5329[15], i5328.m_Colors)
  i5328.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5329[16], i5328.m_SpriteState)
  i5328.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5329[17], i5328.m_AnimationTriggers)
  i5328.m_Interactable = !!i5329[18]
  request.r(i5329[19], i5329[20], 0, i5328, 'm_TargetGraphic')
  return i5328
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i5330 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i5331 = data
  request.r(i5331[0], i5331[1], 0, i5330, 'nameLabel')
  request.r(i5331[2], i5331[3], 0, i5330, 'valueToggle')
  request.r(i5331[4], i5331[5], 0, i5330, 'colorImage')
  request.r(i5331[6], i5331[7], 0, i5330, 'fieldR')
  request.r(i5331[8], i5331[9], 0, i5330, 'fieldG')
  request.r(i5331[10], i5331[11], 0, i5330, 'fieldB')
  request.r(i5331[12], i5331[13], 0, i5330, 'fieldA')
  i5330.colorDefault = new pc.Color(i5331[14], i5331[15], i5331[16], i5331[17])
  i5330.colorSelected = new pc.Color(i5331[18], i5331[19], i5331[20], i5331[21])
  return i5330
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i5332 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i5333 = data
  request.r(i5333[0], i5333[1], 0, i5332, 'nameLabel')
  request.r(i5333[2], i5333[3], 0, i5332, 'valueLabel')
  i5332.colorDefault = new pc.Color(i5333[4], i5333[5], i5333[6], i5333[7])
  i5332.colorSelected = new pc.Color(i5333[8], i5333[9], i5333[10], i5333[11])
  return i5332
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i5334 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i5335 = data
  request.r(i5335[0], i5335[1], 0, i5334, 'nameLabel')
  request.r(i5335[2], i5335[3], 0, i5334, 'valueToggle')
  request.r(i5335[4], i5335[5], 0, i5334, 'fieldX')
  request.r(i5335[6], i5335[7], 0, i5334, 'fieldY')
  i5334.colorDefault = new pc.Color(i5335[8], i5335[9], i5335[10], i5335[11])
  i5334.colorSelected = new pc.Color(i5335[12], i5335[13], i5335[14], i5335[15])
  return i5334
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i5336 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i5337 = data
  request.r(i5337[0], i5337[1], 0, i5336, 'nameLabel')
  request.r(i5337[2], i5337[3], 0, i5336, 'valueToggle')
  request.r(i5337[4], i5337[5], 0, i5336, 'fieldX')
  request.r(i5337[6], i5337[7], 0, i5336, 'fieldY')
  request.r(i5337[8], i5337[9], 0, i5336, 'fieldZ')
  i5336.colorDefault = new pc.Color(i5337[10], i5337[11], i5337[12], i5337[13])
  i5336.colorSelected = new pc.Color(i5337[14], i5337[15], i5337[16], i5337[17])
  return i5336
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i5338 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i5339 = data
  request.r(i5339[0], i5339[1], 0, i5338, 'nameLabel')
  request.r(i5339[2], i5339[3], 0, i5338, 'valueToggle')
  request.r(i5339[4], i5339[5], 0, i5338, 'fieldX')
  request.r(i5339[6], i5339[7], 0, i5338, 'fieldY')
  request.r(i5339[8], i5339[9], 0, i5338, 'fieldZ')
  request.r(i5339[10], i5339[11], 0, i5338, 'fieldW')
  i5338.colorDefault = new pc.Color(i5339[12], i5339[13], i5339[14], i5339[15])
  i5338.colorSelected = new pc.Color(i5339[16], i5339[17], i5339[18], i5339[19])
  return i5338
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i5340 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i5341 = data
  i5340.colorDefault = new pc.Color(i5341[0], i5341[1], i5341[2], i5341[3])
  i5340.colorSelected = new pc.Color(i5341[4], i5341[5], i5341[6], i5341[7])
  return i5340
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i5342 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i5343 = data
  i5342.m_Spacing = i5343[0]
  i5342.m_ChildForceExpandWidth = !!i5343[1]
  i5342.m_ChildForceExpandHeight = !!i5343[2]
  i5342.m_ChildControlWidth = !!i5343[3]
  i5342.m_ChildControlHeight = !!i5343[4]
  i5342.m_ChildScaleWidth = !!i5343[5]
  i5342.m_ChildScaleHeight = !!i5343[6]
  i5342.m_ReverseArrangement = !!i5343[7]
  i5342.m_Padding = UnityEngine.RectOffset.FromPaddings(i5343[8], i5343[9], i5343[10], i5343[11])
  i5342.m_ChildAlignment = i5343[12]
  return i5342
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i5344 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i5345 = data
  i5344.colorDefault = new pc.Color(i5345[0], i5345[1], i5345[2], i5345[3])
  i5344.colorSelected = new pc.Color(i5345[4], i5345[5], i5345[6], i5345[7])
  return i5344
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i5346 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i5347 = data
  request.r(i5347[0], i5347[1], 0, i5346, 'nameLabel')
  request.r(i5347[2], i5347[3], 0, i5346, 'header')
  i5346.colorDefault = new pc.Color(i5347[4], i5347[5], i5347[6], i5347[7])
  i5346.colorSelected = new pc.Color(i5347[8], i5347[9], i5347[10], i5347[11])
  return i5346
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i5348 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i5349 = data
  request.r(i5349[0], i5349[1], 0, i5348, 'nameLabel')
  request.r(i5349[2], i5349[3], 0, i5348, 'valueToggle')
  var i5351 = i5349[4]
  var i5350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i5351.length; i += 2) {
  request.r(i5351[i + 0], i5351[i + 1], 1, i5350, '')
  }
  i5348.toggles = i5350
  i5348.colorDefault = new pc.Color(i5349[5], i5349[6], i5349[7], i5349[8])
  i5348.colorSelected = new pc.Color(i5349[9], i5349[10], i5349[11], i5349[12])
  return i5348
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i5354 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i5355 = data
  request.r(i5355[0], i5355[1], 0, i5354, 'nameLabel')
  request.r(i5355[2], i5355[3], 0, i5354, 'valueToggle')
  request.r(i5355[4], i5355[5], 0, i5354, 'checkmarkImage')
  i5354.colorDefault = new pc.Color(i5355[6], i5355[7], i5355[8], i5355[9])
  i5354.colorSelected = new pc.Color(i5355[10], i5355[11], i5355[12], i5355[13])
  return i5354
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i5356 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i5357 = data
  request.r(i5357[0], i5357[1], 0, i5356, 'nameLabel')
  request.r(i5357[2], i5357[3], 0, i5356, 'valueToggle')
  request.r(i5357[4], i5357[5], 0, i5356, 'checkmarkImage')
  i5356.colorDefault = new pc.Color(i5357[6], i5357[7], i5357[8], i5357[9])
  i5356.colorSelected = new pc.Color(i5357[10], i5357[11], i5357[12], i5357[13])
  return i5356
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i5358 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i5359 = data
  request.r(i5359[0], i5359[1], 0, i5358, 'nextButtonText')
  request.r(i5359[2], i5359[3], 0, i5358, 'previousButtonText')
  request.r(i5359[4], i5359[5], 0, i5358, 'nameLabel')
  request.r(i5359[6], i5359[7], 0, i5358, 'valueLabel')
  i5358.colorDefault = new pc.Color(i5359[8], i5359[9], i5359[10], i5359[11])
  i5358.colorSelected = new pc.Color(i5359[12], i5359[13], i5359[14], i5359[15])
  return i5358
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i5360 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i5361 = data
  request.r(i5361[0], i5361[1], 0, i5360, 'nameLabel')
  request.r(i5361[2], i5361[3], 0, i5360, 'valueToggle')
  i5360.colorDefault = new pc.Color(i5361[4], i5361[5], i5361[6], i5361[7])
  i5360.colorSelected = new pc.Color(i5361[8], i5361[9], i5361[10], i5361[11])
  return i5360
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i5362 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i5363 = data
  request.r(i5363[0], i5363[1], 0, i5362, 'nameLabel')
  i5362.colorDefault = new pc.Color(i5363[2], i5363[3], i5363[4], i5363[5])
  i5362.colorSelected = new pc.Color(i5363[6], i5363[7], i5363[8], i5363[9])
  return i5362
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i5364 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i5365 = data
  request.r(i5365[0], i5365[1], 0, i5364, 'nameLabel')
  request.r(i5365[2], i5365[3], 0, i5364, 'valueLabel')
  request.r(i5365[4], i5365[5], 0, i5364, 'progressBarRect')
  i5364.colorDefault = new pc.Color(i5365[6], i5365[7], i5365[8], i5365[9])
  i5364.colorSelected = new pc.Color(i5365[10], i5365[11], i5365[12], i5365[13])
  return i5364
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i5366 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i5367 = data
  request.r(i5367[0], i5367[1], 0, i5366, 'nameLabel')
  request.r(i5367[2], i5367[3], 0, i5366, 'valueLabel')
  i5366.colorDefault = new pc.Color(i5367[4], i5367[5], i5367[6], i5367[7])
  i5366.colorSelected = new pc.Color(i5367[8], i5367[9], i5367[10], i5367[11])
  return i5366
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i5368 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i5369 = data
  request.r(i5369[0], i5369[1], 0, i5368, 'nameLabel')
  request.r(i5369[2], i5369[3], 0, i5368, 'valueLabel')
  i5368.colorDefault = new pc.Color(i5369[4], i5369[5], i5369[6], i5369[7])
  i5368.colorSelected = new pc.Color(i5369[8], i5369[9], i5369[10], i5369[11])
  return i5368
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i5370 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i5371 = data
  request.r(i5371[0], i5371[1], 0, i5370, 'nextButtonText')
  request.r(i5371[2], i5371[3], 0, i5370, 'previousButtonText')
  request.r(i5371[4], i5371[5], 0, i5370, 'nameLabel')
  request.r(i5371[6], i5371[7], 0, i5370, 'valueLabel')
  i5370.colorDefault = new pc.Color(i5371[8], i5371[9], i5371[10], i5371[11])
  i5370.colorSelected = new pc.Color(i5371[12], i5371[13], i5371[14], i5371[15])
  return i5370
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i5372 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i5373 = data
  request.r(i5373[0], i5373[1], 0, i5372, 'nextButtonText')
  request.r(i5373[2], i5373[3], 0, i5372, 'previousButtonText')
  request.r(i5373[4], i5373[5], 0, i5372, 'nameLabel')
  request.r(i5373[6], i5373[7], 0, i5372, 'valueLabel')
  i5372.colorDefault = new pc.Color(i5373[8], i5373[9], i5373[10], i5373[11])
  i5372.colorSelected = new pc.Color(i5373[12], i5373[13], i5373[14], i5373[15])
  return i5372
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i5374 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i5375 = data
  request.r(i5375[0], i5375[1], 0, i5374, 'panel')
  request.r(i5375[2], i5375[3], 0, i5374, 'valuePrefab')
  return i5374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i5376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i5377 = data
  i5376.AdditionalLightsRenderingMode = i5377[0]
  i5376.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i5377[1], i5376.LightRenderingMode)
  i5376.MainLightRenderingModeValue = i5377[2]
  i5376.SupportsMainLightShadows = !!i5377[3]
  i5376.MixedLightingSupported = !!i5377[4]
  i5376.MainLightShadowmapResolutionValue = i5377[5]
  i5376.SupportsSoftShadows = !!i5377[6]
  i5376.SoftShadowQualityValue = i5377[7]
  i5376.ShadowDistance = i5377[8]
  i5376.ShadowCascadeCount = i5377[9]
  i5376.Cascade2Split = i5377[10]
  i5376.Cascade3Split = new pc.Vec2( i5377[11], i5377[12] )
  i5376.Cascade4Split = new pc.Vec3( i5377[13], i5377[14], i5377[15] )
  i5376.CascadeBorder = i5377[16]
  i5376.ShadowDepthBias = i5377[17]
  i5376.ShadowNormalBias = i5377[18]
  i5376.RequireDepthTexture = !!i5377[19]
  i5376.RequireOpaqueTexture = !!i5377[20]
  i5376.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i5377[21], i5376.scriptableRendererData)
  return i5376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i5379 = data
  i5378.Disabled = i5379[0]
  i5378.PerVertex = i5379[1]
  i5378.PerPixel = i5379[2]
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i5381 = data
  i5380.opaqueLayerMask = i5381[0]
  i5380.transparentLayerMask = i5381[1]
  var i5383 = i5381[2]
  var i5382 = []
  for(var i = 0; i < i5383.length; i += 1) {
    i5382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i5383[i + 0]) );
  }
  i5380.RenderObjectsFeatures = i5382
  i5380.name = i5381[3]
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i5387 = data
  i5386.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i5387[0], i5386.settings)
  i5386.name = i5387[1]
  i5386.typeName = i5387[2]
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5389 = data
  var i5391 = i5389[0]
  var i5390 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5391[i + 0]));
  }
  i5388.ShaderCompilationErrors = i5390
  i5388.name = i5389[1]
  i5388.guid = i5389[2]
  var i5393 = i5389[3]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 1) {
    i5392.push( i5393[i + 0] );
  }
  i5388.shaderDefinedKeywords = i5392
  var i5395 = i5389[4]
  var i5394 = []
  for(var i = 0; i < i5395.length; i += 1) {
    i5394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5395[i + 0]) );
  }
  i5388.passes = i5394
  var i5397 = i5389[5]
  var i5396 = []
  for(var i = 0; i < i5397.length; i += 1) {
    i5396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5397[i + 0]) );
  }
  i5388.usePasses = i5396
  var i5399 = i5389[6]
  var i5398 = []
  for(var i = 0; i < i5399.length; i += 1) {
    i5398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5399[i + 0]) );
  }
  i5388.defaultParameterValues = i5398
  request.r(i5389[7], i5389[8], 0, i5388, 'unityFallbackShader')
  i5388.readDepth = !!i5389[9]
  i5388.hasDepthOnlyPass = !!i5389[10]
  i5388.isCreatedByShaderGraph = !!i5389[11]
  i5388.disableBatching = !!i5389[12]
  i5388.compiled = !!i5389[13]
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5403 = data
  i5402.shaderName = i5403[0]
  i5402.errorMessage = i5403[1]
  return i5402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5408 = root || new pc.UnityShaderPass()
  var i5409 = data
  i5408.id = i5409[0]
  i5408.subShaderIndex = i5409[1]
  i5408.name = i5409[2]
  i5408.passType = i5409[3]
  i5408.grabPassTextureName = i5409[4]
  i5408.usePass = !!i5409[5]
  i5408.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5409[6], i5408.zTest)
  i5408.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5409[7], i5408.zWrite)
  i5408.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5409[8], i5408.culling)
  i5408.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5409[9], i5408.blending)
  i5408.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5409[10], i5408.alphaBlending)
  i5408.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5409[11], i5408.colorWriteMask)
  i5408.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5409[12], i5408.offsetUnits)
  i5408.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5409[13], i5408.offsetFactor)
  i5408.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5409[14], i5408.stencilRef)
  i5408.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5409[15], i5408.stencilReadMask)
  i5408.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5409[16], i5408.stencilWriteMask)
  i5408.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5409[17], i5408.stencilOp)
  i5408.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5409[18], i5408.stencilOpFront)
  i5408.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5409[19], i5408.stencilOpBack)
  var i5411 = i5409[20]
  var i5410 = []
  for(var i = 0; i < i5411.length; i += 1) {
    i5410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5411[i + 0]) );
  }
  i5408.tags = i5410
  var i5413 = i5409[21]
  var i5412 = []
  for(var i = 0; i < i5413.length; i += 1) {
    i5412.push( i5413[i + 0] );
  }
  i5408.passDefinedKeywords = i5412
  var i5415 = i5409[22]
  var i5414 = []
  for(var i = 0; i < i5415.length; i += 1) {
    i5414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5415[i + 0]) );
  }
  i5408.passDefinedKeywordGroups = i5414
  var i5417 = i5409[23]
  var i5416 = []
  for(var i = 0; i < i5417.length; i += 1) {
    i5416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5417[i + 0]) );
  }
  i5408.variants = i5416
  var i5419 = i5409[24]
  var i5418 = []
  for(var i = 0; i < i5419.length; i += 1) {
    i5418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5419[i + 0]) );
  }
  i5408.excludedVariants = i5418
  i5408.hasDepthReader = !!i5409[25]
  return i5408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5421 = data
  i5420.val = i5421[0]
  i5420.name = i5421[1]
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5423 = data
  i5422.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5423[0], i5422.src)
  i5422.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5423[1], i5422.dst)
  i5422.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5423[2], i5422.op)
  return i5422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5425 = data
  i5424.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[0], i5424.pass)
  i5424.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[1], i5424.fail)
  i5424.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[2], i5424.zFail)
  i5424.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5425[3], i5424.comp)
  return i5424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5429 = data
  i5428.name = i5429[0]
  i5428.value = i5429[1]
  return i5428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5433 = data
  var i5435 = i5433[0]
  var i5434 = []
  for(var i = 0; i < i5435.length; i += 1) {
    i5434.push( i5435[i + 0] );
  }
  i5432.keywords = i5434
  i5432.hasDiscard = !!i5433[1]
  return i5432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5439 = data
  i5438.passId = i5439[0]
  i5438.subShaderIndex = i5439[1]
  var i5441 = i5439[2]
  var i5440 = []
  for(var i = 0; i < i5441.length; i += 1) {
    i5440.push( i5441[i + 0] );
  }
  i5438.keywords = i5440
  i5438.vertexProgram = i5439[3]
  i5438.fragmentProgram = i5439[4]
  i5438.exportedForWebGl2 = !!i5439[5]
  i5438.readDepth = !!i5439[6]
  return i5438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5445 = data
  request.r(i5445[0], i5445[1], 0, i5444, 'shader')
  i5444.pass = i5445[2]
  return i5444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5449 = data
  i5448.name = i5449[0]
  i5448.type = i5449[1]
  i5448.value = new pc.Vec4( i5449[2], i5449[3], i5449[4], i5449[5] )
  i5448.textureValue = i5449[6]
  i5448.shaderPropertyFlag = i5449[7]
  return i5448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5451 = data
  i5450.name = i5451[0]
  request.r(i5451[1], i5451[2], 0, i5450, 'texture')
  i5450.aabb = i5451[3]
  i5450.vertices = i5451[4]
  i5450.triangles = i5451[5]
  i5450.textureRect = UnityEngine.Rect.MinMaxRect(i5451[6], i5451[7], i5451[8], i5451[9])
  i5450.packedRect = UnityEngine.Rect.MinMaxRect(i5451[10], i5451[11], i5451[12], i5451[13])
  i5450.border = new pc.Vec4( i5451[14], i5451[15], i5451[16], i5451[17] )
  i5450.transparency = i5451[18]
  i5450.bounds = i5451[19]
  i5450.pixelsPerUnit = i5451[20]
  i5450.textureWidth = i5451[21]
  i5450.textureHeight = i5451[22]
  i5450.nativeSize = new pc.Vec2( i5451[23], i5451[24] )
  i5450.pivot = new pc.Vec2( i5451[25], i5451[26] )
  i5450.textureRectOffset = new pc.Vec2( i5451[27], i5451[28] )
  return i5450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5453 = data
  i5452.name = i5453[0]
  return i5452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5455 = data
  i5454.name = i5455[0]
  i5454.ascent = i5455[1]
  i5454.originalLineHeight = i5455[2]
  i5454.fontSize = i5455[3]
  var i5457 = i5455[4]
  var i5456 = []
  for(var i = 0; i < i5457.length; i += 1) {
    i5456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5457[i + 0]) );
  }
  i5454.characterInfo = i5456
  request.r(i5455[5], i5455[6], 0, i5454, 'texture')
  i5454.originalFontSize = i5455[7]
  return i5454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5461 = data
  i5460.index = i5461[0]
  i5460.advance = i5461[1]
  i5460.bearing = i5461[2]
  i5460.glyphWidth = i5461[3]
  i5460.glyphHeight = i5461[4]
  i5460.minX = i5461[5]
  i5460.maxX = i5461[6]
  i5460.minY = i5461[7]
  i5460.maxY = i5461[8]
  i5460.uvBottomLeftX = i5461[9]
  i5460.uvBottomLeftY = i5461[10]
  i5460.uvBottomRightX = i5461[11]
  i5460.uvBottomRightY = i5461[12]
  i5460.uvTopLeftX = i5461[13]
  i5460.uvTopLeftY = i5461[14]
  i5460.uvTopRightX = i5461[15]
  i5460.uvTopRightY = i5461[16]
  return i5460
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5462 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5463 = data
  i5462.useSafeMode = !!i5463[0]
  i5462.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5463[1], i5462.safeModeOptions)
  i5462.timeScale = i5463[2]
  i5462.unscaledTimeScale = i5463[3]
  i5462.useSmoothDeltaTime = !!i5463[4]
  i5462.maxSmoothUnscaledTime = i5463[5]
  i5462.rewindCallbackMode = i5463[6]
  i5462.showUnityEditorReport = !!i5463[7]
  i5462.logBehaviour = i5463[8]
  i5462.drawGizmos = !!i5463[9]
  i5462.defaultRecyclable = !!i5463[10]
  i5462.defaultAutoPlay = i5463[11]
  i5462.defaultUpdateType = i5463[12]
  i5462.defaultTimeScaleIndependent = !!i5463[13]
  i5462.defaultEaseType = i5463[14]
  i5462.defaultEaseOvershootOrAmplitude = i5463[15]
  i5462.defaultEasePeriod = i5463[16]
  i5462.defaultAutoKill = !!i5463[17]
  i5462.defaultLoopType = i5463[18]
  i5462.debugMode = !!i5463[19]
  i5462.debugStoreTargetId = !!i5463[20]
  i5462.showPreviewPanel = !!i5463[21]
  i5462.storeSettingsLocation = i5463[22]
  i5462.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5463[23], i5462.modules)
  i5462.createASMDEF = !!i5463[24]
  i5462.showPlayingTweens = !!i5463[25]
  i5462.showPausedTweens = !!i5463[26]
  return i5462
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5464 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5465 = data
  i5464.logBehaviour = i5465[0]
  i5464.nestedTweenFailureBehaviour = i5465[1]
  return i5464
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5466 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5467 = data
  i5466.showPanel = !!i5467[0]
  i5466.audioEnabled = !!i5467[1]
  i5466.physicsEnabled = !!i5467[2]
  i5466.physics2DEnabled = !!i5467[3]
  i5466.spriteEnabled = !!i5467[4]
  i5466.uiEnabled = !!i5467[5]
  i5466.textMeshProEnabled = !!i5467[6]
  i5466.tk2DEnabled = !!i5467[7]
  i5466.deAudioEnabled = !!i5467[8]
  i5466.deUnityExtendedEnabled = !!i5467[9]
  i5466.epoOutlineEnabled = !!i5467[10]
  return i5466
}

Deserializers["Project.Scripts.Game.Constants.CustomPalette"] = function (request, data, root) {
  var i5468 = root || request.c( 'Project.Scripts.Game.Constants.CustomPalette' )
  var i5469 = data
  var i5471 = i5469[0]
  var i5470 = []
  for(var i = 0; i < i5471.length; i += 1) {
    i5470.push( request.d('Project.Scripts.Game.Constants.ColorEntry', i5471[i + 0]) );
  }
  i5468.colors = i5470
  return i5468
}

Deserializers["Project.Scripts.Game.Constants.ColorEntry"] = function (request, data, root) {
  var i5474 = root || request.c( 'Project.Scripts.Game.Constants.ColorEntry' )
  var i5475 = data
  i5474.Name = i5475[0]
  i5474.Color = new pc.Color(i5475[1], i5475[2], i5475[3], i5475[4])
  return i5474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5477 = data
  var i5479 = i5477[0]
  var i5478 = []
  for(var i = 0; i < i5479.length; i += 1) {
    i5478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5479[i + 0]) );
  }
  i5476.files = i5478
  i5476.componentToPrefabIds = i5477[1]
  return i5476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5483 = data
  i5482.path = i5483[0]
  request.r(i5483[1], i5483[2], 0, i5482, 'unityObject')
  return i5482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5485 = data
  var i5487 = i5485[0]
  var i5486 = []
  for(var i = 0; i < i5487.length; i += 1) {
    i5486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5487[i + 0]) );
  }
  i5484.scriptsExecutionOrder = i5486
  var i5489 = i5485[1]
  var i5488 = []
  for(var i = 0; i < i5489.length; i += 1) {
    i5488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5489[i + 0]) );
  }
  i5484.sortingLayers = i5488
  var i5491 = i5485[2]
  var i5490 = []
  for(var i = 0; i < i5491.length; i += 1) {
    i5490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5491[i + 0]) );
  }
  i5484.cullingLayers = i5490
  i5484.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5485[3], i5484.timeSettings)
  i5484.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5485[4], i5484.physicsSettings)
  i5484.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5485[5], i5484.physics2DSettings)
  i5484.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5485[6], i5484.qualitySettings)
  i5484.enableRealtimeShadows = !!i5485[7]
  i5484.enableAutoInstancing = !!i5485[8]
  i5484.enableStaticBatching = !!i5485[9]
  i5484.enableDynamicBatching = !!i5485[10]
  i5484.usePreservativeDynamicBatching = !!i5485[11]
  i5484.lightmapEncodingQuality = i5485[12]
  i5484.desiredColorSpace = i5485[13]
  var i5493 = i5485[14]
  var i5492 = []
  for(var i = 0; i < i5493.length; i += 1) {
    i5492.push( i5493[i + 0] );
  }
  i5484.allTags = i5492
  return i5484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5497 = data
  i5496.name = i5497[0]
  i5496.value = i5497[1]
  return i5496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5501 = data
  i5500.id = i5501[0]
  i5500.name = i5501[1]
  i5500.value = i5501[2]
  return i5500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5505 = data
  i5504.id = i5505[0]
  i5504.name = i5505[1]
  return i5504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5507 = data
  i5506.fixedDeltaTime = i5507[0]
  i5506.maximumDeltaTime = i5507[1]
  i5506.timeScale = i5507[2]
  i5506.maximumParticleTimestep = i5507[3]
  return i5506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5509 = data
  i5508.gravity = new pc.Vec3( i5509[0], i5509[1], i5509[2] )
  i5508.defaultSolverIterations = i5509[3]
  i5508.bounceThreshold = i5509[4]
  i5508.autoSyncTransforms = !!i5509[5]
  i5508.autoSimulation = !!i5509[6]
  var i5511 = i5509[7]
  var i5510 = []
  for(var i = 0; i < i5511.length; i += 1) {
    i5510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5511[i + 0]) );
  }
  i5508.collisionMatrix = i5510
  return i5508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5515 = data
  i5514.enabled = !!i5515[0]
  i5514.layerId = i5515[1]
  i5514.otherLayerId = i5515[2]
  return i5514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5517 = data
  request.r(i5517[0], i5517[1], 0, i5516, 'material')
  i5516.gravity = new pc.Vec2( i5517[2], i5517[3] )
  i5516.positionIterations = i5517[4]
  i5516.velocityIterations = i5517[5]
  i5516.velocityThreshold = i5517[6]
  i5516.maxLinearCorrection = i5517[7]
  i5516.maxAngularCorrection = i5517[8]
  i5516.maxTranslationSpeed = i5517[9]
  i5516.maxRotationSpeed = i5517[10]
  i5516.baumgarteScale = i5517[11]
  i5516.baumgarteTOIScale = i5517[12]
  i5516.timeToSleep = i5517[13]
  i5516.linearSleepTolerance = i5517[14]
  i5516.angularSleepTolerance = i5517[15]
  i5516.defaultContactOffset = i5517[16]
  i5516.autoSimulation = !!i5517[17]
  i5516.queriesHitTriggers = !!i5517[18]
  i5516.queriesStartInColliders = !!i5517[19]
  i5516.callbacksOnDisable = !!i5517[20]
  i5516.reuseCollisionCallbacks = !!i5517[21]
  i5516.autoSyncTransforms = !!i5517[22]
  var i5519 = i5517[23]
  var i5518 = []
  for(var i = 0; i < i5519.length; i += 1) {
    i5518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5519[i + 0]) );
  }
  i5516.collisionMatrix = i5518
  return i5516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5523 = data
  i5522.enabled = !!i5523[0]
  i5522.layerId = i5523[1]
  i5522.otherLayerId = i5523[2]
  return i5522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5525 = data
  var i5527 = i5525[0]
  var i5526 = []
  for(var i = 0; i < i5527.length; i += 1) {
    i5526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5527[i + 0]) );
  }
  i5524.qualityLevels = i5526
  var i5529 = i5525[1]
  var i5528 = []
  for(var i = 0; i < i5529.length; i += 1) {
    i5528.push( i5529[i + 0] );
  }
  i5524.names = i5528
  i5524.shadows = i5525[2]
  i5524.anisotropicFiltering = i5525[3]
  i5524.antiAliasing = i5525[4]
  i5524.lodBias = i5525[5]
  i5524.shadowCascades = i5525[6]
  i5524.shadowDistance = i5525[7]
  i5524.shadowmaskMode = i5525[8]
  i5524.shadowProjection = i5525[9]
  i5524.shadowResolution = i5525[10]
  i5524.softParticles = !!i5525[11]
  i5524.softVegetation = !!i5525[12]
  i5524.activeColorSpace = i5525[13]
  i5524.desiredColorSpace = i5525[14]
  i5524.masterTextureLimit = i5525[15]
  i5524.maxQueuedFrames = i5525[16]
  i5524.particleRaycastBudget = i5525[17]
  i5524.pixelLightCount = i5525[18]
  i5524.realtimeReflectionProbes = !!i5525[19]
  i5524.shadowCascade2Split = i5525[20]
  i5524.shadowCascade4Split = new pc.Vec3( i5525[21], i5525[22], i5525[23] )
  i5524.streamingMipmapsActive = !!i5525[24]
  i5524.vSyncCount = i5525[25]
  i5524.asyncUploadBufferSize = i5525[26]
  i5524.asyncUploadTimeSlice = i5525[27]
  i5524.billboardsFaceCameraPosition = !!i5525[28]
  i5524.shadowNearPlaneOffset = i5525[29]
  i5524.streamingMipmapsMemoryBudget = i5525[30]
  i5524.maximumLODLevel = i5525[31]
  i5524.streamingMipmapsAddAllCameras = !!i5525[32]
  i5524.streamingMipmapsMaxLevelReduction = i5525[33]
  i5524.streamingMipmapsRenderersPerFrame = i5525[34]
  i5524.resolutionScalingFixedDPIFactor = i5525[35]
  i5524.streamingMipmapsMaxFileIORequests = i5525[36]
  i5524.currentQualityLevel = i5525[37]
  return i5524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5535 = data
  i5534.weight = i5535[0]
  i5534.vertices = i5535[1]
  i5534.normals = i5535[2]
  i5534.tangents = i5535[3]
  return i5534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i5536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i5537 = data
  i5536.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5537[0], i5536.Event)
  i5536.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i5537[1], i5536.filterSettings)
  i5536.overrideMaterialId = i5537[2]
  i5536.overrideMaterialPassIndex = i5537[3]
  i5536.overrideShaderId = i5537[4]
  i5536.overrideShaderPassIndex = i5537[5]
  i5536.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5537[6], i5536.overrideMode)
  i5536.overrideDepthState = !!i5537[7]
  i5536.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5537[8], i5536.depthCompareFunction)
  i5536.enableWrite = !!i5537[9]
  i5536.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i5537[10], i5536.stencilSettings)
  i5536.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i5537[11], i5536.cameraSettings)
  return i5536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i5538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i5539 = data
  i5538.Value = i5539[0]
  return i5538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i5540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i5541 = data
  i5540.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5541[0], i5540.RenderQueueType)
  i5540.LayerMask = i5541[1]
  var i5543 = i5541[2]
  var i5542 = []
  for(var i = 0; i < i5543.length; i += 1) {
    i5542.push( i5543[i + 0] );
  }
  i5540.PassNames = i5542
  return i5540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i5544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i5545 = data
  i5544.overrideStencilState = !!i5545[0]
  i5544.stencilReference = i5545[1]
  i5544.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5545[2], i5544.stencilCompareFunctionValue)
  i5544.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5545[3], i5544.passOperationValue)
  i5544.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5545[4], i5544.failOperationValue)
  i5544.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5545[5], i5544.zFailOperationValue)
  return i5544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i5546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i5547 = data
  i5546.overrideCamera = !!i5547[0]
  i5546.restoreCamera = !!i5547[1]
  i5546.offset = new pc.Vec4( i5547[2], i5547[3], i5547[4], i5547[5] )
  i5546.cameraFieldOfView = i5547[6]
  return i5546
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[95],"96":[17],"97":[98],"99":[98],"100":[98],"101":[98],"102":[98],"103":[98],"104":[98],"105":[106],"107":[106],"108":[106],"109":[106],"110":[106],"111":[106],"112":[106],"113":[106],"114":[106],"115":[106],"116":[106],"117":[106],"118":[106],"119":[17],"120":[3],"121":[122],"123":[122],"32":[31],"124":[36],"125":[36],"126":[38],"16":[14],"63":[31],"127":[17],"128":[17],"22":[21],"129":[130],"131":[31],"132":[31],"34":[32],"36":[35,31],"133":[31],"33":[32],"46":[31],"134":[31],"70":[31],"135":[31],"50":[31],"136":[31],"45":[31],"52":[31],"137":[31],"138":[35,31],"139":[31],"51":[31],"49":[31],"140":[31],"38":[35,31],"56":[31],"141":[41],"142":[41],"42":[41],"143":[41],"144":[17],"20":[17],"145":[130],"146":[147],"148":[41],"149":[32],"150":[130]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","Project.Scripts.HexCore.HexCell","UnityEngine.ParticleSystem","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider","UnityEngine.ParticleSystemRenderer","Project.Scripts.HexCore.HexStack","Project.Scripts.HexCore.Hex","Project.Scripts.InputSystem.DragHandler","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Project.Scripts.HexCore.HexGrid","Project.Scripts.Game.EntryPoint","Project.Scripts.Game.EndGame","Project.Scripts.HexCore.ChainReactionOfHex","Project.Scripts.UI.TutorialPointer","Project.Scripts.UI.TimerView","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.GameObject","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","DG.Tweening.Core.DOTweenSettings","Project.Scripts.Game.Constants.CustomPalette","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","DragMe","ScrollDetailTexture","ShowSliderValue","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.ScriptMachine","KeyFieldUnSelect","UnityEngine.UI.Selectable","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "SecondProject";

Deserializers.lunaInitializationTime = "05/05/2026 07:49:44";

Deserializers.lunaDaysRunning = "7.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "NewThreeRow-Standard-Materials";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "de0a43782df49ee41925f5872f728e15";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1704";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3497";

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

Deserializers.buildID = "d7398322-5dd0-4d62-b7bb-5a2b482a2429";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

