var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.JointSpring' )
  var i1585 = data
  i1584.spring = i1585[0]
  i1584.damper = i1585[1]
  i1584.targetPosition = i1585[2]
  return i1584
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.JointMotor' )
  var i1587 = data
  i1586.m_TargetVelocity = i1587[0]
  i1586.m_Force = i1587[1]
  i1586.m_FreeSpin = i1587[2]
  return i1586
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.JointLimits' )
  var i1589 = data
  i1588.m_Min = i1589[0]
  i1588.m_Max = i1589[1]
  i1588.m_Bounciness = i1589[2]
  i1588.m_BounceMinVelocity = i1589[3]
  i1588.m_ContactDistance = i1589[4]
  i1588.minBounce = i1589[5]
  i1588.maxBounce = i1589[6]
  return i1588
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.JointDrive' )
  var i1591 = data
  i1590.m_PositionSpring = i1591[0]
  i1590.m_PositionDamper = i1591[1]
  i1590.m_MaximumForce = i1591[2]
  i1590.m_UseAcceleration = i1591[3]
  return i1590
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1593 = data
  i1592.m_Spring = i1593[0]
  i1592.m_Damper = i1593[1]
  return i1592
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1595 = data
  i1594.m_Limit = i1595[0]
  i1594.m_Bounciness = i1595[1]
  i1594.m_ContactDistance = i1595[2]
  return i1594
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1597 = data
  i1596.m_ExtremumSlip = i1597[0]
  i1596.m_ExtremumValue = i1597[1]
  i1596.m_AsymptoteSlip = i1597[2]
  i1596.m_AsymptoteValue = i1597[3]
  i1596.m_Stiffness = i1597[4]
  return i1596
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1599 = data
  i1598.m_LowerAngle = i1599[0]
  i1598.m_UpperAngle = i1599[1]
  return i1598
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1601 = data
  i1600.m_MotorSpeed = i1601[0]
  i1600.m_MaximumMotorTorque = i1601[1]
  return i1600
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1603 = data
  i1602.m_DampingRatio = i1603[0]
  i1602.m_Frequency = i1603[1]
  i1602.m_Angle = i1603[2]
  return i1602
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1605 = data
  i1604.m_LowerTranslation = i1605[0]
  i1604.m_UpperTranslation = i1605[1]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1607 = data
  i1606.position = new pc.Vec3( i1607[0], i1607[1], i1607[2] )
  i1606.scale = new pc.Vec3( i1607[3], i1607[4], i1607[5] )
  i1606.rotation = new pc.Quat(i1607[6], i1607[7], i1607[8], i1607[9])
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'sharedMesh')
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'additionalVertexStreams')
  i1610.enabled = !!i1611[2]
  request.r(i1611[3], i1611[4], 0, i1610, 'sharedMaterial')
  var i1613 = i1611[5]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 2) {
  request.r(i1613[i + 0], i1613[i + 1], 2, i1612, '')
  }
  i1610.sharedMaterials = i1612
  i1610.receiveShadows = !!i1611[6]
  i1610.shadowCastingMode = i1611[7]
  i1610.sortingLayerID = i1611[8]
  i1610.sortingOrder = i1611[9]
  i1610.lightmapIndex = i1611[10]
  i1610.lightmapSceneIndex = i1611[11]
  i1610.lightmapScaleOffset = new pc.Vec4( i1611[12], i1611[13], i1611[14], i1611[15] )
  i1610.lightProbeUsage = i1611[16]
  i1610.reflectionProbeUsage = i1611[17]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1617 = data
  i1616.name = i1617[0]
  i1616.tagId = i1617[1]
  i1616.enabled = !!i1617[2]
  i1616.isStatic = !!i1617[3]
  i1616.layer = i1617[4]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.halfPrecision = !!i1619[1]
  i1618.useSimplification = !!i1619[2]
  i1618.useUInt32IndexFormat = !!i1619[3]
  i1618.vertexCount = i1619[4]
  i1618.aabb = i1619[5]
  var i1621 = i1619[6]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( !!i1621[i + 0] );
  }
  i1618.streams = i1620
  i1618.vertices = i1619[7]
  var i1623 = i1619[8]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1623[i + 0]) );
  }
  i1618.subMeshes = i1622
  var i1625 = i1619[9]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 16) {
    i1624.push( new pc.Mat4().setData(i1625[i + 0], i1625[i + 1], i1625[i + 2], i1625[i + 3],  i1625[i + 4], i1625[i + 5], i1625[i + 6], i1625[i + 7],  i1625[i + 8], i1625[i + 9], i1625[i + 10], i1625[i + 11],  i1625[i + 12], i1625[i + 13], i1625[i + 14], i1625[i + 15]) );
  }
  i1618.bindposes = i1624
  var i1627 = i1619[10]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1627[i + 0]) );
  }
  i1618.blendShapes = i1626
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1633 = data
  i1632.triangles = i1633[0]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1639 = data
  i1638.name = i1639[0]
  var i1641 = i1639[1]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1641[i + 0]) );
  }
  i1638.frames = i1640
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1642 = root || new pc.UnityMaterial()
  var i1643 = data
  i1642.name = i1643[0]
  request.r(i1643[1], i1643[2], 0, i1642, 'shader')
  i1642.renderQueue = i1643[3]
  i1642.enableInstancing = !!i1643[4]
  var i1645 = i1643[5]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1645[i + 0]) );
  }
  i1642.floatParameters = i1644
  var i1647 = i1643[6]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1647[i + 0]) );
  }
  i1642.colorParameters = i1646
  var i1649 = i1643[7]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1649[i + 0]) );
  }
  i1642.vectorParameters = i1648
  var i1651 = i1643[8]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1651[i + 0]) );
  }
  i1642.textureParameters = i1650
  var i1653 = i1643[9]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1653[i + 0]) );
  }
  i1642.materialFlags = i1652
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.value = i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1661 = data
  i1660.name = i1661[0]
  i1660.value = new pc.Color(i1661[1], i1661[2], i1661[3], i1661[4])
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1665 = data
  i1664.name = i1665[0]
  i1664.value = new pc.Vec4( i1665[1], i1665[2], i1665[3], i1665[4] )
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1669 = data
  i1668.name = i1669[0]
  request.r(i1669[1], i1669[2], 0, i1668, 'value')
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.enabled = !!i1673[1]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.width = i1675[1]
  i1674.height = i1675[2]
  i1674.mipmapCount = i1675[3]
  i1674.anisoLevel = i1675[4]
  i1674.filterMode = i1675[5]
  i1674.hdr = !!i1675[6]
  i1674.format = i1675[7]
  i1674.wrapMode = i1675[8]
  i1674.alphaIsTransparency = !!i1675[9]
  i1674.alphaSource = i1675[10]
  i1674.graphicsFormat = i1675[11]
  i1674.sRGBTexture = !!i1675[12]
  i1674.desiredColorSpace = i1675[13]
  i1674.wrapU = i1675[14]
  i1674.wrapV = i1675[15]
  return i1674
}

