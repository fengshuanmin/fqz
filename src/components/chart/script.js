import $ from "jquery"
var echarts = require('echarts')

export default {
  data(){
    return {
    	dialogVisible: false,
      textarea:''
    }
  },
  mounted(){
  	let self=this
	/*var myChart = echarts.init(document.getElementById('main'));

      var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [20, 36, 10, 10, 20]
            }],
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on("click", function (param){
          console.log(param)
          self.dialogVisible = true
        });
        console.log(self.dialogVisible)*/
    var myChart = echarts.init(document.getElementById('main'));
    var data=[{
      "name": "flare",
      "children": [
        {
          "name": "analytics",
          "children": [
            {
              "name": "cluster",
              "children": [
                {
                  "name": "AgglomerativeCluster",
                  "value": 3938
                },
                {
                  "name": "CommunityStructure",
                  "value": 3812
                },
                {
                  "name": "HierarchicalCluster",
                  "value": 6714
                },
                {
                  "name": "MergeEdge",
                  "value": 743
                }
              ]
            },
            {
              "name": "graph",
              "children": [
                {
                  "name": "BetweennessCentrality",
                  "value": 3534
                },
                {
                  "name": "LinkDistance",
                  "value": 5731
                },
                {
                  "name": "MaxFlowMinCut",
                  "value": 7840
                },
                {
                  "name": "ShortestPaths",
                  "value": 5914
                },
                {
                  "name": "SpanningTree",
                  "value": 3416
                }
              ]
            },
            {
              "name": "optimization",
              "children": [
                {
                  "name": "AspectRatioBanker",
                  "value": 7074
                }
              ]
            }
          ]
        },
        {
          "name": "animate",
          "children": [
            {
              "name": "Easing",
              "value": 17010
            },
            {
              "name": "FunctionSequence",
              "value": 5842
            },
            {
              "name": "interpolate",
              "children": [
                {
                  "name": "ArrayInterpolator",
                  "value": 1983
                },
                {
                  "name": "ColorInterpolator",
                  "value": 2047
                },
                {
                  "name": "DateInterpolator",
                  "value": 1375
                },
                {
                  "name": "Interpolator",
                  "value": 8746
                },
                {
                  "name": "MatrixInterpolator",
                  "value": 2202
                },
                {
                  "name": "NumberInterpolator",
                  "value": 1382
                },
                {
                  "name": "ObjectInterpolator",
                  "value": 1629
                },
                {
                  "name": "PointInterpolator",
                  "value": 1675
                },
                {
                  "name": "RectangleInterpolator",
                  "value": 2042
                }
              ]
            },
            {
              "name": "ISchedulable",
              "value": 1041
            },
            {
              "name": "Parallel",
              "value": 5176
            },
            {
              "name": "Pause",
              "value": 449
            },
            {
              "name": "Scheduler",
              "value": 5593
            },
            {
              "name": "Sequence",
              "value": 5534
            },
            {
              "name": "Transition",
              "value": 9201
            },
            {
              "name": "Transitioner",
              "value": 19975
            },
            {
              "name": "TransitionEvent",
              "value": 1116
            },
            {
              "name": "Tween",
              "value": 6006
            }
          ]
        },
        {
          "name": "data",
          "children": [
            {
              "name": "converters",
              "children": [
                {
                  "name": "Converters",
                  "value": 721
                },
                {
                  "name": "DelimitedTextConverter",
                  "value": 4294
                },
                {
                  "name": "GraphMLConverter",
                  "value": 9800
                },
                {
                  "name": "IDataConverter",
                  "value": 1314
                },
                {
                  "name": "JSONConverter",
                  "value": 2220
                }
              ]
            },
            {
              "name": "DataField",
              "value": 1759
            },
            {
              "name": "DataSchema",
              "value": 2165
            },
            {
              "name": "DataSet",
              "value": 586
            },
            {
              "name": "DataSource",
              "value": 3331
            },
            {
              "name": "DataTable",
              "value": 772
            },
            {
              "name": "DataUtil",
              "value": 3322
            }
          ]
        },
        {
          "name": "display",
          "children": [
            {
              "name": "DirtySprite",
              "value": 8833
            },
            {
              "name": "LineSprite",
              "value": 1732
            },
            {
              "name": "RectSprite",
              "value": 3623
            },
            {
              "name": "TextSprite",
              "value": 10066
            }
          ]
        },
        {
          "name": "flex",
          "children": [
            {
              "name": "FlareVis",
              "value": 4116
            }
          ]
        },
        {
          "name": "physics",
          "children": [
            {
              "name": "DragForce",
              "value": 1082
            },
            {
              "name": "GravityForce",
              "value": 1336
            },
            {
              "name": "IForce",
              "value": 319
            },
            {
              "name": "NBodyForce",
              "value": 10498
            },
            {
              "name": "Particle",
              "value": 2822
            },
            {
              "name": "Simulation",
              "value": 9983
            },
            {
              "name": "Spring",
              "value": 2213
            },
            {
              "name": "SpringForce",
              "value": 1681
            }
          ]
        },
        {
          "name": "query",
          "children": [
            {
              "name": "AggregateExpression",
              "value": 1616
            },
            {
              "name": "And",
              "value": 1027
            },
            {
              "name": "Arithmetic",
              "value": 3891
            },
            {
              "name": "Average",
              "value": 891
            },
            {
              "name": "BinaryExpression",
              "value": 2893
            },
            {
              "name": "Comparison",
              "value": 5103
            },
            {
              "name": "CompositeExpression",
              "value": 3677
            },
            {
              "name": "Count",
              "value": 781
            },
            {
              "name": "DateUtil",
              "value": 4141
            },
            {
              "name": "Distinct",
              "value": 933
            },
            {
              "name": "Expression",
              "value": 5130
            },
            {
              "name": "ExpressionIterator",
              "value": 3617
            },
            {
              "name": "Fn",
              "value": 3240
            },
            {
              "name": "If",
              "value": 2732
            },
            {
              "name": "IsA",
              "value": 2039
            },
            {
              "name": "Literal",
              "value": 1214
            },
            {
              "name": "Match",
              "value": 3748
            },
            {
              "name": "Maximum",
              "value": 843
            },
            {
              "name": "methods",
              "children": [
                {
                  "name": "add",
                  "value": 593
                },
                {
                  "name": "and",
                  "value": 330
                },
                {
                  "name": "average",
                  "value": 287
                },
                {
                  "name": "count",
                  "value": 277
                },
                {
                  "name": "distinct",
                  "value": 292
                },
                {
                  "name": "div",
                  "value": 595
                },
                {
                  "name": "eq",
                  "value": 594
                },
                {
                  "name": "fn",
                  "value": 460
                },
                {
                  "name": "gt",
                  "value": 603
                },
                {
                  "name": "gte",
                  "value": 625
                },
                {
                  "name": "iff",
                  "value": 748
                },
                {
                  "name": "isa",
                  "value": 461
                },
                {
                  "name": "lt",
                  "value": 597
                },
                {
                  "name": "lte",
                  "value": 619
                },
                {
                  "name": "max",
                  "value": 283
                },
                {
                  "name": "min",
                  "value": 283
                },
                {
                  "name": "mod",
                  "value": 591
                },
                {
                  "name": "mul",
                  "value": 603
                },
                {
                  "name": "neq",
                  "value": 599
                },
                {
                  "name": "not",
                  "value": 386
                },
                {
                  "name": "or",
                  "value": 323
                },
                {
                  "name": "orderby",
                  "value": 307
                },
                {
                  "name": "range",
                  "value": 772
                },
                {
                  "name": "select",
                  "value": 296
                },
                {
                  "name": "stddev",
                  "value": 363
                },
                {
                  "name": "sub",
                  "value": 600
                },
                {
                  "name": "sum",
                  "value": 280
                },
                {
                  "name": "update",
                  "value": 307
                },
                {
                  "name": "variance",
                  "value": 335
                },
                {
                  "name": "where",
                  "value": 299
                },
                {
                  "name": "xor",
                  "value": 354
                },
                {
                  "name": "-",
                  "value": 264
                }
              ]
            },
            {
              "name": "Minimum",
              "value": 843
            },
            {
              "name": "Not",
              "value": 1554
            },
            {
              "name": "Or",
              "value": 970
            },
            {
              "name": "Query",
              "value": 13896
            },
            {
              "name": "Range",
              "value": 1594
            },
            {
              "name": "StringUtil",
              "value": 4130
            },
            {
              "name": "Sum",
              "value": 791
            },
            {
              "name": "Variable",
              "value": 1124
            },
            {
              "name": "Variance",
              "value": 1876
            },
            {
              "name": "Xor",
              "value": 1101
            }
          ]
        },
        {
          "name": "scale",
          "children": [
            {
              "name": "IScaleMap",
              "value": 2105
            },
            {
              "name": "LinearScale",
              "value": 1316
            },
            {
              "name": "LogScale",
              "value": 3151
            },
            {
              "name": "OrdinalScale",
              "value": 3770
            },
            {
              "name": "QuantileScale",
              "value": 2435
            },
            {
              "name": "QuantitativeScale",
              "value": 4839
            },
            {
              "name": "RootScale",
              "value": 1756
            },
            {
              "name": "Scale",
              "value": 4268
            },
            {
              "name": "ScaleType",
              "value": 1821
            },
            {
              "name": "TimeScale",
              "value": 5833
            }
          ]
        },
        {
          "name": "util",
          "children": [
            {
              "name": "Arrays",
              "value": 8258
            },
            {
              "name": "Colors",
              "value": 10001
            },
            {
              "name": "Dates",
              "value": 8217
            },
            {
              "name": "Displays",
              "value": 12555
            },
            {
              "name": "Filter",
              "value": 2324
            },
            {
              "name": "Geometry",
              "value": 10993
            },
            {
              "name": "heap",
              "children": [
                {
                  "name": "FibonacciHeap",
                  "value": 9354
                },
                {
                  "name": "HeapNode",
                  "value": 1233
                }
              ]
            },
            {
              "name": "IEvaluable",
              "value": 335
            },
            {
              "name": "IPredicate",
              "value": 383
            },
            {
              "name": "IValueProxy",
              "value": 874
            },
            {
              "name": "math",
              "children": [
                {
                  "name": "DenseMatrix",
                  "value": 3165
                },
                {
                  "name": "IMatrix",
                  "value": 2815
                },
                {
                  "name": "SparseMatrix",
                  "value": 3366
                }
              ]
            },
            {
              "name": "Maths",
              "value": 17705
            },
            {
              "name": "Orientation",
              "value": 1486
            },
            {
              "name": "palette",
              "children": [
                {
                  "name": "ColorPalette",
                  "value": 6367
                },
                {
                  "name": "Palette",
                  "value": 1229
                },
                {
                  "name": "ShapePalette",
                  "value": 2059
                },
                {
                  "name": "SizePalette",
                  "value": 2291
                }
              ]
            },
            {
              "name": "Property",
              "value": 5559
            },
            {
              "name": "Shapes",
              "value": 19118
            },
            {
              "name": "Sort",
              "value": 6887
            },
            {
              "name": "Stats",
              "value": 6557
            },
            {
              "name": "Strings",
              "value": 22026
            }
          ]
        },
        {
          "name": "vis",
          "children": [
            {
              "name": "axis",
              "children": [
                {
                  "name": "Axes",
                  "value": 1302
                },
                {
                  "name": "Axis",
                  "value": 24593
                },
                {
                  "name": "AxisGridLine",
                  "value": 652
                },
                {
                  "name": "AxisLabel",
                  "value": 636
                },
                {
                  "name": "CartesianAxes",
                  "value": 6703
                }
              ]
            },
            {
              "name": "controls",
              "children": [
                {
                  "name": "AnchorControl",
                  "value": 2138
                },
                {
                  "name": "ClickControl",
                  "value": 3824
                },
                {
                  "name": "Control",
                  "value": 1353
                },
                {
                  "name": "ControlList",
                  "value": 4665
                },
                {
                  "name": "DragControl",
                  "value": 2649
                },
                {
                  "name": "ExpandControl",
                  "value": 2832
                },
                {
                  "name": "HoverControl",
                  "value": 4896
                },
                {
                  "name": "IControl",
                  "value": 763
                },
                {
                  "name": "PanZoomControl",
                  "value": 5222
                },
                {
                  "name": "SelectionControl",
                  "value": 7862
                },
                {
                  "name": "TooltipControl",
                  "value": 8435
                }
              ]
            },
            {
              "name": "data",
              "children": [
                {
                  "name": "Data",
                  "value": 20544
                },
                {
                  "name": "DataList",
                  "value": 19788
                },
                {
                  "name": "DataSprite",
                  "value": 10349
                },
                {
                  "name": "EdgeSprite",
                  "value": 3301
                },
                {
                  "name": "NodeSprite",
                  "value": 19382
                },
                {
                  "name": "render",
                  "children": [
                    {
                      "name": "ArrowType",
                      "value": 698
                    },
                    {
                      "name": "EdgeRenderer",
                      "value": 5569
                    },
                    {
                      "name": "IRenderer",
                      "value": 353
                    },
                    {
                      "name": "ShapeRenderer",
                      "value": 2247
                    }
                  ]
                },
                {
                  "name": "ScaleBinding",
                  "value": 11275
                },
                {
                  "name": "Tree",
                  "value": 7147
                },
                {
                  "name": "TreeBuilder",
                  "value": 9930
                }
              ]
            },
            {
              "name": "events",
              "children": [
                {
                  "name": "DataEvent",
                  "value": 2313
                },
                {
                  "name": "SelectionEvent",
                  "value": 1880
                },
                {
                  "name": "TooltipEvent",
                  "value": 1701
                },
                {
                  "name": "VisualizationEvent",
                  "value": 1117
                }
              ]
            },
            {
              "name": "legend",
              "children": [
                {
                  "name": "Legend",
                  "value": 20859
                },
                {
                  "name": "LegendItem",
                  "value": 4614
                },
                {
                  "name": "LegendRange",
                  "value": 10530
                }
              ]
            },
            {
              "name": "operator",
              "children": [
                {
                  "name": "distortion",
                  "children": [
                    {
                      "name": "BifocalDistortion",
                      "value": 4461
                    },
                    {
                      "name": "Distortion",
                      "value": 6314
                    },
                    {
                      "name": "FisheyeDistortion",
                      "value": 3444
                    }
                  ]
                },
                {
                  "name": "encoder",
                  "children": [
                    {
                      "name": "ColorEncoder",
                      "value": 3179
                    },
                    {
                      "name": "Encoder",
                      "value": 4060
                    },
                    {
                      "name": "PropertyEncoder",
                      "value": 4138
                    },
                    {
                      "name": "ShapeEncoder",
                      "value": 1690
                    },
                    {
                      "name": "SizeEncoder",
                      "value": 1830
                    }
                  ]
                },
                {
                  "name": "filter",
                  "children": [
                    {
                      "name": "FisheyeTreeFilter",
                      "value": 5219
                    },
                    {
                      "name": "GraphDistanceFilter",
                      "value": 3165
                    },
                    {
                      "name": "VisibilityFilter",
                      "value": 3509
                    }
                  ]
                },
                {
                  "name": "IOperator",
                  "value": 1286
                },
                {
                  "name": "label",
                  "children": [
                    {
                      "name": "Labeler",
                      "value": 9956
                    },
                    {
                      "name": "RadialLabeler",
                      "value": 3899
                    },
                    {
                      "name": "StackedAreaLabeler",
                      "value": 3202
                    }
                  ]
                },
                {
                  "name": "layout",
                  "children": [
                    {
                      "name": "AxisLayout",
                      "value": 6725
                    },
                    {
                      "name": "BundledEdgeRouter",
                      "value": 3727
                    },
                    {
                      "name": "CircleLayout",
                      "value": 9317
                    },
                    {
                      "name": "CirclePackingLayout",
                      "value": 12003
                    },
                    {
                      "name": "DendrogramLayout",
                      "value": 4853
                    },
                    {
                      "name": "ForceDirectedLayout",
                      "value": 8411
                    },
                    {
                      "name": "IcicleTreeLayout",
                      "value": 4864
                    },
                    {
                      "name": "IndentedTreeLayout",
                      "value": 3174
                    },
                    {
                      "name": "Layout",
                      "value": 7881
                    },
                    {
                      "name": "NodeLinkTreeLayout",
                      "value": 12870
                    },
                    {
                      "name": "PieLayout",
                      "value": 2728
                    },
                    {
                      "name": "RadialTreeLayout",
                      "value": 12348
                    },
                    {
                      "name": "RandomLayout",
                      "value": 870
                    },
                    {
                      "name": "StackedAreaLayout",
                      "value": 9121
                    },
                    {
                      "name": "TreeMapLayout",
                      "value": 9191
                    }
                  ]
                },
                {
                  "name": "Operator",
                  "value": 2490
                },
                {
                  "name": "OperatorList",
                  "value": 5248
                },
                {
                  "name": "OperatorSequence",
                  "value": 4190
                },
                {
                  "name": "OperatorSwitch",
                  "value": 2581
                },
                {
                  "name": "SortOperator",
                  "value": 2023
                }
              ]
            },
            {
              "name": "Visualization",
              "value": 16540
            }
          ]
        }
      ]
    },{
      "name": "yarn",
      "children": [
        {
          "name": "analytics",
          "children": [
            {
              "name": "cluster",
              "children": [
                {
                  "name": "AgglomerativeCluster",
                  "value": 3938
                },
                {
                  "name": "CommunityStructure",
                  "value": 3812
                },
                {
                  "name": "HierarchicalCluster",
                  "value": 6714
                },
                {
                  "name": "MergeEdge",
                  "value": 743
                }
              ]
            },
            {
              "name": "graph",
              "children": [
                {
                  "name": "BetweennessCentrality",
                  "value": 3534
                },
                {
                  "name": "LinkDistance",
                  "value": 5731
                },
                {
                  "name": "MaxFlowMinCut",
                  "value": 7840
                },
                {
                  "name": "ShortestPaths",
                  "value": 5914
                },
                {
                  "name": "SpanningTree",
                  "value": 3416
                }
              ]
            },
            {
              "name": "optimization",
              "children": [
                {
                  "name": "AspectRatioBanker",
                  "value": 7074
                }
              ]
            }
          ]
        },
        {
          "name": "animate",
          "children": [
            {
              "name": "Easing",
              "value": 17010
            },
            {
              "name": "FunctionSequence",
              "value": 5842
            },
            {
              "name": "interpolate",
              "children": [
                {
                  "name": "ArrayInterpolator",
                  "value": 1983
                },
                {
                  "name": "ColorInterpolator",
                  "value": 2047
                },
                {
                  "name": "DateInterpolator",
                  "value": 1375
                },
                {
                  "name": "Interpolator",
                  "value": 8746
                },
                {
                  "name": "MatrixInterpolator",
                  "value": 2202
                },
                {
                  "name": "NumberInterpolator",
                  "value": 1382
                },
                {
                  "name": "ObjectInterpolator",
                  "value": 1629
                },
                {
                  "name": "PointInterpolator",
                  "value": 1675
                },
                {
                  "name": "RectangleInterpolator",
                  "value": 2042
                }
              ]
            },
            {
              "name": "ISchedulable",
              "value": 1041
            },
            {
              "name": "Parallel",
              "value": 5176
            },
            {
              "name": "Pause",
              "value": 449
            },
            {
              "name": "Scheduler",
              "value": 5593
            },
            {
              "name": "Sequence",
              "value": 5534
            },
            {
              "name": "Transition",
              "value": 9201
            },
            {
              "name": "Transitioner",
              "value": 19975
            },
            {
              "name": "TransitionEvent",
              "value": 1116
            },
            {
              "name": "Tween",
              "value": 6006
            }
          ]
        },
        {
          "name": "data",
          "children": [
            {
              "name": "converters",
              "children": [
                {
                  "name": "Converters",
                  "value": 721
                },
                {
                  "name": "DelimitedTextConverter",
                  "value": 4294
                },
                {
                  "name": "GraphMLConverter",
                  "value": 9800
                },
                {
                  "name": "IDataConverter",
                  "value": 1314
                },
                {
                  "name": "JSONConverter",
                  "value": 2220
                }
              ]
            },
            {
              "name": "DataField",
              "value": 1759
            },
            {
              "name": "DataSchema",
              "value": 2165
            },
            {
              "name": "DataSet",
              "value": 586
            },
            {
              "name": "DataSource",
              "value": 3331
            },
            {
              "name": "DataTable",
              "value": 772
            },
            {
              "name": "DataUtil",
              "value": 3322
            }
          ]
        },
        {
          "name": "display",
          "children": [
            {
              "name": "DirtySprite",
              "value": 8833
            },
            {
              "name": "LineSprite",
              "value": 1732
            },
            {
              "name": "RectSprite",
              "value": 3623
            },
            {
              "name": "TextSprite",
              "value": 10066
            }
          ]
        },
        {
          "name": "flex",
          "children": [
            {
              "name": "FlareVis",
              "value": 4116
            }
          ]
        },
        {
          "name": "physics",
          "children": [
            {
              "name": "DragForce",
              "value": 1082
            },
            {
              "name": "GravityForce",
              "value": 1336
            },
            {
              "name": "IForce",
              "value": 319
            },
            {
              "name": "NBodyForce",
              "value": 10498
            },
            {
              "name": "Particle",
              "value": 2822
            },
            {
              "name": "Simulation",
              "value": 9983
            },
            {
              "name": "Spring",
              "value": 2213
            },
            {
              "name": "SpringForce",
              "value": 1681
            }
          ]
        },
        {
          "name": "query",
          "children": [
            {
              "name": "AggregateExpression",
              "value": 1616
            },
            {
              "name": "And",
              "value": 1027
            },
            {
              "name": "Arithmetic",
              "value": 3891
            },
            {
              "name": "Average",
              "value": 891
            },
            {
              "name": "BinaryExpression",
              "value": 2893
            },
            {
              "name": "Comparison",
              "value": 5103
            },
            {
              "name": "CompositeExpression",
              "value": 3677
            },
            {
              "name": "Count",
              "value": 781
            },
            {
              "name": "DateUtil",
              "value": 4141
            },
            {
              "name": "Distinct",
              "value": 933
            },
            {
              "name": "Expression",
              "value": 5130
            },
            {
              "name": "ExpressionIterator",
              "value": 3617
            },
            {
              "name": "Fn",
              "value": 3240
            },
            {
              "name": "If",
              "value": 2732
            },
            {
              "name": "IsA",
              "value": 2039
            },
            {
              "name": "Literal",
              "value": 1214
            },
            {
              "name": "Match",
              "value": 3748
            },
            {
              "name": "Maximum",
              "value": 843
            },
            {
              "name": "methods",
              "children": [
                {
                  "name": "add",
                  "value": 593
                },
                {
                  "name": "and",
                  "value": 330
                },
                {
                  "name": "average",
                  "value": 287
                },
                {
                  "name": "count",
                  "value": 277
                },
                {
                  "name": "distinct",
                  "value": 292
                },
                {
                  "name": "div",
                  "value": 595
                },
                {
                  "name": "eq",
                  "value": 594
                },
                {
                  "name": "fn",
                  "value": 460
                },
                {
                  "name": "gt",
                  "value": 603
                },
                {
                  "name": "gte",
                  "value": 625
                },
                {
                  "name": "iff",
                  "value": 748
                },
                {
                  "name": "isa",
                  "value": 461
                },
                {
                  "name": "lt",
                  "value": 597
                },
                {
                  "name": "lte",
                  "value": 619
                },
                {
                  "name": "max",
                  "value": 283
                },
                {
                  "name": "min",
                  "value": 283
                },
                {
                  "name": "mod",
                  "value": 591
                },
                {
                  "name": "mul",
                  "value": 603
                },
                {
                  "name": "neq",
                  "value": 599
                },
                {
                  "name": "not",
                  "value": 386
                },
                {
                  "name": "or",
                  "value": 323
                },
                {
                  "name": "orderby",
                  "value": 307
                },
                {
                  "name": "range",
                  "value": 772
                },
                {
                  "name": "select",
                  "value": 296
                },
                {
                  "name": "stddev",
                  "value": 363
                },
                {
                  "name": "sub",
                  "value": 600
                },
                {
                  "name": "sum",
                  "value": 280
                },
                {
                  "name": "update",
                  "value": 307
                },
                {
                  "name": "variance",
                  "value": 335
                },
                {
                  "name": "where",
                  "value": 299
                },
                {
                  "name": "xor",
                  "value": 354
                },
                {
                  "name": "-",
                  "value": 264
                }
              ]
            },
            {
              "name": "Minimum",
              "value": 843
            },
            {
              "name": "Not",
              "value": 1554
            },
            {
              "name": "Or",
              "value": 970
            },
            {
              "name": "Query",
              "value": 13896
            },
            {
              "name": "Range",
              "value": 1594
            },
            {
              "name": "StringUtil",
              "value": 4130
            },
            {
              "name": "Sum",
              "value": 791
            },
            {
              "name": "Variable",
              "value": 1124
            },
            {
              "name": "Variance",
              "value": 1876
            },
            {
              "name": "Xor",
              "value": 1101
            }
          ]
        },
        {
          "name": "scale",
          "children": [
            {
              "name": "IScaleMap",
              "value": 2105
            },
            {
              "name": "LinearScale",
              "value": 1316
            },
            {
              "name": "LogScale",
              "value": 3151
            },
            {
              "name": "OrdinalScale",
              "value": 3770
            },
            {
              "name": "QuantileScale",
              "value": 2435
            },
            {
              "name": "QuantitativeScale",
              "value": 4839
            },
            {
              "name": "RootScale",
              "value": 1756
            },
            {
              "name": "Scale",
              "value": 4268
            },
            {
              "name": "ScaleType",
              "value": 1821
            },
            {
              "name": "TimeScale",
              "value": 5833
            }
          ]
        },
        {
          "name": "util",
          "children": [
            {
              "name": "Arrays",
              "value": 8258
            },
            {
              "name": "Colors",
              "value": 10001
            },
            {
              "name": "Dates",
              "value": 8217
            },
            {
              "name": "Displays",
              "value": 12555
            },
            {
              "name": "Filter",
              "value": 2324
            },
            {
              "name": "Geometry",
              "value": 10993
            },
            {
              "name": "heap",
              "children": [
                {
                  "name": "FibonacciHeap",
                  "value": 9354
                },
                {
                  "name": "HeapNode",
                  "value": 1233
                }
              ]
            },
            {
              "name": "IEvaluable",
              "value": 335
            },
            {
              "name": "IPredicate",
              "value": 383
            },
            {
              "name": "IValueProxy",
              "value": 874
            },
            {
              "name": "math",
              "children": [
                {
                  "name": "DenseMatrix",
                  "value": 3165
                },
                {
                  "name": "IMatrix",
                  "value": 2815
                },
                {
                  "name": "SparseMatrix",
                  "value": 3366
                }
              ]
            },
            {
              "name": "Maths",
              "value": 17705
            },
            {
              "name": "Orientation",
              "value": 1486
            },
            {
              "name": "palette",
              "children": [
                {
                  "name": "ColorPalette",
                  "value": 6367
                },
                {
                  "name": "Palette",
                  "value": 1229
                },
                {
                  "name": "ShapePalette",
                  "value": 2059
                },
                {
                  "name": "SizePalette",
                  "value": 2291
                }
              ]
            },
            {
              "name": "Property",
              "value": 5559
            },
            {
              "name": "Shapes",
              "value": 19118
            },
            {
              "name": "Sort",
              "value": 6887
            },
            {
              "name": "Stats",
              "value": 6557
            },
            {
              "name": "Strings",
              "value": 22026
            }
          ]
        },
        {
          "name": "vis",
          "children": [
            {
              "name": "axis",
              "children": [
                {
                  "name": "Axes",
                  "value": 1302
                },
                {
                  "name": "Axis",
                  "value": 24593
                },
                {
                  "name": "AxisGridLine",
                  "value": 652
                },
                {
                  "name": "AxisLabel",
                  "value": 636
                },
                {
                  "name": "CartesianAxes",
                  "value": 6703
                }
              ]
            },
            {
              "name": "controls",
              "children": [
                {
                  "name": "AnchorControl",
                  "value": 2138
                },
                {
                  "name": "ClickControl",
                  "value": 3824
                },
                {
                  "name": "Control",
                  "value": 1353
                },
                {
                  "name": "ControlList",
                  "value": 4665
                },
                {
                  "name": "DragControl",
                  "value": 2649
                },
                {
                  "name": "ExpandControl",
                  "value": 2832
                },
                {
                  "name": "HoverControl",
                  "value": 4896
                },
                {
                  "name": "IControl",
                  "value": 763
                },
                {
                  "name": "PanZoomControl",
                  "value": 5222
                },
                {
                  "name": "SelectionControl",
                  "value": 7862
                },
                {
                  "name": "TooltipControl",
                  "value": 8435
                }
              ]
            },
            {
              "name": "data",
              "children": [
                {
                  "name": "Data",
                  "value": 20544
                },
                {
                  "name": "DataList",
                  "value": 19788
                },
                {
                  "name": "DataSprite",
                  "value": 10349
                },
                {
                  "name": "EdgeSprite",
                  "value": 3301
                },
                {
                  "name": "NodeSprite",
                  "value": 19382
                },
                {
                  "name": "render",
                  "children": [
                    {
                      "name": "ArrowType",
                      "value": 698
                    },
                    {
                      "name": "EdgeRenderer",
                      "value": 5569
                    },
                    {
                      "name": "IRenderer",
                      "value": 353
                    },
                    {
                      "name": "ShapeRenderer",
                      "value": 2247
                    }
                  ]
                },
                {
                  "name": "ScaleBinding",
                  "value": 11275
                },
                {
                  "name": "Tree",
                  "value": 7147
                },
                {
                  "name": "TreeBuilder",
                  "value": 9930
                }
              ]
            },
            {
              "name": "events",
              "children": [
                {
                  "name": "DataEvent",
                  "value": 2313
                },
                {
                  "name": "SelectionEvent",
                  "value": 1880
                },
                {
                  "name": "TooltipEvent",
                  "value": 1701
                },
                {
                  "name": "VisualizationEvent",
                  "value": 1117
                }
              ]
            },
            {
              "name": "legend",
              "children": [
                {
                  "name": "Legend",
                  "value": 20859
                },
                {
                  "name": "LegendItem",
                  "value": 4614
                },
                {
                  "name": "LegendRange",
                  "value": 10530
                }
              ]
            },
            {
              "name": "operator",
              "children": [
                {
                  "name": "distortion",
                  "children": [
                    {
                      "name": "BifocalDistortion",
                      "value": 4461
                    },
                    {
                      "name": "Distortion",
                      "value": 6314
                    },
                    {
                      "name": "FisheyeDistortion",
                      "value": 3444
                    }
                  ]
                },
                {
                  "name": "encoder",
                  "children": [
                    {
                      "name": "ColorEncoder",
                      "value": 3179
                    },
                    {
                      "name": "Encoder",
                      "value": 4060
                    },
                    {
                      "name": "PropertyEncoder",
                      "value": 4138
                    },
                    {
                      "name": "ShapeEncoder",
                      "value": 1690
                    },
                    {
                      "name": "SizeEncoder",
                      "value": 1830
                    }
                  ]
                },
                {
                  "name": "filter",
                  "children": [
                    {
                      "name": "FisheyeTreeFilter",
                      "value": 5219
                    },
                    {
                      "name": "GraphDistanceFilter",
                      "value": 3165
                    },
                    {
                      "name": "VisibilityFilter",
                      "value": 3509
                    }
                  ]
                },
                {
                  "name": "IOperator",
                  "value": 1286
                },
                {
                  "name": "label",
                  "children": [
                    {
                      "name": "Labeler",
                      "value": 9956
                    },
                    {
                      "name": "RadialLabeler",
                      "value": 3899
                    },
                    {
                      "name": "StackedAreaLabeler",
                      "value": 3202
                    }
                  ]
                },
                {
                  "name": "layout",
                  "children": [
                    {
                      "name": "AxisLayout",
                      "value": 6725
                    },
                    {
                      "name": "BundledEdgeRouter",
                      "value": 3727
                    },
                    {
                      "name": "CircleLayout",
                      "value": 9317
                    },
                    {
                      "name": "CirclePackingLayout",
                      "value": 12003
                    },
                    {
                      "name": "DendrogramLayout",
                      "value": 4853
                    },
                    {
                      "name": "ForceDirectedLayout",
                      "value": 8411
                    },
                    {
                      "name": "IcicleTreeLayout",
                      "value": 4864
                    },
                    {
                      "name": "IndentedTreeLayout",
                      "value": 3174
                    },
                    {
                      "name": "Layout",
                      "value": 7881
                    },
                    {
                      "name": "NodeLinkTreeLayout",
                      "value": 12870
                    },
                    {
                      "name": "PieLayout",
                      "value": 2728
                    },
                    {
                      "name": "RadialTreeLayout",
                      "value": 12348
                    },
                    {
                      "name": "RandomLayout",
                      "value": 870
                    },
                    {
                      "name": "StackedAreaLayout",
                      "value": 9121
                    },
                    {
                      "name": "TreeMapLayout",
                      "value": 9191
                    }
                  ]
                },
                {
                  "name": "Operator",
                  "value": 2490
                },
                {
                  "name": "OperatorList",
                  "value": 5248
                },
                {
                  "name": "OperatorSequence",
                  "value": 4190
                },
                {
                  "name": "OperatorSwitch",
                  "value": 2581
                },
                {
                  "name": "SortOperator",
                  "value": 2023
                }
              ]
            },
            {
              "name": "Visualization",
              "value": 16540
            }
          ]
        }
      ]
    }];
    var option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series:[
          {
            type: 'tree',
            data: data,
            left: '2%',
            right: '2%',
            top: '8%',
            bottom: '20%',
            symbol: 'emptyCircle',
            orient: 'vertical',
            expandAndCollapse: true,
            label: {
              normal: {
                position: 'top',
                rotate: -90,
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9
              }
            },
            leaves: {
              label: {
                normal: {
                  position: 'bottom',
                  rotate: -90,
                  verticalAlign: 'middle',
                  align: 'left'
                }
              }
            },
            animationDurationUpdate: 750
          }
        ]
    }
    myChart.setOption(option)
    /* var legendes = ["事件产品", "事件人物", "事件主题", "背景事件", "事件品牌"];
     var texts = [{"name":"事件产品","itemStyle":{"normal":{"color":"#2ca4bf"}}},{"name":"事件人物","itemStyle":{"normal":{"color":"#aacf44"}}},{"name":"事件主题","itemStyle":{"normal":{"color":"#ff9945"}}},{"name":"背景事件","itemStyle":{"normal":{"color":"#3ad1c5"}}},{"name":"事件品牌","itemStyle":{"normal":{"color":"#f7cb4a"}}}];
     var listdata = [{"name":"视频内容分析","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"云服务器BBC","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"理解与交互技术UNIT","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"文字识别","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"人脸识别","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"智能推荐BRS","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频内容分析VCA","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频内容审核 VCR","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"语音识别","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频内容审核","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频封面选图","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"图像识别","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"百度深度学习","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频封面选图VCS","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"张亚勤","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#aacf44"}}}},{"name":"百度与银联商务正式达成战略合作协议","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云ABC技术标识——ABC Inspire发布，进入Cloud2.0时代","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云高级产品专家黄锋视频AI产品发布","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"Ruff成为百度云生态合作伙伴","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"华数传媒网络有限公司亮相2017百度云智峰会","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"未来域，南京度房与百度云合作","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云北京沙龙","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度公司总裁张亚勤百度云智峰会聊云计算","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云CDN流量包1折闪促","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云与传媒行业战略合作签约视频时代","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云总经理尹世明云智峰会展示黑科技","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"2017百度云智峰会","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#3ad1c5"}}}},{"name":"百度云","category":4,"label":{"normal":{"show":true,"textStyle":{"color":"#f7cb4a"}}}}];
     var links = [{"source":"Ruff成为百度云生态合作伙伴","target":"百度云"},{"source":"百度与银联商务正式达成战略合作协议","target":"百度云"},{"source":"百度云","target":"人脸识别"},{"source":"百度云","target":"百度深度学习"},{"source":"百度云北京沙龙","target":"百度云"},{"source":"2017百度云智峰会","target":"百度云总经理尹世明云智峰会展示黑科技"},{"source":"百度云总经理尹世明云智峰会展示黑科技","target":"百度云"},{"source":"百度云","target":"图像识别"},{"source":"2017百度云智峰会","target":"百度云与传媒行业战略合作签约视频时代"},{"source":"百度云与传媒行业战略合作签约视频时代","target":"百度云"},{"source":"百度云","target":"视频封面选图VCS"},{"source":"百度云","target":"视频内容分析"},{"source":"百度云","target":"语音识别"},{"source":"百度云","target":"视频内容审核"},{"source":"百度云","target":"理解与交互技术UNIT"},{"source":"百度云","target":"视频封面选图"},{"source":"百度云","target":"视频内容分析VCA"},{"source":"百度云","target":"视频内容审核 VCR"},{"source":"2017百度云智峰会","target":"百度云高级产品专家黄锋视频AI产品发布"},{"source":"百度云高级产品专家黄锋视频AI产品发布","target":"百度云"},{"source":"百度云","target":"文字识别"},{"source":"2017百度云智峰会","target":"华数传媒网络有限公司亮相2017百度云智峰会"},{"source":"华数传媒网络有限公司亮相2017百度云智峰会","target":"百度云"},{"source":"百度云","target":"智能推荐BRS"},{"source":"2017百度云智峰会","target":"百度云ABC技术标识——ABC Inspire发布，进入Cloud2.0时代"},{"source":"百度云ABC技术标识——ABC Inspire发布，进入Cloud2.0时代","target":"百度云"},{"source":"百度云ABC技术标识——ABC Inspire发布，进入Cloud2.0时代","target":"张亚勤"},{"source":"2017百度云智峰会","target":"百度公司总裁张亚勤百度云智峰会聊云计算"},{"source":"百度公司总裁张亚勤百度云智峰会聊云计算","target":"百度云"},{"source":"百度云","target":"云服务器BBC"},{"source":"百度公司总裁张亚勤百度云智峰会聊云计算","target":"张亚勤"},{"source":"未来域，南京度房与百度云合作","target":"百度云"},{"source":"百度云CDN流量包1折闪促","target":"百度云"}];
     var symbol=''
     for(var i in legendes){
       if(legendes[i]=="事件产品"){
         symbol='image://./static/img/login.png';
       }else{
         symbol='image://./static/img/jb.png';
       }
     }
     var option = {
       title: {
         text: ''
       },
       legend: {
         data: legendes
       },
       tooltip: {
         formatter: function (parmes) {
           if(parmes.data.name){
             return legendes[parmes.data.category] +": " + parmes.name;
           }
         }
       },
       animationDurationUpdate: 300,
       animationEasingUpdate: 'quinticInOut',
       series : [
         {
           type: 'graph',
           layout:'force',
           symbol:symbol,
           symbolSize:15,
           roam: true,
           focusNodeAdjacency:false,
           legendHoverLink:true,
           draggable:true,
           force : {
             repulsion :240,
             gravity : 0.03,
             edgeLength :80,
             layoutAnimation : true
           },
           categories: texts,
           label: {
             normal: {
               show: true,
               position:"left",
               textStyle:{
                 color:'#000',
                 fontSize:'12'
               }
             }
           },
           data: listdata,
           links:links,
           lineStyle: {
             normal: {
               width: 1,
               color: {
                 type: 'radial',
                 x: 0.5,
                 y: 0.5,
                 r: 0.5,
                 globalCoord: false
               }
             }
           }
         }
       ]
     };
     myChart.setOption(option);
     myChart.on("click", function (param){
           console.log(param)
           self.dialogVisible = true
         });*/
  },
  methods:{
  	 /*handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },*/
      valetRate2(){

      }
  },
  computed:{

  },
  components:{

  },
  watch:{

  }
}
