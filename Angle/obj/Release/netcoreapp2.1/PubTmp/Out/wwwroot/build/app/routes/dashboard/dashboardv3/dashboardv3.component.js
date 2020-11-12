"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboardv3Component = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var colors_service_1 = require("../../../shared/colors/colors.service");
var Dashboardv3Component = /** @class */ (function () {
    function Dashboardv3Component(colors, http) {
        var _this = this;
        this.colors = colors;
        this.http = http;
        this.sparkOptions5 = {
            barColor: this.colors.byName('info'),
            height: 30,
            barWidth: '5',
            barSpacing: '2'
        };
        this.easyPiePercent = 70;
        this.pieOptions = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('info'),
            trackColor: 'rgba(200,200,200,0.4)',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'round',
            size: 145
        };
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                // position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        this.defaultColors = {
            markerColor: '#23b7e5',
            bgColor: 'transparent',
            scaleColors: ['#878c9a'],
            regionFill: '#bbbec6' // the base region color
        };
        // Sparkline
        this.sparkOptions1 = this.buildSparkOptionsBlock('info');
        this.sparkOptions2 = this.buildSparkOptionsBlock('purple');
        this.sparkOptions3 = this.buildSparkOptionsBlock('info');
        this.sparkOptions4 = this.buildSparkOptionsBlock('purple');
        // Flot CHart
        http.get('assets/server/chart/splinev3.json').subscribe(function (data) { return _this.splineData = data; });
        // Vector Map
        this.mapName = 'world_mill_en';
        this.mapOptions = {
            markerColor: this.defaultColors.markerColor,
            bgColor: this.defaultColors.bgColor,
            scale: 1,
            scaleColors: this.defaultColors.scaleColors,
            regionFill: this.defaultColors.regionFill
        };
        this.seriesData = {
            'CA': 11100,
            'DE': 2510,
            'FR': 3710,
            'AU': 5710,
            'GB': 8310,
            'RU': 9310,
            'BR': 6610,
            'IN': 7810,
            'CN': 4310,
            'US': 839,
            'SA': 410 // Saudi Arabia
        };
        this.markersData = [
            { latLng: [41.90, 12.45], name: 'Vatican City' },
            { latLng: [43.73, 7.41], name: 'Monaco' },
            { latLng: [-0.52, 166.93], name: 'Nauru' },
            { latLng: [-8.51, 179.21], name: 'Tuvalu' },
            { latLng: [7.11, 171.06], name: 'Marshall Islands' },
            { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
            { latLng: [3.2, 73.22], name: 'Maldives' },
            { latLng: [35.88, 14.5], name: 'Malta' },
            { latLng: [41.0, -71.06], name: 'New England' },
            { latLng: [12.05, -61.75], name: 'Grenada' },
            { latLng: [13.16, -59.55], name: 'Barbados' },
            { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
            { latLng: [-4.61, 55.45], name: 'Seychelles' },
            { latLng: [7.35, 134.46], name: 'Palau' },
            { latLng: [42.5, 1.51], name: 'Andorra' }
        ];
    }
    // The four top block options only changes its color
    // use a common function to generate optiosn per color
    Dashboardv3Component.prototype.buildSparkOptionsBlock = function (color) {
        return {
            type: 'line',
            width: '100%',
            height: 75,
            lineColor: this.colors.byName(color),
            chartRangeMin: 0,
            fillColor: this.colors.byName(color),
            spotColor: this.colors.byName(color),
            minSpotColor: this.colors.byName(color),
            maxSpotColor: this.colors.byName(color),
            highlightSpotColor: this.colors.byName(color),
            highlightLineColor: this.colors.byName(color),
            resize: true
        };
    };
    Dashboardv3Component.prototype.ngOnInit = function () {
    };
    Dashboardv3Component = __decorate([
        core_1.Component({
            selector: 'app-dashboardv3',
            templateUrl: './dashboardv3.component.html',
            styleUrls: ['./dashboardv3.component.scss']
        }),
        __metadata("design:paramtypes", [colors_service_1.ColorsService, http_1.HttpClient])
    ], Dashboardv3Component);
    return Dashboardv3Component;
}());
exports.Dashboardv3Component = Dashboardv3Component;
//# sourceMappingURL=dashboardv3.component.js.map