Deserializers["Project.Scripts.HexCore.HexCell"] = function (request, data, root) {
  var i1676 = root || request.c( 'Project.Scripts.HexCore.HexCell' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, '_highlightMaterial')
  request.r(i1677[2], i1677[3], 0, i1676, '_defaultMaterial')
  request.r(i1677[4], i1677[5], 0, i1676, '_meshRenderer')
  request.r(i1677[6], i1677[7], 0, i1676, '_effect')
  request.r(i1677[8], i1677[9], 0, i1676, '_audioSource')
  request.r(i1677[10], i1677[11], 0, i1676, '_destroyClip')
  i1676.<IsEmpty>k__BackingField = !!i1677[12]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1679 = data
  i1678.center = new pc.Vec3( i1679[0], i1679[1], i1679[2] )
  i1678.size = new pc.Vec3( i1679[3], i1679[4], i1679[5] )
  i1678.enabled = !!i1679[6]
  i1678.isTrigger = !!i1679[7]
  request.r(i1679[8], i1679[9], 0, i1678, 'material')
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'clip')
  request.r(i1681[2], i1681[3], 0, i1680, 'outputAudioMixerGroup')
  i1680.playOnAwake = !!i1681[4]
  i1680.loop = !!i1681[5]
  i1680.time = i1681[6]
  i1680.volume = i1681[7]
  i1680.pitch = i1681[8]
  i1680.enabled = !!i1681[9]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1683 = data
  i1682.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1683[0], i1682.main)
  i1682.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1683[1], i1682.colorBySpeed)
  i1682.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1683[2], i1682.colorOverLifetime)
  i1682.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1683[3], i1682.emission)
  i1682.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1683[4], i1682.rotationBySpeed)
  i1682.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1683[5], i1682.rotationOverLifetime)
  i1682.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1683[6], i1682.shape)
  i1682.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1683[7], i1682.sizeBySpeed)
  i1682.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1683[8], i1682.sizeOverLifetime)
  i1682.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1683[9], i1682.textureSheetAnimation)
  i1682.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1683[10], i1682.velocityOverLifetime)
  i1682.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1683[11], i1682.noise)
  i1682.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1683[12], i1682.inheritVelocity)
  i1682.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1683[13], i1682.forceOverLifetime)
  i1682.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1683[14], i1682.limitVelocityOverLifetime)
  i1682.useAutoRandomSeed = !!i1683[15]
  i1682.randomSeed = i1683[16]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1684 = root || new pc.ParticleSystemMain()
  var i1685 = data
  i1684.duration = i1685[0]
  i1684.loop = !!i1685[1]
  i1684.prewarm = !!i1685[2]
  i1684.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[3], i1684.startDelay)
  i1684.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[4], i1684.startLifetime)
  i1684.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[5], i1684.startSpeed)
  i1684.startSize3D = !!i1685[6]
  i1684.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[7], i1684.startSizeX)
  i1684.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[8], i1684.startSizeY)
  i1684.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[9], i1684.startSizeZ)
  i1684.startRotation3D = !!i1685[10]
  i1684.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[11], i1684.startRotationX)
  i1684.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[12], i1684.startRotationY)
  i1684.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[13], i1684.startRotationZ)
  i1684.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1685[14], i1684.startColor)
  i1684.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[15], i1684.gravityModifier)
  i1684.simulationSpace = i1685[16]
  request.r(i1685[17], i1685[18], 0, i1684, 'customSimulationSpace')
  i1684.simulationSpeed = i1685[19]
  i1684.useUnscaledTime = !!i1685[20]
  i1684.scalingMode = i1685[21]
  i1684.playOnAwake = !!i1685[22]
  i1684.maxParticles = i1685[23]
  i1684.emitterVelocityMode = i1685[24]
  i1684.stopAction = i1685[25]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1686 = root || new pc.MinMaxCurve()
  var i1687 = data
  i1686.mode = i1687[0]
  i1686.curveMin = new pc.AnimationCurve( { keys_flow: i1687[1] } )
  i1686.curveMax = new pc.AnimationCurve( { keys_flow: i1687[2] } )
  i1686.curveMultiplier = i1687[3]
  i1686.constantMin = i1687[4]
  i1686.constantMax = i1687[5]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1688 = root || new pc.MinMaxGradient()
  var i1689 = data
  i1688.mode = i1689[0]
  i1688.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1689[1], i1688.gradientMin)
  i1688.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1689[2], i1688.gradientMax)
  i1688.colorMin = new pc.Color(i1689[3], i1689[4], i1689[5], i1689[6])
  i1688.colorMax = new pc.Color(i1689[7], i1689[8], i1689[9], i1689[10])
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1691 = data
  i1690.mode = i1691[0]
  var i1693 = i1691[1]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1693[i + 0]) );
  }
  i1690.colorKeys = i1692
  var i1695 = i1691[2]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1695[i + 0]) );
  }
  i1690.alphaKeys = i1694
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1696 = root || new pc.ParticleSystemColorBySpeed()
  var i1697 = data
  i1696.enabled = !!i1697[0]
  i1696.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1697[1], i1696.color)
  i1696.range = new pc.Vec2( i1697[2], i1697[3] )
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1701 = data
  i1700.color = new pc.Color(i1701[0], i1701[1], i1701[2], i1701[3])
  i1700.time = i1701[4]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1705 = data
  i1704.alpha = i1705[0]
  i1704.time = i1705[1]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1706 = root || new pc.ParticleSystemColorOverLifetime()
  var i1707 = data
  i1706.enabled = !!i1707[0]
  i1706.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1707[1], i1706.color)
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1708 = root || new pc.ParticleSystemEmitter()
  var i1709 = data
  i1708.enabled = !!i1709[0]
  i1708.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[1], i1708.rateOverTime)
  i1708.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[2], i1708.rateOverDistance)
  var i1711 = i1709[3]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1711[i + 0]) );
  }
  i1708.bursts = i1710
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1714 = root || new pc.ParticleSystemBurst()
  var i1715 = data
  i1714.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[0], i1714.count)
  i1714.cycleCount = i1715[1]
  i1714.minCount = i1715[2]
  i1714.maxCount = i1715[3]
  i1714.repeatInterval = i1715[4]
  i1714.time = i1715[5]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1716 = root || new pc.ParticleSystemRotationBySpeed()
  var i1717 = data
  i1716.enabled = !!i1717[0]
  i1716.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[1], i1716.x)
  i1716.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[2], i1716.y)
  i1716.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[3], i1716.z)
  i1716.separateAxes = !!i1717[4]
  i1716.range = new pc.Vec2( i1717[5], i1717[6] )
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1718 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1719 = data
  i1718.enabled = !!i1719[0]
  i1718.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1719[1], i1718.x)
  i1718.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1719[2], i1718.y)
  i1718.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1719[3], i1718.z)
  i1718.separateAxes = !!i1719[4]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1720 = root || new pc.ParticleSystemShape()
  var i1721 = data
  i1720.enabled = !!i1721[0]
  i1720.shapeType = i1721[1]
  i1720.randomDirectionAmount = i1721[2]
  i1720.sphericalDirectionAmount = i1721[3]
  i1720.randomPositionAmount = i1721[4]
  i1720.alignToDirection = !!i1721[5]
  i1720.radius = i1721[6]
  i1720.radiusMode = i1721[7]
  i1720.radiusSpread = i1721[8]
  i1720.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1721[9], i1720.radiusSpeed)
  i1720.radiusThickness = i1721[10]
  i1720.angle = i1721[11]
  i1720.length = i1721[12]
  i1720.boxThickness = new pc.Vec3( i1721[13], i1721[14], i1721[15] )
  i1720.meshShapeType = i1721[16]
  request.r(i1721[17], i1721[18], 0, i1720, 'mesh')
  request.r(i1721[19], i1721[20], 0, i1720, 'meshRenderer')
  request.r(i1721[21], i1721[22], 0, i1720, 'skinnedMeshRenderer')
  i1720.useMeshMaterialIndex = !!i1721[23]
  i1720.meshMaterialIndex = i1721[24]
  i1720.useMeshColors = !!i1721[25]
  i1720.normalOffset = i1721[26]
  i1720.arc = i1721[27]
  i1720.arcMode = i1721[28]
  i1720.arcSpread = i1721[29]
  i1720.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1721[30], i1720.arcSpeed)
  i1720.donutRadius = i1721[31]
  i1720.position = new pc.Vec3( i1721[32], i1721[33], i1721[34] )
  i1720.rotation = new pc.Vec3( i1721[35], i1721[36], i1721[37] )
  i1720.scale = new pc.Vec3( i1721[38], i1721[39], i1721[40] )
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1722 = root || new pc.ParticleSystemSizeBySpeed()
  var i1723 = data
  i1722.enabled = !!i1723[0]
  i1722.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[1], i1722.x)
  i1722.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[2], i1722.y)
  i1722.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[3], i1722.z)
  i1722.separateAxes = !!i1723[4]
  i1722.range = new pc.Vec2( i1723[5], i1723[6] )
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1724 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1725 = data
  i1724.enabled = !!i1725[0]
  i1724.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[1], i1724.x)
  i1724.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[2], i1724.y)
  i1724.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[3], i1724.z)
  i1724.separateAxes = !!i1725[4]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1726 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1727 = data
  i1726.enabled = !!i1727[0]
  i1726.mode = i1727[1]
  i1726.animation = i1727[2]
  i1726.numTilesX = i1727[3]
  i1726.numTilesY = i1727[4]
  i1726.useRandomRow = !!i1727[5]
  i1726.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[6], i1726.frameOverTime)
  i1726.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[7], i1726.startFrame)
  i1726.cycleCount = i1727[8]
  i1726.rowIndex = i1727[9]
  i1726.flipU = i1727[10]
  i1726.flipV = i1727[11]
  i1726.spriteCount = i1727[12]
  var i1729 = i1727[13]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 2, i1728, '')
  }
  i1726.sprites = i1728
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1732 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1733 = data
  i1732.enabled = !!i1733[0]
  i1732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[1], i1732.x)
  i1732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[2], i1732.y)
  i1732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[3], i1732.z)
  i1732.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[4], i1732.radial)
  i1732.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[5], i1732.speedModifier)
  i1732.space = i1733[6]
  i1732.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[7], i1732.orbitalX)
  i1732.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[8], i1732.orbitalY)
  i1732.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[9], i1732.orbitalZ)
  i1732.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[10], i1732.orbitalOffsetX)
  i1732.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[11], i1732.orbitalOffsetY)
  i1732.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[12], i1732.orbitalOffsetZ)
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1734 = root || new pc.ParticleSystemNoise()
  var i1735 = data
  i1734.enabled = !!i1735[0]
  i1734.separateAxes = !!i1735[1]
  i1734.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[2], i1734.strengthX)
  i1734.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[3], i1734.strengthY)
  i1734.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[4], i1734.strengthZ)
  i1734.frequency = i1735[5]
  i1734.damping = !!i1735[6]
  i1734.octaveCount = i1735[7]
  i1734.octaveMultiplier = i1735[8]
  i1734.octaveScale = i1735[9]
  i1734.quality = i1735[10]
  i1734.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[11], i1734.scrollSpeed)
  i1734.scrollSpeedMultiplier = i1735[12]
  i1734.remapEnabled = !!i1735[13]
  i1734.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[14], i1734.remapX)
  i1734.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[15], i1734.remapY)
  i1734.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[16], i1734.remapZ)
  i1734.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[17], i1734.positionAmount)
  i1734.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[18], i1734.rotationAmount)
  i1734.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[19], i1734.sizeAmount)
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1736 = root || new pc.ParticleSystemInheritVelocity()
  var i1737 = data
  i1736.enabled = !!i1737[0]
  i1736.mode = i1737[1]
  i1736.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[2], i1736.curve)
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1738 = root || new pc.ParticleSystemForceOverLifetime()
  var i1739 = data
  i1738.enabled = !!i1739[0]
  i1738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[1], i1738.x)
  i1738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[2], i1738.y)
  i1738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[3], i1738.z)
  i1738.space = i1739[4]
  i1738.randomized = !!i1739[5]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1740 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1741 = data
  i1740.enabled = !!i1741[0]
  i1740.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[1], i1740.limit)
  i1740.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[2], i1740.limitX)
  i1740.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[3], i1740.limitY)
  i1740.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[4], i1740.limitZ)
  i1740.dampen = i1741[5]
  i1740.separateAxes = !!i1741[6]
  i1740.space = i1741[7]
  i1740.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1741[8], i1740.drag)
  i1740.multiplyDragByParticleSize = !!i1741[9]
  i1740.multiplyDragByParticleVelocity = !!i1741[10]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, 'mesh')
  i1742.meshCount = i1743[2]
  i1742.activeVertexStreamsCount = i1743[3]
  i1742.alignment = i1743[4]
  i1742.renderMode = i1743[5]
  i1742.sortMode = i1743[6]
  i1742.lengthScale = i1743[7]
  i1742.velocityScale = i1743[8]
  i1742.cameraVelocityScale = i1743[9]
  i1742.normalDirection = i1743[10]
  i1742.sortingFudge = i1743[11]
  i1742.minParticleSize = i1743[12]
  i1742.maxParticleSize = i1743[13]
  i1742.pivot = new pc.Vec3( i1743[14], i1743[15], i1743[16] )
  request.r(i1743[17], i1743[18], 0, i1742, 'trailMaterial')
  i1742.applyActiveColorSpace = !!i1743[19]
  i1742.enabled = !!i1743[20]
  request.r(i1743[21], i1743[22], 0, i1742, 'sharedMaterial')
  var i1745 = i1743[23]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 2) {
  request.r(i1745[i + 0], i1745[i + 1], 2, i1744, '')
  }
  i1742.sharedMaterials = i1744
  i1742.receiveShadows = !!i1743[24]
  i1742.shadowCastingMode = i1743[25]
  i1742.sortingLayerID = i1743[26]
  i1742.sortingOrder = i1743[27]
  i1742.lightmapIndex = i1743[28]
  i1742.lightmapSceneIndex = i1743[29]
  i1742.lightmapScaleOffset = new pc.Vec4( i1743[30], i1743[31], i1743[32], i1743[33] )
  i1742.lightProbeUsage = i1743[34]
  i1742.reflectionProbeUsage = i1743[35]
  return i1742
}

