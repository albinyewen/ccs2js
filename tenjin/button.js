#{it.defineType + it.Name} = new ccui.Button();
<?js if(it.parent) {?>
#{it.parent}.addChild(#{it.Name});
<?js } ?>
<?js if (it.NormalFileData && it.NormalFileData.Type == "MarkedSubImage") { ?> 
#{it.Name}.loadTextureNormal("#{it.NormalFileData.Path}", 1);
<?js }?>
<?js if (it.NormalFileData && it.NormalFileData.Type != "MarkedSubImage") { ?>
#{it.Name}.loadTextureNormal("res/#{it.NormalFileData.Path}", 0);
<?js } ?>
<?js if (it.PressedFileData && it.PressedFileData.Type == "MarkedSubImage") { ?> 
#{it.Name}.loadTexturePressedl("#{it.PressedFileData.Path}", 1);
<?js }?>
<?js if (it.PressedFileData && it.PressedFileData.Type != "MarkedSubImage") { ?>
#{it.Name}.loadTexturePressed("res/#{it.PressedFileData.Path}", 0);
<?js }?>
<?js if (it.DisabledFileData && it.DisabledFileData.Type == "MarkedSubImage") { ?> 
#{it.Name}.loadTextureDisabled("#{it.DisabledFileData.Path}", 1);
<?js }?>
<?js if (it.DisabledFileData && it.DisabledFileData.Type != "MarkedSubImage") { ?>
#{it.Name}.loadTextureDisabled("res/#{it.DisabledFileData.Path}", 0);
<?js } ?>
<?js if(!it.Scale9Enable) { ?>
#{it.Name}.setScale9Enabled(#{it.Scale9Enable || false});
<?js } ?>
<?js var scale9Enabled = it.Scale9Enable; if(scale9Enabled){ ?>
#{it.Name}.setScale9Enabled(true);
#{it.Name}.setUnifySizeEnabled(false);
#{it.Name}.ignoreContentAdaptWithSize(false);
#{it.Name}.setCapInsets(cc.rect(
    #{it.Scale9OriginX || 0},
    #{it.Scale9OriginY || 0},
    #{it.Scale9Width || 0},
    #{it.Scale9Height || 0}
));
<?js } ?>
#{it.Name}.setTitleText("#{it.ButtonText}");
#{it.Name}.setTitleFontSize(#{it.FontSize});
<?js if(it.FontName){ ?>
#{it.Name}.setTitleFontName("#{it.FontName}");
<?js } ?>
<?js if (it.color) { ?>
#{it.Name}.setTitleColor(#{it.textColor});
<?js } ?>
<?js var state = it.DisplayState; if (state === undefined) state = true; ?>
#{it.Name}.setBright(${state});
#{it.Name}.setEnabled(${state});
#{it.Name}.setContentSize(cc.size(#{it.Size.X || 0}, #{it.Size.Y || 0}));
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
#{it.Name}.setTouchEnabled(#{it.TouchEnable || false});
<?js  var callBackType = it.CallBackType;  if(callBackType != null) {?>
#{it.Name}.setCallbackType("${callBackType}");
<?js } ?>
<?js  var callBackName = it.CallBackName;  if(callBackName != null) {?>
#{it.Name}.setCallbackName("${callBackName}");
<?js } ?>
var layoutComponent = MyLayout.bindLayoutComponent(#{it.Name});

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
layoutComponent.setTopMargin(#{it.TopMargin || 0});
layoutComponent.setBottomMargin( #{it.BottomMargin || 0});
layoutComponent.setLeftMargin(#{it.LeftMargin || 0});
layoutComponent.setRightMargin(#{it.RightMargin || 0});
layoutComponent.refreshLayout();
#{it.children}
// #{it.Name} end
