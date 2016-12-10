function answerQuestion(aid) {
    //获取回答的内容 如果内容为空 那么不能提交
    var txtContent = $('#txtAnswer').val().trim();
    if (txtContent == "") {
        layer.open({
            content: '回答内容不能为空!',
            skin: 'msg',
            time: 2 //2秒后自动关闭
        });
        return false;
    }
    $.ajax({
        url: '/api/do_answer',
        method: 'post',
        data: { aid: aid, content: txtContent },
        success: function (res) {
            //console.dir(res)
            layer.open({
                content: '回答成功!',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
            setTimeout(function () {
                window.location.reload();// 刷新页面
            }, 2200);
        }
    })
}