Deserializers["Project.Scripts.HexCore.HexStack"] = function (request, data, root) {
  var i1746 = root || request.c( 'Project.Scripts.HexCore.HexStack' )
  var i1747 = data
  var i1749 = i1747[0]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 2) {
  request.r(i1749[i + 0], i1749[i + 1], 2, i1748, '')
  }
  i1746._possibleColors = i1748
  i1746._minHexagons = i1747[1]
  i1746._maxHexagons = i1747[2]
  i1746._isRandom = !!i1747[3]
  i1746._noRandomCount = i1747[4]
  i1746._isTwoColors = !!i1747[5]
  request.r(i1747[6], i1747[7], 0, i1746, '_dragHandler')
  return i1746
}

Deserializers["Project.Scripts.HexCore.Hex"] = function (request, data, root) {
  var i1752 = root || request.c( 'Project.Scripts.HexCore.Hex' )
  var i1753 = data
  i1752.<HexColor>k__BackingField = i1753[0]
  request.r(i1753[1], i1753[2], 0, i1752, '<AudioSource>k__BackingField')
  request.r(i1753[3], i1753[4], 0, i1752, '<MoveClip>k__BackingField')
  request.r(i1753[5], i1753[6], 0, i1752, '<DestroyClip>k__BackingField')
  return i1752
}

Deserializers["Project.Scripts.InputSystem.DragHandler"] = function (request, data, root) {
  var i1754 = root || request.c( 'Project.Scripts.InputSystem.DragHandler' )
  var i1755 = data
  i1754._liftHeight = i1755[0]
  i1754._returnDuration = i1755[1]
  request.r(i1755[2], i1755[3], 0, i1754, '_audioSource')
  request.r(i1755[4], i1755[5], 0, i1754, '_pickupClip')
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1757 = data
  i1756.name = i1757[0]
  i1756.atlasId = i1757[1]
  i1756.mipmapCount = i1757[2]
  i1756.hdr = !!i1757[3]
  i1756.size = i1757[4]
  i1756.anisoLevel = i1757[5]
  i1756.filterMode = i1757[6]
  var i1759 = i1757[7]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 4) {
    i1758.push( UnityEngine.Rect.MinMaxRect(i1759[i + 0], i1759[i + 1], i1759[i + 2], i1759[i + 3]) );
  }
  i1756.rects = i1758
  i1756.wrapU = i1757[8]
  i1756.wrapV = i1757[9]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1763 = data
  i1762.name = i1763[0]
  i1762.index = i1763[1]
  i1762.startup = !!i1763[2]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1765 = data
  i1764.aspect = i1765[0]
  i1764.orthographic = !!i1765[1]
  i1764.orthographicSize = i1765[2]
  i1764.backgroundColor = new pc.Color(i1765[3], i1765[4], i1765[5], i1765[6])
  i1764.nearClipPlane = i1765[7]
  i1764.farClipPlane = i1765[8]
  i1764.fieldOfView = i1765[9]
  i1764.depth = i1765[10]
  i1764.clearFlags = i1765[11]
  i1764.cullingMask = i1765[12]
  i1764.rect = i1765[13]
  request.r(i1765[14], i1765[15], 0, i1764, 'targetTexture')
  i1764.usePhysicalProperties = !!i1765[16]
  i1764.focalLength = i1765[17]
  i1764.sensorSize = new pc.Vec2( i1765[18], i1765[19] )
  i1764.lensShift = new pc.Vec2( i1765[20], i1765[21] )
  i1764.gateFit = i1765[22]
  i1764.commandBufferCount = i1765[23]
  i1764.cameraType = i1765[24]
  i1764.enabled = !!i1765[25]
  return i1764
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i1767 = data
  i1766.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i1767[0] )
  i1766.m_MaxRayIntersections = i1767[1]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1769 = data
  i1768.type = i1769[0]
  i1768.color = new pc.Color(i1769[1], i1769[2], i1769[3], i1769[4])
  i1768.cullingMask = i1769[5]
  i1768.intensity = i1769[6]
  i1768.range = i1769[7]
  i1768.spotAngle = i1769[8]
  i1768.shadows = i1769[9]
  i1768.shadowNormalBias = i1769[10]
  i1768.shadowBias = i1769[11]
  i1768.shadowStrength = i1769[12]
  i1768.shadowResolution = i1769[13]
  i1768.lightmapBakeType = i1769[14]
  i1768.renderMode = i1769[15]
  request.r(i1769[16], i1769[17], 0, i1768, 'cookie')
  i1768.cookieSize = i1769[18]
  i1768.shadowNearPlane = i1769[19]
  i1768.occlusionMaskChannel = i1769[20]
  i1768.isBaked = !!i1769[21]
  i1768.mixedLightingMode = i1769[22]
  i1768.enabled = !!i1769[23]
  return i1768
}

Deserializers["Project.Scripts.HexCore.HexGrid"] = function (request, data, root) {
  var i1770 = root || request.c( 'Project.Scripts.HexCore.HexGrid' )
  var i1771 = data
  i1770._gridRadius = i1771[0]
  i1770._cellSpacing = i1771[1]
  request.r(i1771[2], i1771[3], 0, i1770, '_hexCellPrefab')
  return i1770
}

Deserializers["Project.Scripts.Game.EntryPoint"] = function (request, data, root) {
  var i1772 = root || request.c( 'Project.Scripts.Game.EntryPoint' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, '_hexGrid')
  var i1775 = i1773[2]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 2) {
  request.r(i1775[i + 0], i1775[i + 1], 2, i1774, '')
  }
  i1772._initialStacks = i1774
  request.r(i1773[3], i1773[4], 0, i1772, '_dragHexStackPrefab')
  var i1777 = i1773[5]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 2) {
  request.r(i1777[i + 0], i1777[i + 1], 2, i1776, '')
  }
  i1772._dragHexStackSpawnPoints = i1776
  request.r(i1773[6], i1773[7], 0, i1772, '_endGame')
  request.r(i1773[8], i1773[9], 0, i1772, '_chainReactionOfHex')
  request.r(i1773[10], i1773[11], 0, i1772, '_tutorialPointer')
  i1772._dragSpawnDuration = i1773[12]
  i1772._gameDuration = i1773[13]
  request.r(i1773[14], i1773[15], 0, i1772, '_timerView')
  return i1772
}

