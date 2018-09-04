require([
        'Jquery-ui.custom',
        'Bootstrap',
        'Lodash.compat',
        'Jquery.ui.touch-punch',
        'Jquery.event.move',
        'Jquery.event.swipe',
        'Respond',
        'Breakpoints',
        'Jquery.cookie',
        'Jquery.slimscroll',
        'Jquery.slimscroll.horizontal',
        'Jquery.sparkline',
        'Jquery.flot',
        'Jquery.flot.tooltip',
        'Jquery.flot.resize',
        'Jquery.flot.time',
        'Jquery.flot.growraf',
        'Jquery.easy-pie-chart',
        'Moment',
        'Daterangepicker',
        'Jquery.blockUI',
        'Fullcalendar',
        'Jquery.uniform',
        'Select2',
        'Select2_locale_zh-CN',
        'App',
        'Plugins',
        'Plugins.form-components'
    ],
    function(){
        $(document).ready(function(){
            "use strict";
            App.init();
            Plugins.init();
            FormComponents.init();
            require([ '../../Lib/assets/js/custom']);
            /**
             * Daterangepicker
             */
            var initDaterangepicker = function() {
                if ($.fn.daterangepicker) {
                    $('.range').daterangepicker({
                            startDate:moment(star_time),
                            endDate: moment(end_time),
                            minDate:moment(siteinputtime),
                            maxDate: moment(),
                            //dateLimit: { days: 60 },
                            showDropdowns: true,
                            showWeekNumbers: true,
                            timePicker: false,
                            timePickerIncrement: 1,
                            timePicker12Hour: true,
                            ranges: {
                                //'今天': [moment(), moment()],
                                //'昨天': [moment().subtract('days', 1), moment().subtract('days', 1)],
                                '最近7天': [moment().subtract('days', 6), moment()],
                                '最近30天': [moment().subtract('days', 29), moment()],
                                '这个月': [moment().startOf('month'), moment().endOf('month')],
                                '上个月': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                            },
                            opens: 'left',
                            buttonClasses: ['btn btn-default'],
                            applyClass: 'btn-sm btn-primary',
                            cancelClass: 'btn-sm',
                            format: 'YYYY-MM-DD',
                            separator: ' to ',
                            locale: {
                                applyLabel: '提交',
                                cancelLabel:'取消',
                                fromLabel: '起始',
                                toLabel: '截止',
                                weekLabel:'周数',
                                customRangeLabel: '自定义',
                                daysOfWeek: ['日', '一', '二', '三', '四', '五','六'],
                                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                                firstDay: 1
                            }
                        },
                        function (start, end) {
                            var range_updated = start.format('YYYY年MM月DD日') + ' - ' + end.format('YYYY年MM月DD日');

                            App.blockUI($("#content"));
                            setTimeout(function () {
                                App.unblockUI($("#content"));
                                noty({
                                    text: '<strong>控制面板统计数据已更新为' + range_updated + '.</strong>',
                                    type: 'alert',
                                    timeout: 3000
                                });
                                var startime = $("#daterangepicker_start").val();
                                var endtime = $("#daterangepicker_end").val();
                                var url = "<?php echo ADMIN_FILE; ?>?mod=webstatis&file=webstatis&action=content&ajax=1&startime="+startime+"&endtime="+endtime;
                                $.getJSON(url,function(data){
                                    $("#content_percentage").html(data.complex_content.content_percentage);
                                    $("#total_time_content").html(data.complex_content.total_time_content);
                                    $("#total_time_click").html(data.complex_content.total_time_click);
                                    $("#total_time_comment").html(data.complex_content.total_time_comment);
                                    $("#total_time_user").html(data.complex_content.total_time_user);
                                    var startime_ms = data.complex_content.startime_ms;
                                    var endtime_ms = data.complex_content.endtime_ms;
                                    var plot = data.complex_content.plot;
                                    var plot_data =  new Array();
                                    var plot_ticks = new Array();
                                    for (var i in plot) {
                                        i = parseInt(i);
                                        plot_data.push([plot[i]._dates, plot[i]._count]);
                                        plot_ticks.push([plot[i]._dates, plot[i]._ticks]);
                                    }
                                    var data1 = [
                                        { label: "发布量", data: plot_data, color: App.getLayoutColorCode('blue') }
                                    ];

                                    $.plot("#chart_filled_blue", data1, $.extend(true, {}, Plugins.getFlotDefaults(), {
                                        xaxis: {
                                            min: startime_ms,
                                            max: endtime_ms,
                                            mode: "time",
                                            ticks: plot_ticks,
                                        },
                                        series: {
                                            lines: {
                                                fill: true,
                                                lineWidth: 1.5
                                            },
                                            points: {
                                                show: true,
                                                radius: 2.5,
                                                lineWidth: 1.1
                                            },
                                            grow: { active: true, growings:[ { stepMode: "maximum" } ] }
                                        },
                                        grid: {
                                            hoverable: true,
                                            clickable: true
                                        },
                                        tooltip: true,
                                        tooltipOpts: {
                                            content: '%s: %y'
                                        }
                                    }));
                                });
                                //App.scrollTo();
                            }, 1000);

                            $('.range span').html(range_updated);
                        });

                    $('.range span').html(moment(star_time).format('YYYY年MM月DD日') + ' - ' + moment(end_time).format('YYYY年MM月DD日'));
                }
            }
            initDaterangepicker(); // Daterangepicker for dashboard
        });
    }
);