/**
 * Created by wangjingxiao on 2015/6/17.
 */
Ext.onReady(function(){
    var cm = new Ext.grid.ColumnModel([
        {header: '编号',dataIndex:'id'},
        {header: '名称',dataIndex:'name'},
        {header: '描述',dataIndex:'descn'}
    ]);
    var data = [
        ['1','name1','descn1'],
        ['2','name2','descn2'],
        ['3','name3','descn3']
    ];

    var store = new Ext.data.Store({
        proxy: new Ext.data.MemoryProxy(data),
        reader: new Ext.data.ArrayReader({},[
            {name:'id'},
            {name: 'name'},
            {name: 'descn'}
        ])
    });
    store.load();
    var grid = new Ext.grid.GridPanel({
        renderTo: 'grid1',
        store: store,
        cm: cm,
        width: 400,
        height: 200,
        pageX:100,
        pageY: 100,
        floating: true,
        stripeRows: true,
        loadMask: true

    });

})
