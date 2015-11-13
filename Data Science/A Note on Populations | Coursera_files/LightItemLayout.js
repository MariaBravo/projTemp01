"use strict";define("bundles/ondemand/components/item/LightItemLayout",["require","exports","module","react-with-addons","classnames","bundles/phoenix/lib/waitForStores","bundles/ondemand/components/item/ItemNavigation","bundles/content-feedback/components/ItemFeedback","bundles/content-feedback/constants/ItemTypes","bundles/ondemand/utils/useItemSideNav","bundles/ondemand/components/item/ItemMenu","bundles/phoenix/utils/matchMedia","css!./__styles__/LightItemLayout"],function(require,exports,module){var e=require("react-with-addons"),s=require("classnames"),i=require("bundles/phoenix/lib/waitForStores"),n=require("bundles/ondemand/components/item/ItemNavigation"),a=require("bundles/content-feedback/components/ItemFeedback"),u=require("bundles/content-feedback/constants/ItemTypes"),t=require("bundles/ondemand/utils/useItemSideNav"),d=require("bundles/ondemand/components/item/ItemMenu"),r=require("bundles/phoenix/utils/matchMedia"),m=r.isPhoneOrSmaller;require("css!./__styles__/LightItemLayout");var o=e.createClass({displayName:"LightItemLayout",propTypes:{itemMetadata:e.PropTypes.object.isRequired,children:e.PropTypes.node.isRequired,weekNumber:e.PropTypes.number.isRequired,subItemId:e.PropTypes.string,itemType:e.PropTypes.oneOf(Object.keys(u)),isCard:e.PropTypes.bool},getDefaultProps:function getDefaultProps(){return{isCard:!0}},render:function render(){var o=s("rc-LightItemLayout","theme-light",{"horizontal-box":t()}),i=s("content-container",{"card-z0":this.props.isCard,"flex-1":t()}),r=this.props.itemType;return e.createElement("div",{className:o},(!t()||m())&&e.createElement(n,{weekNumber:this.props.weekNumber,lessonName:this.props.itemMetadata.get("lesson.name"),lesson:this.props.itemMetadata.get("lesson"),currentItemId:this.props.itemMetadata.get("id")}),t()&&e.createElement(d,{weekNumber:this.props.weekNumber,currentItemId:this.props.itemMetadata.get("id"),currentLesson:this.props.itemMetadata.get("lesson")}),e.createElement("div",{className:i},e.createElement("div",{className:"content"},this.props.children),e.createElement(a,{itemId:this.props.itemMetadata.get("id"),itemMetadata:this.props.itemMetadata,itemType:r,subItemId:this.props.subItemId})))}});module.exports=i(o,["CourseScheduleStore"],function(e,t){var s=e.CourseScheduleStore,n=t.itemMetadata.get("lesson.module.id");return{weekNumber:s.getSchedule().getWeekForModuleId(n)}})});