Deserializers["Project.Scripts.Game.EndGame"] = function (request, data, root) {
  var i1782 = root || request.c( 'Project.Scripts.Game.EndGame' )
  var i1783 = data
  request.r(i1783[0], i1783[1], 0, i1782, '_endGameCanvasGroup')
  request.r(i1783[2], i1783[3], 0, i1782, '_playNowButton')
  request.r(i1783[4], i1783[5], 0, i1782, '_tutorialPointer')
  return i1782
}

Deserializers["Project.Scripts.HexCore.ChainReactionOfHex"] = function (request, data, root) {
  var i1784 = root || request.c( 'Project.Scripts.HexCore.ChainReactionOfHex' )
  var i1785 = data
  i1784._moveCurve = new pc.AnimationCurve( { keys_flow: i1785[0] } )
  request.r(i1785[1], i1785[2], 0, i1784, '_hexGrid')
  i1784._baseMoveDuration = i1785[3]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1787 = data
  i1786.pivot = new pc.Vec2( i1787[0], i1787[1] )
  i1786.anchorMin = new pc.Vec2( i1787[2], i1787[3] )
  i1786.anchorMax = new pc.Vec2( i1787[4], i1787[5] )
  i1786.sizeDelta = new pc.Vec2( i1787[6], i1787[7] )
  i1786.anchoredPosition3D = new pc.Vec3( i1787[8], i1787[9], i1787[10] )
  i1786.rotation = new pc.Quat(i1787[11], i1787[12], i1787[13], i1787[14])
  i1786.scale = new pc.Vec3( i1787[15], i1787[16], i1787[17] )
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1789 = data
  i1788.planeDistance = i1789[0]
  i1788.referencePixelsPerUnit = i1789[1]
  i1788.isFallbackOverlay = !!i1789[2]
  i1788.renderMode = i1789[3]
  i1788.renderOrder = i1789[4]
  i1788.sortingLayerName = i1789[5]
  i1788.sortingOrder = i1789[6]
  i1788.scaleFactor = i1789[7]
  request.r(i1789[8], i1789[9], 0, i1788, 'worldCamera')
  i1788.overrideSorting = !!i1789[10]
  i1788.pixelPerfect = !!i1789[11]
  i1788.targetDisplay = i1789[12]
  i1788.overridePixelPerfect = !!i1789[13]
  i1788.enabled = !!i1789[14]
  return i1788
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1791 = data
  i1790.m_UiScaleMode = i1791[0]
  i1790.m_ReferencePixelsPerUnit = i1791[1]
  i1790.m_ScaleFactor = i1791[2]
  i1790.m_ReferenceResolution = new pc.Vec2( i1791[3], i1791[4] )
  i1790.m_ScreenMatchMode = i1791[5]
  i1790.m_MatchWidthOrHeight = i1791[6]
  i1790.m_PhysicalUnit = i1791[7]
  i1790.m_FallbackScreenDPI = i1791[8]
  i1790.m_DefaultSpriteDPI = i1791[9]
  i1790.m_DynamicPixelsPerUnit = i1791[10]
  i1790.m_PresetInfoIsWorld = !!i1791[11]
  return i1790
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1793 = data
  i1792.m_IgnoreReversedGraphics = !!i1793[0]
  i1792.m_BlockingObjects = i1793[1]
  i1792.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1793[2] )
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1795 = data
  i1794.m_Alpha = i1795[0]
  i1794.m_Interactable = !!i1795[1]
  i1794.m_BlocksRaycasts = !!i1795[2]
  i1794.m_IgnoreParentGroups = !!i1795[3]
  i1794.enabled = !!i1795[4]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1797 = data
  i1796.cullTransparentMesh = !!i1797[0]
  return i1796
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.UI.Image' )
  var i1799 = data
  request.r(i1799[0], i1799[1], 0, i1798, 'm_Sprite')
  i1798.m_Type = i1799[2]
  i1798.m_PreserveAspect = !!i1799[3]
  i1798.m_FillCenter = !!i1799[4]
  i1798.m_FillMethod = i1799[5]
  i1798.m_FillAmount = i1799[6]
  i1798.m_FillClockwise = !!i1799[7]
  i1798.m_FillOrigin = i1799[8]
  i1798.m_UseSpriteMesh = !!i1799[9]
  i1798.m_PixelsPerUnitMultiplier = i1799[10]
  request.r(i1799[11], i1799[12], 0, i1798, 'm_Material')
  i1798.m_Maskable = !!i1799[13]
  i1798.m_Color = new pc.Color(i1799[14], i1799[15], i1799[16], i1799[17])
  i1798.m_RaycastTarget = !!i1799[18]
  i1798.m_RaycastPadding = new pc.Vec4( i1799[19], i1799[20], i1799[21], i1799[22] )
  return i1798
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.UI.Button' )
  var i1801 = data
  i1800.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1801[0], i1800.m_OnClick)
  i1800.m_Navigation = request.d('UnityEngine.UI.Navigation', i1801[1], i1800.m_Navigation)
  i1800.m_Transition = i1801[2]
  i1800.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1801[3], i1800.m_Colors)
  i1800.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1801[4], i1800.m_SpriteState)
  i1800.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1801[5], i1800.m_AnimationTriggers)
  i1800.m_Interactable = !!i1801[6]
  request.r(i1801[7], i1801[8], 0, i1800, 'm_TargetGraphic')
  return i1800
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1803 = data
  i1802.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1803[0], i1802.m_PersistentCalls)
  return i1802
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1805 = data
  var i1807 = i1805[0]
  var i1806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.add(request.d('UnityEngine.Events.PersistentCall', i1807[i + 0]));
  }
  i1804.m_Calls = i1806
  return i1804
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'm_Target')
  i1810.m_TargetAssemblyTypeName = i1811[2]
  i1810.m_MethodName = i1811[3]
  i1810.m_Mode = i1811[4]
  i1810.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1811[5], i1810.m_Arguments)
  i1810.m_CallState = i1811[6]
  return i1810
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1813 = data
  i1812.m_Mode = i1813[0]
  i1812.m_WrapAround = !!i1813[1]
  request.r(i1813[2], i1813[3], 0, i1812, 'm_SelectOnUp')
  request.r(i1813[4], i1813[5], 0, i1812, 'm_SelectOnDown')
  request.r(i1813[6], i1813[7], 0, i1812, 'm_SelectOnLeft')
  request.r(i1813[8], i1813[9], 0, i1812, 'm_SelectOnRight')
  return i1812
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1815 = data
  i1814.m_NormalColor = new pc.Color(i1815[0], i1815[1], i1815[2], i1815[3])
  i1814.m_HighlightedColor = new pc.Color(i1815[4], i1815[5], i1815[6], i1815[7])
  i1814.m_PressedColor = new pc.Color(i1815[8], i1815[9], i1815[10], i1815[11])
  i1814.m_SelectedColor = new pc.Color(i1815[12], i1815[13], i1815[14], i1815[15])
  i1814.m_DisabledColor = new pc.Color(i1815[16], i1815[17], i1815[18], i1815[19])
  i1814.m_ColorMultiplier = i1815[20]
  i1814.m_FadeDuration = i1815[21]
  return i1814
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'm_HighlightedSprite')
  request.r(i1817[2], i1817[3], 0, i1816, 'm_PressedSprite')
  request.r(i1817[4], i1817[5], 0, i1816, 'm_SelectedSprite')
  request.r(i1817[6], i1817[7], 0, i1816, 'm_DisabledSprite')
  return i1816
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1819 = data
  i1818.m_NormalTrigger = i1819[0]
  i1818.m_HighlightedTrigger = i1819[1]
  i1818.m_PressedTrigger = i1819[2]
  i1818.m_SelectedTrigger = i1819[3]
  i1818.m_DisabledTrigger = i1819[4]
  return i1818
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1820 = root || request.c( 'UnityEngine.UI.Text' )
  var i1821 = data
  i1820.m_FontData = request.d('UnityEngine.UI.FontData', i1821[0], i1820.m_FontData)
  i1820.m_Text = i1821[1]
  request.r(i1821[2], i1821[3], 0, i1820, 'm_Material')
  i1820.m_Maskable = !!i1821[4]
  i1820.m_Color = new pc.Color(i1821[5], i1821[6], i1821[7], i1821[8])
  i1820.m_RaycastTarget = !!i1821[9]
  i1820.m_RaycastPadding = new pc.Vec4( i1821[10], i1821[11], i1821[12], i1821[13] )
  return i1820
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1822 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'm_Font')
  i1822.m_FontSize = i1823[2]
  i1822.m_FontStyle = i1823[3]
  i1822.m_BestFit = !!i1823[4]
  i1822.m_MinSize = i1823[5]
  i1822.m_MaxSize = i1823[6]
  i1822.m_Alignment = i1823[7]
  i1822.m_AlignByGeometry = !!i1823[8]
  i1822.m_RichText = !!i1823[9]
  i1822.m_HorizontalOverflow = i1823[10]
  i1822.m_VerticalOverflow = i1823[11]
  i1822.m_LineSpacing = i1823[12]
  return i1822
}

