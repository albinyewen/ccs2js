#{it.defineType + it.Name} = new #{it.classType}();
<?js if(it.parent) {
    if(it.parentType == "PageViewObjectData") { ?>
#{it.parent}.addPage(#{it.Name});
<?js } 
        if(it.parentType != "PageViewObjectData") { ?>
#{it.parent}.addChild(#{it.Name});
<?js } ?>
<?js } ?>
// attr
#{it.Name}.setCascadeColorEnabled(true);
#{it.Name}.setCascadeOpacityEnabled(true);
<?js if (it.FlipY) { ?>#{it.Name}.setFlippedY(true);<?js } ?>
<?js if (it.FlipX) { ?>#{it.Name}.setFlippedX(true);<?js } ?>
<?js if (it.Position) { ?>
<?js var position = it.Position; ?>
#{it.Name}.setPosition(cc.p(${position.X || 0}, ${position.Y || 0}));
<?js } ?>
<?js var scale = it.Scale;  if(scale != null){ ?>
#{it.Name}.setScaleX(${scale.ScaleX || 1});
#{it.Name}.setScaleY(${scale.ScaleY || 1});
 <?js } ?>
<?js  var rotationSkewX = it.RotationSkewX;  if (rotationSkewX != null){ ?>
 #{it.Name}.setRotationX(${rotationSkewX});
 <?js } ?>
<?js  var rotationSkewY = it.RotationSkewY;  if (rotationSkewY) { ?>
 #{it.Name}.setRotationY(${rotationSkewY});
 <?js } ?>
<?js  var anchor = it.AnchorPoint;    if(anchor != null){ ?>
 #{it.Name}.setAnchorPoint(cc.p(${anchor.ScaleX || 0}, ${anchor.ScaleY || 0}));
 <?js } ?>
<?js  if (it.ZOrder != null) { ?>
#{it.Name}.setLocalZOrder(#{it.ZOrder});
 <?js } ?>
<?js if(it.VisibleForFrame == false) { ?>
#{it.Name}.setVisible(false);
 <?js } ?>
<?js if(it.color) { ?>
#{it.Name}.setColor(#{it.color});
<?js } ?>
#{it.Name}.setContentSize(cc.size(#{it.Size.X || 0}, #{it.Size.Y || 0}));
<?js if (it.Alpha != null) { ?>
#{it.Name}.setOpacity(#{it.Alpha});
 <?js } ?>
#{it.Name}.setTag(#{it.Tag || 0 });
<?js var actionTag = it.ActionTag || 0; ?>
var extensionData = new ccs.ObjectExtensionData();
<?js var customProperty = it.UserData;
if(customProperty !== undefined) { ?>
extensionData.setCustomProperty(${customProperty});
<?js } ?>
extensionData.setActionTag(${actionTag});
#{it.Name}.setUserObject(extensionData);
//#{it.Name}.setTouchEnabled(#{it.TouchEnable || false});
<?js  var callBackType = it.CallBackType;  if(callBackType != null) {?>
#{it.Name}.setCallbackType("${callBackType}");
<?js } ?>
<?js  var callBackName = it.CallBackName;  if(callBackName != null) {?>
#{it.Name}.setCallbackName("${callBackName}");
<?js } ?>
var layoutComponent = ccui.LayoutComponent.bindLayoutComponent(#{it.Name});
layoutComponent.setPositionPercentXEnabled(#{it.PositionPercentXEnable || false});
layoutComponent.setPositionPercentYEnabled(#{it.PositionPercentYEnable || false});
<?js if(it.PrePosition != null){ ?>
layoutComponent.setPositionPercentX(#{it.PrePosition.X || 0});
layoutComponent.setPositionPercentY(#{it.PrePosition.Y || 0});
<?js } ?>
layoutComponent.setPercentWidthEnabled( #{it.PercentWidthEnable || false});
layoutComponent.setPercentHeightEnabled(#{it.PercentHeightEnable || false});
<?js if(it.PreSize != null){ ?>
layoutComponent.setPercentWidth(#{it.PreSize.X  || 0});
layoutComponent.setPercentHeight(#{it.PreSize.Y  || 0});
<?js } ?>
layoutComponent.setStretchWidthEnabled(#{it.StretchWidthEnable|| false});
layoutComponent.setStretchHeightEnabled(#{it.StretchHeightEnable|| false});

<?js if(it.HorizontalEdge == "LeftEdge") {?>
layoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.LEFT);
<?js } ?>
<?js if(it.HorizontalEdge == "RightEdge") {?>
layoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.RIGHT);
<?js } ?>
<?js if(it.HorizontalEdge == "BothEdge") {?>
layoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.CENTER);
<?js } ?>
<?js if(!it.HorizontalEdge) {?>
layoutComponent.setHorizontalEdge(ccui.LayoutComponent.horizontalEdge.NONE);
<?js } ?>
<?js if(it.VerticalEdge == "TopEdge") {?>
layoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.TOP);
<?js } ?>
<?js if(it.VerticalEdge == "BottomEdge") {?>
layoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.BOTTOM);
<?js } ?>
<?js if(it.VerticalEdge == "BothEdge") {?>
layoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.CENTER);
<?js } ?>
<?js if(!it.VerticalEdge) {?>
layoutComponent.setVerticalEdge(ccui.LayoutComponent.verticalEdge.NONE);
<?js } ?>
<?js if(it.TopMargin) { ?>
layoutComponent.setTopMargin(#{it.TopMargin});
<?js } ?>
<?js if(it.BottomMargin) { ?>
layoutComponent.setBottomMargin( #{it.BottomMargin});
<?js } ?>
<?js if(it.LeftMargin) { ?>
layoutComponent.setLeftMargin(#{it.LeftMargin});
<?js } ?>
<?js if(it.RightMargin) { ?>
layoutComponent.setRightMargin(#{it.RightMargin});
<?js } ?>
layoutComponent.refreshLayout();
//attr end
// custom
#{it.Name}.timeline.setTimeSpeed(#{it.InnerActionSpeed || 1});
// custom end
// common
#{it.children}
// #{it.Name} end
