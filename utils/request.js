function requestGet(url, data, success) {
    var app = getApp();
    wx.request({
        url: app.globalData.path + url,
        method: 'POST',
        dataType: 'json',
        data: data,
        header: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        success: function (res) {
            if (res.data.code == 200) {
                success(res.data)
            } else {
                wx.showModal({
                    title: '温馨提示',
                    content: res.data.msg,
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定')
                        } else {
                            console.log('用户点击取消')
                        }
                    }
                })
            }
        },
        fail: function(res){
            console.log(res)
        }
    })
}


function request(url, data, success) {
    var app = getApp();
    wx.request({
        url: app.globalData.path + url,
        method: 'POST',
        dataType: 'json',
        data: data,
        xhrFields: { withCredentials: true },
        header: {
            'cookie': app.globalData.sessionId,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        success: function (res) {
            if (res.data.code == 200) {
                success(res.data)
            } else {
                wx.showModal({
                    title: '温馨提示',
                    content: res.data.msg,
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定')
                        } else {
                            console.log('用户点击取消')
                        }
                    }
                })
            }
        }
    })
}

function requestHeader(url, data, success) {
    var app = getApp();
    wx.request({
        url: app.globalData.path + url,
        method: 'POST',
        dataType: 'json',
        data: data,
        xhrFields: { withCredentials: true },
        header: {
            'cookie': app.globalData.sessionId,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        success: function (res) {
            if (res.data.code == 200) {
                success(res.data)
            } else {
                wx.showModal({
                    title: '温馨提示',
                    content: res.data.msg,
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定')
                        } else {
                            console.log('用户点击取消')
                        }
                    }
                })
            }
        }
    })
}

module.exports = {
    request: request,
    requestHeader: requestHeader,
    requestGet: requestGet
}