Deserializers["Project.Scripts.UI.TutorialPointer"] = function (request, data, root) {
  var i1824 = root || request.c( 'Project.Scripts.UI.TutorialPointer' )
  var i1825 = data
  request.r(i1825[0], i1825[1], 0, i1824, '_handObject')
  request.r(i1825[2], i1825[3], 0, i1824, '_handRect')
  request.r(i1825[4], i1825[5], 0, i1824, '_parentCanvas')
  request.r(i1825[6], i1825[7], 0, i1824, '_entryPoint')
  i1824._idleTimeToShow = i1825[8]
  i1824._distance = i1825[9]
  i1824._duration = i1825[10]
  return i1824
}

Deserializers["Project.Scripts.UI.TimerView"] = function (request, data, root) {
  var i1826 = root || request.c( 'Project.Scripts.UI.TimerView' )
  var i1827 = data
  request.r(i1827[0], i1827[1], 0, i1826, '_fillImage')
  return i1826
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1828 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1829 = data
  request.r(i1829[0], i1829[1], 0, i1828, 'm_FirstSelected')
  i1828.m_sendNavigationEvents = !!i1829[2]
  i1828.m_DragThreshold = i1829[3]
  return i1828
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1831 = data
  i1830.m_HorizontalAxis = i1831[0]
  i1830.m_VerticalAxis = i1831[1]
  i1830.m_SubmitButton = i1831[2]
  i1830.m_CancelButton = i1831[3]
  i1830.m_InputActionsPerSecond = i1831[4]
  i1830.m_RepeatDelay = i1831[5]
  i1830.m_ForceModuleActive = !!i1831[6]
  i1830.m_SendPointerHoverToParent = !!i1831[7]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1833 = data
  i1832.ambientIntensity = i1833[0]
  i1832.reflectionIntensity = i1833[1]
  i1832.ambientMode = i1833[2]
  i1832.ambientLight = new pc.Color(i1833[3], i1833[4], i1833[5], i1833[6])
  i1832.ambientSkyColor = new pc.Color(i1833[7], i1833[8], i1833[9], i1833[10])
  i1832.ambientGroundColor = new pc.Color(i1833[11], i1833[12], i1833[13], i1833[14])
  i1832.ambientEquatorColor = new pc.Color(i1833[15], i1833[16], i1833[17], i1833[18])
  i1832.fogColor = new pc.Color(i1833[19], i1833[20], i1833[21], i1833[22])
  i1832.fogEndDistance = i1833[23]
  i1832.fogStartDistance = i1833[24]
  i1832.fogDensity = i1833[25]
  i1832.fog = !!i1833[26]
  request.r(i1833[27], i1833[28], 0, i1832, 'skybox')
  i1832.fogMode = i1833[29]
  var i1835 = i1833[30]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1835[i + 0]) );
  }
  i1832.lightmaps = i1834
  i1832.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1833[31], i1832.lightProbes)
  i1832.lightmapsMode = i1833[32]
  i1832.mixedBakeMode = i1833[33]
  i1832.environmentLightingMode = i1833[34]
  i1832.ambientProbe = new pc.SphericalHarmonicsL2(i1833[35])
  request.r(i1833[36], i1833[37], 0, i1832, 'customReflection')
  request.r(i1833[38], i1833[39], 0, i1832, 'defaultReflection')
  i1832.defaultReflectionMode = i1833[40]
  i1832.defaultReflectionResolution = i1833[41]
  i1832.sunLightObjectId = i1833[42]
  i1832.pixelLightCount = i1833[43]
  i1832.defaultReflectionHDR = !!i1833[44]
  i1832.hasLightDataAsset = !!i1833[45]
  i1832.hasManualGenerate = !!i1833[46]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'lightmapColor')
  request.r(i1839[2], i1839[3], 0, i1838, 'lightmapDirection')
  request.r(i1839[4], i1839[5], 0, i1838, 'shadowMask')
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1840 = root || new UnityEngine.LightProbes()
  var i1841 = data
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1849 = data
  var i1851 = i1849[0]
  var i1850 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1851[i + 0]));
  }
  i1848.ShaderCompilationErrors = i1850
  i1848.name = i1849[1]
  i1848.guid = i1849[2]
  var i1853 = i1849[3]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( i1853[i + 0] );
  }
  i1848.shaderDefinedKeywords = i1852
  var i1855 = i1849[4]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1855[i + 0]) );
  }
  i1848.passes = i1854
  var i1857 = i1849[5]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1857[i + 0]) );
  }
  i1848.usePasses = i1856
  var i1859 = i1849[6]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1859[i + 0]) );
  }
  i1848.defaultParameterValues = i1858
  request.r(i1849[7], i1849[8], 0, i1848, 'unityFallbackShader')
  i1848.readDepth = !!i1849[9]
  i1848.hasDepthOnlyPass = !!i1849[10]
  i1848.isCreatedByShaderGraph = !!i1849[11]
  i1848.disableBatching = !!i1849[12]
  i1848.compiled = !!i1849[13]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1863 = data
  i1862.shaderName = i1863[0]
  i1862.errorMessage = i1863[1]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1868 = root || new pc.UnityShaderPass()
  var i1869 = data
  i1868.id = i1869[0]
  i1868.subShaderIndex = i1869[1]
  i1868.name = i1869[2]
  i1868.passType = i1869[3]
  i1868.grabPassTextureName = i1869[4]
  i1868.usePass = !!i1869[5]
  i1868.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[6], i1868.zTest)
  i1868.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[7], i1868.zWrite)
  i1868.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[8], i1868.culling)
  i1868.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1869[9], i1868.blending)
  i1868.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1869[10], i1868.alphaBlending)
  i1868.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[11], i1868.colorWriteMask)
  i1868.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[12], i1868.offsetUnits)
  i1868.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[13], i1868.offsetFactor)
  i1868.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[14], i1868.stencilRef)
  i1868.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[15], i1868.stencilReadMask)
  i1868.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1869[16], i1868.stencilWriteMask)
  i1868.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1869[17], i1868.stencilOp)
  i1868.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1869[18], i1868.stencilOpFront)
  i1868.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1869[19], i1868.stencilOpBack)
  var i1871 = i1869[20]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1871[i + 0]) );
  }
  i1868.tags = i1870
  var i1873 = i1869[21]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( i1873[i + 0] );
  }
  i1868.passDefinedKeywords = i1872
  var i1875 = i1869[22]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1875[i + 0]) );
  }
  i1868.passDefinedKeywordGroups = i1874
  var i1877 = i1869[23]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1877[i + 0]) );
  }
  i1868.variants = i1876
  var i1879 = i1869[24]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1879[i + 0]) );
  }
  i1868.excludedVariants = i1878
  i1868.hasDepthReader = !!i1869[25]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1881 = data
  i1880.val = i1881[0]
  i1880.name = i1881[1]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1883 = data
  i1882.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1883[0], i1882.src)
  i1882.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1883[1], i1882.dst)
  i1882.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1883[2], i1882.op)
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1885 = data
  i1884.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[0], i1884.pass)
  i1884.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[1], i1884.fail)
  i1884.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[2], i1884.zFail)
  i1884.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1885[3], i1884.comp)
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1889 = data
  i1888.name = i1889[0]
  i1888.value = i1889[1]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1893 = data
  var i1895 = i1893[0]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( i1895[i + 0] );
  }
  i1892.keywords = i1894
  i1892.hasDiscard = !!i1893[1]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1899 = data
  i1898.passId = i1899[0]
  i1898.subShaderIndex = i1899[1]
  var i1901 = i1899[2]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( i1901[i + 0] );
  }
  i1898.keywords = i1900
  i1898.vertexProgram = i1899[3]
  i1898.fragmentProgram = i1899[4]
  i1898.exportedForWebGl2 = !!i1899[5]
  i1898.readDepth = !!i1899[6]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1905 = data
  request.r(i1905[0], i1905[1], 0, i1904, 'shader')
  i1904.pass = i1905[2]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1909 = data
  i1908.name = i1909[0]
  i1908.type = i1909[1]
  i1908.value = new pc.Vec4( i1909[2], i1909[3], i1909[4], i1909[5] )
  i1908.textureValue = i1909[6]
  i1908.shaderPropertyFlag = i1909[7]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1911 = data
  i1910.name = i1911[0]
  request.r(i1911[1], i1911[2], 0, i1910, 'texture')
  i1910.aabb = i1911[3]
  i1910.vertices = i1911[4]
  i1910.triangles = i1911[5]
  i1910.textureRect = UnityEngine.Rect.MinMaxRect(i1911[6], i1911[7], i1911[8], i1911[9])
  i1910.packedRect = UnityEngine.Rect.MinMaxRect(i1911[10], i1911[11], i1911[12], i1911[13])
  i1910.border = new pc.Vec4( i1911[14], i1911[15], i1911[16], i1911[17] )
  i1910.transparency = i1911[18]
  i1910.bounds = i1911[19]
  i1910.pixelsPerUnit = i1911[20]
  i1910.textureWidth = i1911[21]
  i1910.textureHeight = i1911[22]
  i1910.nativeSize = new pc.Vec2( i1911[23], i1911[24] )
  i1910.pivot = new pc.Vec2( i1911[25], i1911[26] )
  i1910.textureRectOffset = new pc.Vec2( i1911[27], i1911[28] )
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1913 = data
  i1912.name = i1913[0]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1915 = data
  i1914.name = i1915[0]
  i1914.ascent = i1915[1]
  i1914.originalLineHeight = i1915[2]
  i1914.fontSize = i1915[3]
  var i1917 = i1915[4]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1917[i + 0]) );
  }
  i1914.characterInfo = i1916
  request.r(i1915[5], i1915[6], 0, i1914, 'texture')
  i1914.originalFontSize = i1915[7]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1921 = data
  i1920.index = i1921[0]
  i1920.advance = i1921[1]
  i1920.bearing = i1921[2]
  i1920.glyphWidth = i1921[3]
  i1920.glyphHeight = i1921[4]
  i1920.minX = i1921[5]
  i1920.maxX = i1921[6]
  i1920.minY = i1921[7]
  i1920.maxY = i1921[8]
  i1920.uvBottomLeftX = i1921[9]
  i1920.uvBottomLeftY = i1921[10]
  i1920.uvBottomRightX = i1921[11]
  i1920.uvBottomRightY = i1921[12]
  i1920.uvTopLeftX = i1921[13]
  i1920.uvTopLeftY = i1921[14]
  i1920.uvTopRightX = i1921[15]
  i1920.uvTopRightY = i1921[16]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1923 = data
  i1922.name = i1923[0]
  i1922.bytes64 = i1923[1]
  i1922.data = i1923[2]
  return i1922
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1924 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1925 = data
  i1924.useSafeMode = !!i1925[0]
  i1924.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1925[1], i1924.safeModeOptions)
  i1924.timeScale = i1925[2]
  i1924.unscaledTimeScale = i1925[3]
  i1924.useSmoothDeltaTime = !!i1925[4]
  i1924.maxSmoothUnscaledTime = i1925[5]
  i1924.rewindCallbackMode = i1925[6]
  i1924.showUnityEditorReport = !!i1925[7]
  i1924.logBehaviour = i1925[8]
  i1924.drawGizmos = !!i1925[9]
  i1924.defaultRecyclable = !!i1925[10]
  i1924.defaultAutoPlay = i1925[11]
  i1924.defaultUpdateType = i1925[12]
  i1924.defaultTimeScaleIndependent = !!i1925[13]
  i1924.defaultEaseType = i1925[14]
  i1924.defaultEaseOvershootOrAmplitude = i1925[15]
  i1924.defaultEasePeriod = i1925[16]
  i1924.defaultAutoKill = !!i1925[17]
  i1924.defaultLoopType = i1925[18]
  i1924.debugMode = !!i1925[19]
  i1924.debugStoreTargetId = !!i1925[20]
  i1924.showPreviewPanel = !!i1925[21]
  i1924.storeSettingsLocation = i1925[22]
  i1924.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1925[23], i1924.modules)
  i1924.createASMDEF = !!i1925[24]
  i1924.showPlayingTweens = !!i1925[25]
  i1924.showPausedTweens = !!i1925[26]
  return i1924
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1926 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1927 = data
  i1926.logBehaviour = i1927[0]
  i1926.nestedTweenFailureBehaviour = i1927[1]
  return i1926
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1928 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1929 = data
  i1928.showPanel = !!i1929[0]
  i1928.audioEnabled = !!i1929[1]
  i1928.physicsEnabled = !!i1929[2]
  i1928.physics2DEnabled = !!i1929[3]
  i1928.spriteEnabled = !!i1929[4]
  i1928.uiEnabled = !!i1929[5]
  i1928.textMeshProEnabled = !!i1929[6]
  i1928.tk2DEnabled = !!i1929[7]
  i1928.deAudioEnabled = !!i1929[8]
  i1928.deUnityExtendedEnabled = !!i1929[9]
  i1928.epoOutlineEnabled = !!i1929[10]
  return i1928
}

