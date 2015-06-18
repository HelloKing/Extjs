/**
 * Created by wangjingxiao on 2015/6/17.
 */
Ext.onReady(function(){

    var box = new Ext.BoxComponent({
        el: 'boxComponent',
        style: 'background-color:red;position:absolute',
        pageX: 100,
        pageY: 50,
        width: 200,
        height: 150
    });
    box.render();

    var panel = new Ext.Panel({
        el: 'panel',
        title: 'panel组件',
        floating: true,
        shadow: true,
        draggable: true,
        collapsible: true,
        html: 'panel 测试内容',
        pageX: 100,
        pageY: 200,
        width: 200,
        height: 150
    });
    panel.render();

    var tabPanel = new Ext.TabPanel({
        el: 'tabPanel',
        renderTo:document.body,
        pageX: 100,
        pageY: 300,
        height: 100,
        width:200,
        floating: true
    });
    tabPanel.add({
        title: '窗口1',
        html: '内容1'
    });
    tabPanel.add({
        id: Ext.id(),
        title: '窗口2',
        html: '内容2',
        closable: true
    });
    tabPanel.activate(0);
    tabPanel.render();

})
