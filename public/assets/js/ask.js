$(function () {
    // 提问点击事件
    $('#btnAsk').click(function () {
        // 获取提问的内容
        var askContent = $('#txtAsk').val();
        if (askContent.trim() == "") {
            layer.open({
                    content: '提问内容不能为空!', 
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
            });
            return false;
        }
        $.ajax({
            url: '/api/ask',
            data: { content: askContent },
            method: 'post',
            success: function (res) {
                // console.dir(res)
                //提示
                layer.open({
                    content: '保存成功', 
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                setTimeout(function(){
                    window.location.href = '/qa/list';
                },2200);
            }
        })
    })
})