Deserializers["Project.Scripts.Game.Constants.CustomPalette"] = function (request, data, root) {
  var i1930 = root || request.c( 'Project.Scripts.Game.Constants.CustomPalette' )
  var i1931 = data
  var i1933 = i1931[0]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Project.Scripts.Game.Constants.ColorEntry', i1933[i + 0]) );
  }
  i1930.colors = i1932
  return i1930
}

Deserializers["Project.Scripts.Game.Constants.ColorEntry"] = function (request, data, root) {
  var i1936 = root || request.c( 'Project.Scripts.Game.Constants.ColorEntry' )
  var i1937 = data
  i1936.Name = i1937[0]
  i1936.Color = new pc.Color(i1937[1], i1937[2], i1937[3], i1937[4])
  return i1936
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1938 = root || request.c( 'TMPro.TMP_Settings' )
  var i1939 = data
  i1938.m_enableWordWrapping = !!i1939[0]
  i1938.m_enableKerning = !!i1939[1]
  i1938.m_enableExtraPadding = !!i1939[2]
  i1938.m_enableTintAllSprites = !!i1939[3]
  i1938.m_enableParseEscapeCharacters = !!i1939[4]
  i1938.m_EnableRaycastTarget = !!i1939[5]
  i1938.m_GetFontFeaturesAtRuntime = !!i1939[6]
  i1938.m_missingGlyphCharacter = i1939[7]
  i1938.m_warningsDisabled = !!i1939[8]
  request.r(i1939[9], i1939[10], 0, i1938, 'm_defaultFontAsset')
  i1938.m_defaultFontAssetPath = i1939[11]
  i1938.m_defaultFontSize = i1939[12]
  i1938.m_defaultAutoSizeMinRatio = i1939[13]
  i1938.m_defaultAutoSizeMaxRatio = i1939[14]
  i1938.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1939[15], i1939[16] )
  i1938.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1939[17], i1939[18] )
  i1938.m_autoSizeTextContainer = !!i1939[19]
  i1938.m_IsTextObjectScaleStatic = !!i1939[20]
  var i1941 = i1939[21]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1941.length; i += 2) {
  request.r(i1941[i + 0], i1941[i + 1], 1, i1940, '')
  }
  i1938.m_fallbackFontAssets = i1940
  i1938.m_matchMaterialPreset = !!i1939[22]
  request.r(i1939[23], i1939[24], 0, i1938, 'm_defaultSpriteAsset')
  i1938.m_defaultSpriteAssetPath = i1939[25]
  i1938.m_enableEmojiSupport = !!i1939[26]
  i1938.m_MissingCharacterSpriteUnicode = i1939[27]
  i1938.m_defaultColorGradientPresetsPath = i1939[28]
  request.r(i1939[29], i1939[30], 0, i1938, 'm_defaultStyleSheet')
  i1938.m_StyleSheetsResourcePath = i1939[31]
  request.r(i1939[32], i1939[33], 0, i1938, 'm_leadingCharacters')
  request.r(i1939[34], i1939[35], 0, i1938, 'm_followingCharacters')
  i1938.m_UseModernHangulLineBreakingRules = !!i1939[36]
  return i1938
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'atlas')
  i1944.normalStyle = i1945[2]
  i1944.normalSpacingOffset = i1945[3]
  i1944.boldStyle = i1945[4]
  i1944.boldSpacing = i1945[5]
  i1944.italicStyle = i1945[6]
  i1944.tabSize = i1945[7]
  i1944.hashCode = i1945[8]
  request.r(i1945[9], i1945[10], 0, i1944, 'material')
  i1944.materialHashCode = i1945[11]
  i1944.m_Version = i1945[12]
  i1944.m_SourceFontFileGUID = i1945[13]
  request.r(i1945[14], i1945[15], 0, i1944, 'm_SourceFontFile_EditorRef')
  request.r(i1945[16], i1945[17], 0, i1944, 'm_SourceFontFile')
  i1944.m_AtlasPopulationMode = i1945[18]
  i1944.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1945[19], i1944.m_FaceInfo)
  var i1947 = i1945[20]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.add(request.d('UnityEngine.TextCore.Glyph', i1947[i + 0]));
  }
  i1944.m_GlyphTable = i1946
  var i1949 = i1945[21]
  var i1948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.add(request.d('TMPro.TMP_Character', i1949[i + 0]));
  }
  i1944.m_CharacterTable = i1948
  var i1951 = i1945[22]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 2) {
  request.r(i1951[i + 0], i1951[i + 1], 2, i1950, '')
  }
  i1944.m_AtlasTextures = i1950
  i1944.m_AtlasTextureIndex = i1945[23]
  i1944.m_IsMultiAtlasTexturesEnabled = !!i1945[24]
  i1944.m_ClearDynamicDataOnBuild = !!i1945[25]
  var i1953 = i1945[26]
  var i1952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.add(request.d('UnityEngine.TextCore.GlyphRect', i1953[i + 0]));
  }
  i1944.m_UsedGlyphRects = i1952
  var i1955 = i1945[27]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.add(request.d('UnityEngine.TextCore.GlyphRect', i1955[i + 0]));
  }
  i1944.m_FreeGlyphRects = i1954
  i1944.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1945[28], i1944.m_fontInfo)
  i1944.m_AtlasWidth = i1945[29]
  i1944.m_AtlasHeight = i1945[30]
  i1944.m_AtlasPadding = i1945[31]
  i1944.m_AtlasRenderMode = i1945[32]
  var i1957 = i1945[33]
  var i1956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.add(request.d('TMPro.TMP_Glyph', i1957[i + 0]));
  }
  i1944.m_glyphInfoList = i1956
  i1944.m_KerningTable = request.d('TMPro.KerningTable', i1945[34], i1944.m_KerningTable)
  i1944.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1945[35], i1944.m_FontFeatureTable)
  var i1959 = i1945[36]
  var i1958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1959.length; i += 2) {
  request.r(i1959[i + 0], i1959[i + 1], 1, i1958, '')
  }
  i1944.fallbackFontAssets = i1958
  var i1961 = i1945[37]
  var i1960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1961.length; i += 2) {
  request.r(i1961[i + 0], i1961[i + 1], 1, i1960, '')
  }
  i1944.m_FallbackFontAssetTable = i1960
  i1944.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1945[38], i1944.m_CreationSettings)
  var i1963 = i1945[39]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('TMPro.TMP_FontWeightPair', i1963[i + 0]) );
  }
  i1944.m_FontWeightTable = i1962
  var i1965 = i1945[40]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('TMPro.TMP_FontWeightPair', i1965[i + 0]) );
  }
  i1944.fontWeights = i1964
  return i1944
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1967 = data
  i1966.m_FaceIndex = i1967[0]
  i1966.m_FamilyName = i1967[1]
  i1966.m_StyleName = i1967[2]
  i1966.m_PointSize = i1967[3]
  i1966.m_Scale = i1967[4]
  i1966.m_UnitsPerEM = i1967[5]
  i1966.m_LineHeight = i1967[6]
  i1966.m_AscentLine = i1967[7]
  i1966.m_CapLine = i1967[8]
  i1966.m_MeanLine = i1967[9]
  i1966.m_Baseline = i1967[10]
  i1966.m_DescentLine = i1967[11]
  i1966.m_SuperscriptOffset = i1967[12]
  i1966.m_SuperscriptSize = i1967[13]
  i1966.m_SubscriptOffset = i1967[14]
  i1966.m_SubscriptSize = i1967[15]
  i1966.m_UnderlineOffset = i1967[16]
  i1966.m_UnderlineThickness = i1967[17]
  i1966.m_StrikethroughOffset = i1967[18]
  i1966.m_StrikethroughThickness = i1967[19]
  i1966.m_TabWidth = i1967[20]
  return i1966
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1971 = data
  i1970.m_Index = i1971[0]
  i1970.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1971[1], i1970.m_Metrics)
  i1970.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1971[2], i1970.m_GlyphRect)
  i1970.m_Scale = i1971[3]
  i1970.m_AtlasIndex = i1971[4]
  i1970.m_ClassDefinitionType = i1971[5]
  return i1970
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1973 = data
  i1972.m_Width = i1973[0]
  i1972.m_Height = i1973[1]
  i1972.m_HorizontalBearingX = i1973[2]
  i1972.m_HorizontalBearingY = i1973[3]
  i1972.m_HorizontalAdvance = i1973[4]
  return i1972
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1975 = data
  i1974.m_X = i1975[0]
  i1974.m_Y = i1975[1]
  i1974.m_Width = i1975[2]
  i1974.m_Height = i1975[3]
  return i1974
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.TMP_Character' )
  var i1979 = data
  i1978.m_ElementType = i1979[0]
  i1978.m_Unicode = i1979[1]
  i1978.m_GlyphIndex = i1979[2]
  i1978.m_Scale = i1979[3]
  return i1978
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1984 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1985 = data
  i1984.Name = i1985[0]
  i1984.PointSize = i1985[1]
  i1984.Scale = i1985[2]
  i1984.CharacterCount = i1985[3]
  i1984.LineHeight = i1985[4]
  i1984.Baseline = i1985[5]
  i1984.Ascender = i1985[6]
  i1984.CapHeight = i1985[7]
  i1984.Descender = i1985[8]
  i1984.CenterLine = i1985[9]
  i1984.SuperscriptOffset = i1985[10]
  i1984.SubscriptOffset = i1985[11]
  i1984.SubSize = i1985[12]
  i1984.Underline = i1985[13]
  i1984.UnderlineThickness = i1985[14]
  i1984.strikethrough = i1985[15]
  i1984.strikethroughThickness = i1985[16]
  i1984.TabWidth = i1985[17]
  i1984.Padding = i1985[18]
  i1984.AtlasWidth = i1985[19]
  i1984.AtlasHeight = i1985[20]
  return i1984
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1988 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1989 = data
  i1988.id = i1989[0]
  i1988.x = i1989[1]
  i1988.y = i1989[2]
  i1988.width = i1989[3]
  i1988.height = i1989[4]
  i1988.xOffset = i1989[5]
  i1988.yOffset = i1989[6]
  i1988.xAdvance = i1989[7]
  i1988.scale = i1989[8]
  return i1988
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.KerningTable' )
  var i1991 = data
  var i1993 = i1991[0]
  var i1992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.add(request.d('TMPro.KerningPair', i1993[i + 0]));
  }
  i1990.kerningPairs = i1992
  return i1990
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1996 = root || request.c( 'TMPro.KerningPair' )
  var i1997 = data
  i1996.xOffset = i1997[0]
  i1996.m_FirstGlyph = i1997[1]
  i1996.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1997[2], i1996.m_FirstGlyphAdjustments)
  i1996.m_SecondGlyph = i1997[3]
  i1996.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1997[4], i1996.m_SecondGlyphAdjustments)
  i1996.m_IgnoreSpacingAdjustments = !!i1997[5]
  return i1996
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1998 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1999 = data
  var i2001 = i1999[0]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2001[i + 0]));
  }
  i1998.m_GlyphPairAdjustmentRecords = i2000
  return i1998
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2004 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2005 = data
  i2004.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2005[0], i2004.m_FirstAdjustmentRecord)
  i2004.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2005[1], i2004.m_SecondAdjustmentRecord)
  i2004.m_FeatureLookupFlags = i2005[2]
  return i2004
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2006 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2007 = data
  i2006.m_GlyphIndex = i2007[0]
  i2006.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2007[1], i2006.m_GlyphValueRecord)
  return i2006
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2008 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2009 = data
  i2008.m_XPlacement = i2009[0]
  i2008.m_YPlacement = i2009[1]
  i2008.m_XAdvance = i2009[2]
  i2008.m_YAdvance = i2009[3]
  return i2008
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2011 = data
  i2010.sourceFontFileName = i2011[0]
  i2010.sourceFontFileGUID = i2011[1]
  i2010.pointSizeSamplingMode = i2011[2]
  i2010.pointSize = i2011[3]
  i2010.padding = i2011[4]
  i2010.packingMode = i2011[5]
  i2010.atlasWidth = i2011[6]
  i2010.atlasHeight = i2011[7]
  i2010.characterSetSelectionMode = i2011[8]
  i2010.characterSequence = i2011[9]
  i2010.referencedFontAssetGUID = i2011[10]
  i2010.referencedTextAssetGUID = i2011[11]
  i2010.fontStyle = i2011[12]
  i2010.fontStyleModifier = i2011[13]
  i2010.renderMode = i2011[14]
  i2010.includeFontFeatures = !!i2011[15]
  return i2010
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2014 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'regularTypeface')
  request.r(i2015[2], i2015[3], 0, i2014, 'italicTypeface')
  return i2014
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2016 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'spriteSheet')
  var i2019 = i2017[2]
  var i2018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.add(request.d('TMPro.TMP_Sprite', i2019[i + 0]));
  }
  i2016.spriteInfoList = i2018
  var i2021 = i2017[3]
  var i2020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2021.length; i += 2) {
  request.r(i2021[i + 0], i2021[i + 1], 1, i2020, '')
  }
  i2016.fallbackSpriteAssets = i2020
  i2016.hashCode = i2017[4]
  request.r(i2017[5], i2017[6], 0, i2016, 'material')
  i2016.materialHashCode = i2017[7]
  i2016.m_Version = i2017[8]
  i2016.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2017[9], i2016.m_FaceInfo)
  var i2023 = i2017[10]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.add(request.d('TMPro.TMP_SpriteCharacter', i2023[i + 0]));
  }
  i2016.m_SpriteCharacterTable = i2022
  var i2025 = i2017[11]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('TMPro.TMP_SpriteGlyph', i2025[i + 0]));
  }
  i2016.m_SpriteGlyphTable = i2024
  return i2016
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2028 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2029 = data
  i2028.name = i2029[0]
  i2028.hashCode = i2029[1]
  i2028.unicode = i2029[2]
  i2028.pivot = new pc.Vec2( i2029[3], i2029[4] )
  request.r(i2029[5], i2029[6], 0, i2028, 'sprite')
  i2028.id = i2029[7]
  i2028.x = i2029[8]
  i2028.y = i2029[9]
  i2028.width = i2029[10]
  i2028.height = i2029[11]
  i2028.xOffset = i2029[12]
  i2028.yOffset = i2029[13]
  i2028.xAdvance = i2029[14]
  i2028.scale = i2029[15]
  return i2028
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2034 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2035 = data
  i2034.m_Name = i2035[0]
  i2034.m_HashCode = i2035[1]
  i2034.m_ElementType = i2035[2]
  i2034.m_Unicode = i2035[3]
  i2034.m_GlyphIndex = i2035[4]
  i2034.m_Scale = i2035[5]
  return i2034
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2038 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, 'sprite')
  i2038.m_Index = i2039[2]
  i2038.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2039[3], i2038.m_Metrics)
  i2038.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2039[4], i2038.m_GlyphRect)
  i2038.m_Scale = i2039[5]
  i2038.m_AtlasIndex = i2039[6]
  i2038.m_ClassDefinitionType = i2039[7]
  return i2038
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2040 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2041 = data
  var i2043 = i2041[0]
  var i2042 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.add(request.d('TMPro.TMP_Style', i2043[i + 0]));
  }
  i2040.m_StyleList = i2042
  return i2040
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2046 = root || request.c( 'TMPro.TMP_Style' )
  var i2047 = data
  i2046.m_Name = i2047[0]
  i2046.m_HashCode = i2047[1]
  i2046.m_OpeningDefinition = i2047[2]
  i2046.m_ClosingDefinition = i2047[3]
  i2046.m_OpeningTagArray = i2047[4]
  i2046.m_ClosingTagArray = i2047[5]
  i2046.m_OpeningTagUnicodeArray = i2047[6]
  i2046.m_ClosingTagUnicodeArray = i2047[7]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2049 = data
  var i2051 = i2049[0]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2051[i + 0]) );
  }
  i2048.files = i2050
  i2048.componentToPrefabIds = i2049[1]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2055 = data
  i2054.path = i2055[0]
  request.r(i2055[1], i2055[2], 0, i2054, 'unityObject')
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2057 = data
  var i2059 = i2057[0]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2059[i + 0]) );
  }
  i2056.scriptsExecutionOrder = i2058
  var i2061 = i2057[1]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2061[i + 0]) );
  }
  i2056.sortingLayers = i2060
  var i2063 = i2057[2]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2063[i + 0]) );
  }
  i2056.cullingLayers = i2062
  i2056.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2057[3], i2056.timeSettings)
  i2056.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2057[4], i2056.physicsSettings)
  i2056.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2057[5], i2056.physics2DSettings)
  i2056.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2057[6], i2056.qualitySettings)
  i2056.enableRealtimeShadows = !!i2057[7]
  i2056.enableAutoInstancing = !!i2057[8]
  i2056.enableStaticBatching = !!i2057[9]
  i2056.enableDynamicBatching = !!i2057[10]
  i2056.usePreservativeDynamicBatching = !!i2057[11]
  i2056.lightmapEncodingQuality = i2057[12]
  i2056.desiredColorSpace = i2057[13]
  var i2065 = i2057[14]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( i2065[i + 0] );
  }
  i2056.allTags = i2064
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2069 = data
  i2068.name = i2069[0]
  i2068.value = i2069[1]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2073 = data
  i2072.id = i2073[0]
  i2072.name = i2073[1]
  i2072.value = i2073[2]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2077 = data
  i2076.id = i2077[0]
  i2076.name = i2077[1]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2079 = data
  i2078.fixedDeltaTime = i2079[0]
  i2078.maximumDeltaTime = i2079[1]
  i2078.timeScale = i2079[2]
  i2078.maximumParticleTimestep = i2079[3]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2081 = data
  i2080.gravity = new pc.Vec3( i2081[0], i2081[1], i2081[2] )
  i2080.defaultSolverIterations = i2081[3]
  i2080.bounceThreshold = i2081[4]
  i2080.autoSyncTransforms = !!i2081[5]
  i2080.autoSimulation = !!i2081[6]
  var i2083 = i2081[7]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2083[i + 0]) );
  }
  i2080.collisionMatrix = i2082
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2087 = data
  i2086.enabled = !!i2087[0]
  i2086.layerId = i2087[1]
  i2086.otherLayerId = i2087[2]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'material')
  i2088.gravity = new pc.Vec2( i2089[2], i2089[3] )
  i2088.positionIterations = i2089[4]
  i2088.velocityIterations = i2089[5]
  i2088.velocityThreshold = i2089[6]
  i2088.maxLinearCorrection = i2089[7]
  i2088.maxAngularCorrection = i2089[8]
  i2088.maxTranslationSpeed = i2089[9]
  i2088.maxRotationSpeed = i2089[10]
  i2088.baumgarteScale = i2089[11]
  i2088.baumgarteTOIScale = i2089[12]
  i2088.timeToSleep = i2089[13]
  i2088.linearSleepTolerance = i2089[14]
  i2088.angularSleepTolerance = i2089[15]
  i2088.defaultContactOffset = i2089[16]
  i2088.autoSimulation = !!i2089[17]
  i2088.queriesHitTriggers = !!i2089[18]
  i2088.queriesStartInColliders = !!i2089[19]
  i2088.callbacksOnDisable = !!i2089[20]
  i2088.reuseCollisionCallbacks = !!i2089[21]
  i2088.autoSyncTransforms = !!i2089[22]
  var i2091 = i2089[23]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2091[i + 0]) );
  }
  i2088.collisionMatrix = i2090
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.layerId = i2095[1]
  i2094.otherLayerId = i2095[2]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2097 = data
  var i2099 = i2097[0]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2099[i + 0]) );
  }
  i2096.qualityLevels = i2098
  var i2101 = i2097[1]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( i2101[i + 0] );
  }
  i2096.names = i2100
  i2096.shadows = i2097[2]
  i2096.anisotropicFiltering = i2097[3]
  i2096.antiAliasing = i2097[4]
  i2096.lodBias = i2097[5]
  i2096.shadowCascades = i2097[6]
  i2096.shadowDistance = i2097[7]
  i2096.shadowmaskMode = i2097[8]
  i2096.shadowProjection = i2097[9]
  i2096.shadowResolution = i2097[10]
  i2096.softParticles = !!i2097[11]
  i2096.softVegetation = !!i2097[12]
  i2096.activeColorSpace = i2097[13]
  i2096.desiredColorSpace = i2097[14]
  i2096.masterTextureLimit = i2097[15]
  i2096.maxQueuedFrames = i2097[16]
  i2096.particleRaycastBudget = i2097[17]
  i2096.pixelLightCount = i2097[18]
  i2096.realtimeReflectionProbes = !!i2097[19]
  i2096.shadowCascade2Split = i2097[20]
  i2096.shadowCascade4Split = new pc.Vec3( i2097[21], i2097[22], i2097[23] )
  i2096.streamingMipmapsActive = !!i2097[24]
  i2096.vSyncCount = i2097[25]
  i2096.asyncUploadBufferSize = i2097[26]
  i2096.asyncUploadTimeSlice = i2097[27]
  i2096.billboardsFaceCameraPosition = !!i2097[28]
  i2096.shadowNearPlaneOffset = i2097[29]
  i2096.streamingMipmapsMemoryBudget = i2097[30]
  i2096.maximumLODLevel = i2097[31]
  i2096.streamingMipmapsAddAllCameras = !!i2097[32]
  i2096.streamingMipmapsMaxLevelReduction = i2097[33]
  i2096.streamingMipmapsRenderersPerFrame = i2097[34]
  i2096.resolutionScalingFixedDPIFactor = i2097[35]
  i2096.streamingMipmapsMaxFileIORequests = i2097[36]
  i2096.currentQualityLevel = i2097[37]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2107 = data
  i2106.weight = i2107[0]
  i2106.vertices = i2107[1]
  i2106.normals = i2107[2]
  i2106.tangents = i2107[3]
  return i2106
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2108 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2109 = data
  request.r(i2109[0], i2109[1], 0, i2108, 'm_ObjectArgument')
  i2108.m_ObjectArgumentAssemblyTypeName = i2109[2]
  i2108.m_IntArgument = i2109[3]
  i2108.m_FloatArgument = i2109[4]
  i2108.m_StringArgument = i2109[5]
  i2108.m_BoolArgument = !!i2109[6]
  return i2108
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2110 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2111 = data
  i2110.xPlacement = i2111[0]
  i2110.yPlacement = i2111[1]
  i2110.xAdvance = i2111[2]
  i2110.yAdvance = i2111[3]
  return i2110
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

Deserializers.buildID = "03e3e0ba-9856-429f-ac49-5eb92cb85b81";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

