//获取应用实例
var app = getApp()
Page({


    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false  // loading
    },
    tapName1: function (event) {
      var that = this
      wx.request({
        url: 'http://localjianhua:8080/jeeplus/userLogin',
        method: 'POST',
        data: {
          "s": "rcojKmWwhSBmK6h21Col7y+wmvAb//M+9K6wLWBGFt5nya565Fd9mPwN5YarlB2JB3ahO4O25bSiLVi76XOcoxJvzfPypxj9FktdQB3TSFJk3isuLUmRD2GD0CX4V6lP"
        },
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          that.setData({
            images1: res.data
          })

        }
      })
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

        //sliderList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    images: res.data
                })
            }
        })

       

        //venuesList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    venuesItems: res.data.data
                })
                setTimeout(function () {
                    that.setData({
                        loadingHidden: true
                    })
                }, 1500)
            }
        })

        //choiceList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    choiceItems: res.data.data.dataList
                })
                setTimeout(function () {
                    that.setData({
                        loadingHidden: true
                    })
                }, 1500)
            }
        })

        
    }
})
