$(document).ready(function(){
    var power = localStorage.getItem("power");
    var ring = localStorage.getItem("ring");
    var pippin = localStorage.getItem("pippin");
    var lolo = localStorage.getItem("lolo");
    var resolucao = localStorage.getItem("resolucao");
    var spinbase = localStorage.getItem("spinbase");
    var curvabase = localStorage.getItem("curvabase");
    var spincut = localStorage.getItem("spincut");
    var autocut = localStorage.getItem("autocut");
    if(power !== null){
       $("#power").val(power);
    }
    if(ring !== null){
      $("#ring").val(ring);
    }
    if(pippin !== null){
        $("#pippin").val(pippin);
     }
     if(lolo !== null){
       $("#lolo").val(lolo);
     }
     if(resolucao !== null){
        $("#resolucao").val(resolucao);
     }
     if(spinbase !== null){
       $("#spinbase").val(spinbase);
     }
     if(curvabase !== null){
         $("#curvabase").val(curvabase);
      }
      if(spincut !== null){
        $("#spincut").val(spincut);
      }
      if(autocut !== null){
        $("#autocut").val(autocut);
      }
  });
  
  function salvar(){
    localStorage.setItem("power",  $("#power").val());
    localStorage.setItem("ring",  $("#ring").val());
    localStorage.setItem("pippin",  $("#pippin").val());
    localStorage.setItem("lolo",  $("#lolo").val());
    localStorage.setItem("resolucao",  $("#resolucao").val());
    localStorage.setItem("spinbase",  $("#spinbase").val());
    localStorage.setItem("curvabase",  $("#curvabase").val());
    localStorage.setItem("spincut",  $("#spincut").val());
    localStorage.setItem("autocut",  $("#autocut").val());
    $("#msg").html("Configurações Salvas !");
  }

function distancias() {
 
    let dadosjson = ('{    "Abbot Mine":{       "2":{          "distancias":[             244.78,             247.9,             "-"          ],          "alturas":[             -13.00,             -12.9,             "-"          ]       },       "6":{          "distancias":[             229.8,             238.24,             "-"          ],          "alturas":[             7.26,             7.76,             "-"          ]       },       "7":{          "distancias":[             244.9,             246.7,             "-"          ],          "alturas":[             -54.3,             -54.6,             "-"          ]       },       "8":{          "distancias":[             327,             332.61,             "-"          ],          "alturas":[             -36,             -36.3,             "-"          ]       },       "10":{          "distancias":[             228,             237.44,             240.88          ],          "alturas":[             -5.37,             -5.19,             -5.32          ]       },       "13":{          "distancias":[             336.1,             347.05,             "-"          ],          "alturas":[             -3.31,             -3.64,             "-"          ]       },       "14":{          "distancias":[             373.62,             379.32,             "-"          ],          "alturas":[             -19.6,             -19.6,             "-"          ]       },       "15":{          "distancias":[             294.84,             302.82,             "-"          ],          "alturas":[             -19.3,             -19.3,             "-"          ]       },       "16":{          "distancias":[             185.11,             212.00,             211.65          ],          "alturas":[             6.93,             6.76,             6.79          ]       },       "17":{          "distancias":[             370.22,             374.05,             383.65          ],          "alturas":[             -3.78,             -3.73,             -3.74          ]       }    },    "Blue Lagoon":{       "2":{          "distancias":[             224.42,             227.72,             230.83          ],          "alturas":[             -3.41,             -3.65,             -3.1          ]       },       "3":{          "distancias":[             368.4,             371.6,             381.2          ],          "alturas":[             0.15,             0.33,             0.27          ]       },       "4":{          "distancias":[             369.28,             370.7,             375.35          ],          "alturas":[             -3.04,             -3.25,             -3.46          ]       },       "6":{          "distancias":[             214.57,             215.62,             226.18          ],          "alturas":[             -2.2,             -2.64,             -2.5          ]       },       "9":{          "distancias":[             382.66,             382.57,             388.49          ],          "alturas":[             0.3,             0.35,             0.24          ]       },       "10":{          "distancias":[             282.83,             289.14,             291.39          ],          "alturas":[             -2.97,             -2.67,             -2.48          ]       },       "11":{          "distancias":[             356.13,             357.18,             363.84          ],          "alturas":[             -6.27,             -6.12,             -5.94          ]       },       "15":{          "distancias":[             260.73,             270.14,             278.51          ],          "alturas":[             -0.05,             -0.05,             -0.04          ]       },       "16":{          "distancias":[             219.5,             231.41,             236.44          ],          "alturas":[             -6.25,             -5.52,             -5.41          ]       },       "17":{          "distancias":[             416,             417.06,             438.74          ],          "alturas":[             -24.2,             -24.4,             -24.8          ]       }    },    "Blue Moon":{       "1":{          "distancias":[             377.24,             384.53,             401.45          ],          "alturas":[             -1.11,             -1.44,             -1.35          ]       },       "2":{          "distancias":[             228.26,             231.38,             241.9          ],          "alturas":[             3.01,             3.49,             3.32          ]       },       "3":{          "distancias":[             375.03,             385.74,             393.65          ],          "alturas":[             4.57,             4.68,             4.73          ]       },       "6":{          "distancias":[             206.75,             209.96,             221.41          ],          "alturas":[             5.47,             5.8,             6.09          ]       },       "10":{          "distancias":[             220.89,             220.94,             236.11          ],          "alturas":[             5.82,             5.24,             5.8          ]       },       "12":{          "distancias":[             268.3,             268.95,             279.53          ],          "alturas":[             0.06,             0.05,             0.04          ]       },       "13":{          "distancias":[             384.8,             394.9,             396.27          ],          "alturas":[             -1.89,             -1.84,             -2.16          ]       },       "14":{          "distancias":[             369.5,             383.82,             394.78          ],          "alturas":[             3.83,             4.51,             4.69          ]       },       "16":{          "distancias":[             265.25,             268.28,             285.13          ],          "alturas":[             2.21,             2.38,             2.71          ]       }    },    "Blue Water":{       "2":{          "distancias":[             213.31,             227.83,             235.75          ],          "alturas":[             -3.48,             -2.99,             -2.96          ]       },       "3":{          "distancias":[             378.74,             391.72,             398.29          ],          "alturas":[             -0.28,             -0.06,             -0.32          ]       },       "4":{          "distancias":[             375.93,             379.04,             392.34          ],          "alturas":[             -2.94,             -2.85,             -2.32          ]       },       "6":{          "distancias":[             234.51,             238.59,             242.58          ],          "alturas":[             -3.16,             -3.56,             -3.28          ]       },       "9":{          "distancias":[             382.9,             395.43,             401.2          ],          "alturas":[             0.33,             0.27,             0.05          ]       },       "10":{          "distancias":[             292.15,             307.15,             310.38          ],          "alturas":[             -2.95,             -2.17,             -1.78          ]       },       "11":{          "distancias":[             363.82,             370.61,             389.75          ],          "alturas":[             -6.39,             -6.17,             -6.45          ]       },       "15":{          "distancias":[             271.84,             283.21,             286.46          ],          "alturas":[             -0.06,             -0.13,             -0.03          ]       },       "16":{          "distancias":[             227.3,             236.12,             245.64          ],          "alturas":[             -5.85,             -5.53,             -5.21          ]       },       "17":{          "distancias":[             403.16,             442.33,             453.1          ],          "alturas":[             -24.1,             -25.2,             -25.2          ]       }    },    "Deep Inferno":{       "1":{          "distancias":[             359.46,             370.8,             373.9          ],          "alturas":[             -1.65,             -1.39,             -1.53          ]       },       "2":{          "distancias":[             260.81,             263.23,             272.76          ],          "alturas":[             -11.3,             -11.5,             -11.4          ]       },       "6":{          "distancias":[             237.2,             237.95,             241.04          ],          "alturas":[             -4.71,             -4.68,             -4.6          ]       },       "8":{          "distancias":[             326.9,             334.8,             339.6          ],          "alturas":[             2.15,             2.37,             2.4          ]       },       "12":{          "distancias":[             273.01,             279.61,             288.78          ],          "alturas":[             -2.98,             -2.86,             -2.63          ]       },       "16":{          "distancias":[             259.69,             270.81,             275.42          ],          "alturas":[             -7.34,             -6.71,             -6.79          ]       },       "18":{          "distancias":[             404.03,             417.6,             418.14          ],          "alturas":[             -3.21,             -2.8,             -3.24          ]       }    },    "Eastern Valley":{       "1":{          "distancias":[             388.18,             395.58,             402.32          ],          "alturas":[             -14.5,             -14.9,             -14.8          ]       },       "3":{          "distancias":[             198.15,             203.55,             203.6          ],          "alturas":[             -0.33,             -0.33,             -0.33          ]       },       "5":{          "distancias":[             366.03,             372.53,             373.43          ],          "alturas":[             -1.76,             -1.76,             -1.76          ]       },       "6":{          "distancias":[             385.7,             388.6,             390.02          ],          "alturas":[             0.09,             0.1,             0.1          ]       },       "8":{          "distancias":[             257.67,             267,             268.67          ],          "alturas":[             -7.85,             -8.03,             -8.18          ]       },       "9":{          "distancias":[             290.2,             294.15,             298.75          ],          "alturas":[             -1.66,             -1.73,             -1.7          ]       },       "10":{          "distancias":[             223.98,             225.05,             233.43          ],          "alturas":[             1.07,             0.99,             0.9          ]       },       "13":{          "distancias":[             374.74,             384.73,             394.48          ],          "alturas":[             -14.4,             -14.7,             -15.1          ]       },       "14":{          "distancias":[             370.72,             373.7,             380.03          ],          "alturas":[             -17.8,             -17.8,             -17.7          ]       },       "15":{          "distancias":[             241.4,             248.9,             250.9          ],          "alturas":[             -15.5,             -15.6,             -15.6          ]       },       "16":{          "distancias":[             380.3,             381.98,             384.02          ],          "alturas":[             -6.08,             -6.18,             -6.18          ]       },       "17":{          "distancias":[             353.5,             358.35,             364.3          ],          "alturas":[             -1.25,             -1.08,             -1.22          ]       },       "18":{          "distancias":[             342.8,             346.4,             347.3          ],          "alturas":[             -9.55,             -9.45,             -9.6          ]       }    },    "Ice Cannon":{       "2":{          "distancias":[             181.14,             197.79,             201.7          ],          "alturas":[             -0.3,             -1.33,             -0.88          ]       },       "3":{          "distancias":[             347.3,             357.2,             370.46          ],          "alturas":[             -16.5,             -16.9,             -16.7          ]       },       "6":{          "distancias":[             364.2,             376.60,             376.58          ],          "alturas":[             6.71,             7.91,             7.18          ]       },       "7":{          "distancias":[             236.37,             249.53,             259.14          ],          "alturas":[             -19.2,             -19.7,             -19.5          ]       },       "11":{          "distancias":[             368.48,             385.7,             388          ],          "alturas":[             -29.6,             -30,             -29.8          ]       },       "13":{          "distancias":[             168.65,             182.07,             191.39          ],          "alturas":[             -14.3,             -14,             -13.8          ]       },       "16":{          "distancias":[             180.29,             184.05,             188.59          ],          "alturas":[             -3.34,             -3.15,             -3.32          ]       }    },    "Ice Inferno":{       "1":{          "distancias":[             359.46,             370.8,             373.9          ],          "alturas":[             -1.53,             -1.01,             -1.2          ]       },       "2":{          "distancias":[             260.81,             263.23,             272.75          ],          "alturas":[             -10.6,             -10.9,             -10.9          ]       },       "6":{          "distancias":[             237.2,             237.95,             241.04          ],          "alturas":[             -4.89,             -4.81,             -4.83          ]       },       "8":{          "distancias":[             326.9,             334.8,             339.6          ],          "alturas":[             2.76,             3.04,             2.97          ]       },       "12":{          "distancias":[             273.01,             279.61,             288.78          ],          "alturas":[             -2.58,             -2.48,             -2.41          ]       },       "16":{          "distancias":[             259.69,             270.81,             275.42          ],          "alturas":[             -6.71,             -6.52,             -6.76          ]       },       "18":{          "distancias":[             404.03,             417.6,             418.14          ],          "alturas":[             -2.86,             -2.87,             -2.85          ]       }    },    "Ice Spa":{       "1":{          "distancias":[             377.6,             381.43,             "-"          ],          "alturas":[             -27.4,             -27.4,             "-"          ]       },       "2":{          "distancias":[             231.68,             236.08,             239.41          ],          "alturas":[             -7.53,             -7.54,             -7.55          ]       },       "4":{          "distancias":[             344.55,             351.85,             353.45          ],          "alturas":[             -20.6,             -20.7,             -20.4          ]       },       "5":{          "distancias":[             275,             282.42,             284.11          ],          "alturas":[             -17.5,             -17.5,             -17.5          ]       },       "6":{          "distancias":[             233.47,             238.91,             239.62          ],          "alturas":[             -12.3,             -11.9,             -12.1          ]       },       "7":{          "distancias":[             369.76,             378.89,             384.41          ],          "alturas":[             0.64,             0.93,             0.84          ]       },       "8":{          "distancias":[             371.67,             379.2,             381.35          ],          "alturas":[             -71.3,             -71.3,             -71.1          ]       },       "9":{          "distancias":[             263.86,             268.14,             269.7          ],          "alturas":[             -9.66,             -9.76,             -9.74          ]       },       "10":{          "distancias":[             232.03,             233.84,             "-"          ],          "alturas":[             -19.4,             -19.4,             "-"          ]       },       "11":{          "distancias":[             303.43,             310.14,             "-"          ],          "alturas":[             -20.4,             -20.1,             "-"          ]       },       "13":{          "distancias":[             385.35,             389.82,             "-"          ],          "alturas":[             -42.7,             -42.4,             "-"          ]       },       "14":{          "distancias":[             230.01,             237.76,             241.21          ],          "alturas":[             -13.8,             -13.8,             -13.9          ]       },       "15":{          "distancias":[             233.16,             236.88,             238.65          ],          "alturas":[             -2.51,             -2.8,             -2.57          ]       },       "16":{          "distancias":[             349.42,             352.15,             354.02          ],          "alturas":[             -13.8,             -14.1,             -13.8          ]       },       "17":{          "distancias":[             317.83,             326.45,             "-"          ],          "alturas":[             -43.7,             -43.6,             "-"          ]       }    },    "Lost Seaway":{       "1":{          "distancias":[             359.98,             360.6,             369          ],          "alturas":[             -0.71,             -0.64,             -0.43          ]       },       "2":{          "distancias":[             229.52,             234.19,             256.34          ],          "alturas":[             0.23,             0.38,             0.47          ]       },       "4":{          "distancias":[             403.08,             404.01,             410.9          ],          "alturas":[             -11.5,             -11.4,             -11.8          ]       },       "5":{          "distancias":[             323.77,             333.01,             339.3          ],          "alturas":[             -7.07,             7,             -6.79          ]       },       "7":{          "distancias":[             384.72,             390,             397.3          ],          "alturas":[             -15.7,             -15.5,             -15.3          ]       },       "8":{          "distancias":[             302.33,             306.59,             314.39          ],          "alturas":[             -13.1,             -13.1,             -13.2          ]       },       "10":{          "distancias":[             229.94,             239.4,             247.29          ],          "alturas":[             -11.9,             -11.8,             -11.5          ]       },       "11":{          "distancias":[             349.48,             355.88,             362.53          ],          "alturas":[             -14.2,             -14.2,             -14.2          ]       },       "13":{          "distancias":[             286.98,             293.22,             300.25          ],          "alturas":[             -13.9,             -14.1,             -14.1          ]       },       "14":{          "distancias":[             205.79,             216.75,             225.27          ],          "alturas":[             -11.7,             -11.8,             -11.6          ]       },       "16":{          "distancias":[             371.9,             373.91,             388.54          ],          "alturas":[             2.48,             2.46,             2.69          ]       },       "17":{          "distancias":[             256.84,             259.91,             272.3          ],          "alturas":[             -21.5,             -21.4,             -21.1          ]       }    },    "Pink Wind":{       "1":{          "distancias":[             337.78,             352.11,             356.74          ],          "alturas":[             -3.44,             -3.36,             -3.37          ]       },       "2":{          "distancias":[             211.21,             223.29,             231.31          ],          "alturas":[             -2.76,             -2.66,             -2.66          ]       },       "3":{          "distancias":[             364.78,             373.38,             377.85          ],          "alturas":[             -2.1,             -2.1,             -2.1          ]       },       "4":{          "distancias":[             323.54,             326.78,             330.02          ],          "alturas":[             -8.82,             -8.82,             -8.82          ]       },       "5":{          "distancias":[             360.27,             375.5,             377.44          ],          "alturas":[             -6.13,             -6.06,             -6.03          ]       },       "6":{          "distancias":[             230.46,             238.15,             240.1          ],          "alturas":[             6.65,             6.97,             6.93          ]       },       "8":{          "distancias":[             386.9,             395.9,             399.3          ],          "alturas":[             -2.67,             -2.62,             -2.38          ]       },       "10":{          "distancias":[             379.19,             389.45,             395.31          ],          "alturas":[             -1.61,             -1.61,             -1.47          ]       },       "11":{          "distancias":[             378.6,             387.95,             394.71          ],          "alturas":[             -1.85,             -1.81,             -1.84          ]       },       "12":{          "distancias":[             235.27,             240.98,             244.06          ],          "alturas":[             -1.29,             -1.36,             -1.36          ]       },       "15":{          "distancias":[             362.52,             371.11,             375.1          ],          "alturas":[             -9.22,             -9.22,             -9.22          ]       },       "16":{          "distancias":[             227.81,             236.86,             237.14          ],          "alturas":[             15.6,             15.6,             15.6          ]       }    },    "Sepia Wind":{       "2":{          "distancias":[             291.51,             299.36,             299.24          ],          "alturas":[             -7.2,             -7.21,             -7.53          ]       },       "7":{          "distancias":[             231.21,             239.91,             244.67          ],          "alturas":[             -15,             -14.5,             -14.4          ]       },       "10":{          "distancias":[             384.2,             387.2,             398.31          ],          "alturas":[             6.49,             6.14,             6.12          ]       },       "13":{          "distancias":[             223.87,             227.37,             235.72          ],          "alturas":[             -13.9,             -13.8,             -13.9          ]       },       "14":{          "distancias":[             353.66,             371.91,             383.61          ],          "alturas":[             -17.4,             -17.6,             -17.7          ]       },       "16":{          "distancias":[             248.44,             255.2,             261.74          ],          "alturas":[             -5.63,             -5.62,             -5.59          ]       },       "18":{          "distancias":[             385.15,             395.1,             401.97          ],          "alturas":[             -8.07,             -8.22,             -8.24          ]       }    },    "Shining Sand":{       "2":{          "distancias":[             230.51,             239.33,             247.54          ],          "alturas":[             -15.8,             -16,             -16.1          ]       },       "3":{          "distancias":[             270.77,             279.27,             283.93          ],          "alturas":[             -3.09,             -3.21,             -3.4          ]       },       "6":{          "distancias":[             228.11,             230.72,             237.55          ],          "alturas":[             -20.1,             -20.1,             -20.1          ]       },       "10":{          "distancias":[             226.43,             229.74,             233.28          ],          "alturas":[             -5.98,             -5.99,             -5.99          ]       },       "15":{          "distancias":[             354.4,             357.9,             364.04          ],          "alturas":[             -19.9,             -20,             -19.9          ]       },       "16":{          "distancias":[             241.32,             242.06,             249.14          ],          "alturas":[             -11,             -11.2,             -11.1          ]       },       "17":{          "distancias":[             366.3,             367.52,             375.84          ],          "alturas":[             -2.63,             -2.42,             -2.54          ]       }    },    "Silvia Cannon":{       "2":{          "distancias":[             229.48,             241.36,             242.6          ],          "alturas":[             -7.92,             -7.98,             -8.2          ]       },       "4":{          "distancias":[             376.76,             389.89,             394.8          ],          "alturas":[             -27.1,             -27.1,             -27.1          ]       },       "8":{          "distancias":[             304.9,             314.9,             334.5          ],          "alturas":[             -21.6,             -21.6,             -21.6          ]       },       "9":{          "distancias":[             221.36,             234.45,             234.83          ],          "alturas":[             -1.12,             -1.16,             -1.29          ]       },       "11":{          "distancias":[             262.8,             273.16,             290.4          ],          "alturas":[             -11.6,             -11.5,             -11.6          ]       },       "12":{          "distancias":[             167.68,             168.78,             179.46          ],          "alturas":[             -4.01,             -4.01,             -4.0          ]       },       "16":{          "distancias":[             208.68,             209.04,             222.53          ],          "alturas":[             -18,             -18,             -18          ]       }    },    "West Wiz":{       "1":{          "distancias":[             368.5,             371.48,             380.6          ],          "alturas":[             -7.98,             -7.87,             -8          ]       },       "2":{          "distancias":[             207.44,             211.23,             220.86          ],          "alturas":[             -3.01,             -2.92,             -2.69          ]       },       "6":{          "distancias":[             212.44,             215.47,             242.43          ],          "alturas":[             -5,             -4.93,             -4.71          ]       },       "8":{          "distancias":[             360.3,             381.1,             390.25          ],          "alturas":[             -3.56,             -3.91,             -4.12          ]       },       "10":{          "distancias":[             360.5,             374.04,             379.34          ],          "alturas":[             -7.01,             -7.09,             -6.78          ]       },       "11":{          "distancias":[             319.96,             323.54,             344.95          ],          "alturas":[             -13.1,             -12.8,             -12.8          ]       },       "14":{          "distancias":[             199.41,             199.55,             205.69          ],          "alturas":[             14.4,             14.6,             14.5          ]       },       "16":{          "distancias":[             209,             218.86,             234.53          ],          "alturas":[             -8.36,             -8.47,             -8.55          ]       },       "18":{          "distancias":[             331.6,             340.9,             356.24          ],          "alturas":[             -4.93,             -5,             -4.9          ]       }    },    "White Wiz":{       "1":{          "distancias":[             396.21,             406.47,             419.4          ],          "alturas":[             -14,             -13.8,             -13.5          ]       },       "2":{          "distancias":[             167.7,             167.89,             180.53          ],          "alturas":[             -5.7,             -5.58,             -5.68          ]       },       "9":{          "distancias":[             230.61,             236.72,             237.32          ],          "alturas":[             -14.2,             -14.2,             -14.3          ]       },       "11":{          "distancias":[             382.9,             391.73,             395.76          ],          "alturas":[             -4.19,             -4.28,             -4.26          ]       },       "12":{          "distancias":[             190.72,             197.7,             201.25          ],          "alturas":[             8.63,             8.29,             8.3          ]       },       "13":{          "distancias":[             386.94,             386.63,             393.48          ],          "alturas":[             -3.04,             -3.24,             -3.12          ]       },       "16":{          "distancias":[             164.63,             168.94,             178.25          ],          "alturas":[             -3.58,             -3.61,             -3.53          ]       },       "18":{          "distancias":[             357.2,             366.18,             388.6          ],          "alturas":[             -22.2,             -22.3,             -22.6          ]       }    },    "Wind Hill":{       "2":{          "distancias":[             303.07,             311.76,             319.69          ],          "alturas":[             -7.67,             -8.28,             -7.68          ]       },       "7":{          "distancias":[             244.47,             256.13,             257.88          ],          "alturas":[             -15.5,             -15.1,             -14.9          ]       },       "13":{          "distancias":[             239.51,             240.73,             251.37          ],          "alturas":[             -14.8,             -14.5,             -14.8          ]       },       "14":{          "distancias":[             349.57,             396.63,             401.93          ],          "alturas":[             -18.2,             -18.3,             -18.2          ]       },       "16":{          "distancias":[             252.77,             264.37,             269.97          ],          "alturas":[             -6.44,             -6.46,             -6.39          ]       },       "18":{          "distancias":[             393.02,             406.76,             418.62          ],          "alturas":[             -8.65,             -8.72,             -8.83          ]       }    },    "Wiz City":{       "2":{          "distancias":[             226.56,             235.74,             244.35          ],          "alturas":[             -10.8,             -11,             -11.1          ]       },       "6":{          "distancias":[             240.7,             241.28,             255.61          ],          "alturas":[             -13.7,             -13.7,             -13.7          ]       },       "10":{          "distancias":[             263.91,             279.55,             286.67          ],          "alturas":[             -33.6,             -34.1,             -34.6          ]       },       "16":{          "distancias":[             175.7,             185.4,             190.16          ],          "alturas":[             -15.4,             -15.4,             -15.4          ]       }    },    "Wiz Wiz":{       "3":{          "distancias":[             220.92,             238.44,             243.35          ],          "alturas":[             -8.67,             -8.74,             -8.61          ]       },       "4":{          "distancias":[             222.43,             236.68,             244.43          ],          "alturas":[             -0.45,             -0.32,             -0.51          ]       },       "7":{          "distancias":[             404.63,             414.62,             423.6          ],          "alturas":[             -6.67,             -6.36,             -6.36          ]       },       "9":{          "distancias":[             216.28,             224.7,             239.43          ],          "alturas":[             -1.5,             -1.24,             -1.17          ]       },       "13":{          "distancias":[             213.13,             220.47,             225.33          ],          "alturas":[             -6.12,             -6.2,             -6.42          ]       },       "15":{          "distancias":[             385.4,             "-",             "-"          ],          "alturas":[             -11.2,             "-",             "-"          ]       },       "17":{          "distancias":[             257.65,             260.73,             272.48          ],          "alturas":[             -6.77,             -6.9,             -7.04          ]       }    } }');
    let dadosparse = JSON.parse(dadosjson);
    var hole = document.getElementById("inputhole").value;
    var mapa = document.getElementById("map").value;
    document.getElementById("dist1").value = dadosparse[mapa][hole]['distancias'][0]
    document.getElementById("dist2").value = dadosparse[mapa][hole]['distancias'][1]
    document.getElementById("dist3").value = dadosparse[mapa][hole]['distancias'][2]
    document.getElementById("alt1").value = dadosparse[mapa][hole]['alturas'][0]
    document.getElementById("alt2").value = dadosparse[mapa][hole]['alturas'][1]
    document.getElementById("alt3").value = dadosparse[mapa][hole]['alturas'][2]
}

function changevalue1() {
    document.getElementById("distancia").value = document.getElementById("dist1").value
    document.getElementById("altura").value = document.getElementById("alt1").value
}
function changevalue2() {
    document.getElementById("distancia").value = document.getElementById("dist2").value
    document.getElementById("altura").value = document.getElementById("alt2").value
}
function changevalue3() {
    document.getElementById("distancia").value = document.getElementById("dist3").value
    document.getElementById("altura").value = document.getElementById("alt3").value
}


const DEBUG_FLAG = false;

const DESVIO_SCALE_PANGYA_TO_YARD = 0.3125 / 1.5;

class Vector3D {

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    normalize() {
        return this.divideScalar( this.length() );
    }

    multiplyScalar(value) {

        this.x *= value;
        this.y *= value;
        this.z *= value;

        return this;
    }

    add(vector3d) {

        this.x += vector3d.x;
        this.y += vector3d.y;
        this.z += vector3d.z;

        return this;
    }

    add3D(x, y, z) {

        this.x += x;
        this.y += y;
        this.z += z;

        return this;
    }

    sub(vector3d) {

        this.x -= vector3d.x;
        this.y -= vector3d.y;
        this.z -= vector3d.z;

        return this;
    }

    sub3D(x, y, z) {

        this.x -= x;
        this.y -= y;
        this.z -= z;

        return this;
    }

    divideScalar(value) {

        if (value != 0) {

            let scalar = 1 / value;

            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;

        }else {

            this.x = 0.0;
            this.y = 0.0;
            this.z = 0.0;
        }

        return this;
    }

    cross(vector3d) {

        let x = this.x, y = this.y, z = this.z;
    
        this.x = y * vector3d.z - z * vector3d.y;
        this.y = z * vector3d.x - x * vector3d.z;
        this.z = x * vector3d.y - y * vector3d.x;
    
        return this;
    
      }

    length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }

    clone() {
        return new Vector3D(this.x, this.y, this.z);
    }
}

const TYPE_DISTANCE = {
    LESS_10: 0,
    LESS_15: 1,
    LESS_28: 2,
    LESS_58: 3,
    BIGGER_OR_EQUAL_58: 4,
}

function calculeTypeDistance(distance) {

    let type = TYPE_DISTANCE.BIGGER_OR_EQUAL_58;

    if (distance >= 58.0)
        return TYPE_DISTANCE.BIGGER_OR_EQUAL_58;
    else if (distance < 10.0)
        return TYPE_DISTANCE.LESS_10;
    else if (distance < 15.0)
        return TYPE_DISTANCE.LESS_15;
    else if (distance < 28.0)
        return TYPE_DISTANCE.LESS_28;
    else if (distance < 58.0)
        return TYPE_DISTANCE.LESS_58; // Esse não precisa já que ele passou do primeiro if, mas deixar assim

    return type;
}

function calculeTypeDistanceByPosition(position1, position2) {
    return calculeTypeDistance(Math.sqrt(Math.pow(position1.x - position2.x) + Math.pow(position1.z - position2.z)) * 0.3125);
}

// JP Base ball Static Object, 0x00E47E30
class Ball {

    position = new Vector3D(0.0, 0.0, 0.0);

    slope = new Vector3D(0.0, 1.0, 0.0);

    // Ball Flag state process
    state_process = 0;  // (0x00E47E30+0x04) 0x00E47E34

    max_height = 0.0;
    num_max_height = -1;

    count = 0;

    // Velocity
    velocity = new Vector3D(0.0, 0.0, 0.0);
    /*
    ball_0C = 0.0;  // (0x00E47E30+0x0C) 0x00E47E3C
    ball_10 = 0.0;  // (0x00E47E30+0x10) 0x00E47E40
    ball_14 = 0.0;  // (0x00E47E30+0x14) 0x00E47E44
    */

    ball_28 = 0.0;  // (0x00E47E30+0x28) 0x00E47E58
    ball_2C = 0.0;  // (0x00E47E30+0x2C) 0x00E47E5C
    ball_30 = 0.0;  // (0x00E47E30+0x30) 0x00E47E60

    curva = 0.0;    // (0x00E47E30+0x34) 0x00E47E64
    spin = 0.0;     // (0x00E47E30+0x38) 0x00E47E68

    rotation_curve = 0.0;  // (0x00E47E30+0x3C) 0x00E47E6C - rotation curva
    rotation_spin = 0.0;  // (0x00E47E30+0x40) 0x00E47E70 - rotation spin

    // Flags
    ball_44 = 0;    // (0x00E47E30+0x44) 0x00E47E74 - esse valor é setado em algum lugar
    ball_48 = 0;    // (0x00E47E30+0x48) 0x00E47E78 - esse valor na inicialização é o mesmo do ball_44
    ball_70 = -1;   // (0x00E47E30+0x70) 0x00E47EA0
    ball_90 = 0;    // (0x00E47E30+0x90) 0x00E47EC0

    ball_BC = 0;    // (0x00E47E30+0xBC) 0x00E47EEC

    mass = 0.045926999;  // 0x00E47E30+0xC4) 0x00E47EF4 // Mass
    diametro = 0.14698039;   // 0x00E47E30+0xC8) 0x00E47EF8 // diametro

    copy(other) {

        let cpy = this;

        cpy.position = other.position.clone();
        cpy.slope = other.slope.clone();
        cpy.velocity = other.velocity.clone();
        cpy.state_process = other.state_process;
        cpy.max_height = other.max_height;
        cpy.spin = other.spin;
        cpy.curva = other.curva;
        cpy.count = other.count;
        cpy.num_max_height = other.num_max_height;
        cpy.ball_28 = other.ball_28;
        cpy.ball_2C = other.ball_2C;
        cpy.ball_30 = other.ball_30;
        cpy.ball_3C = other.ball_3C;
        cpy.ball_40 = other.ball_40;
        cpy.ball_44 = other.ball_44;
        cpy.ball_48 = other.ball_48;
        cpy.ball_70 = other.ball_70;
        cpy.ball_90 = other.ball_90;
        cpy.ball_BC = other.ball_BC;
        cpy.ball_C4 = other.ball_C4;
        cpy.ball_C8 = other.ball_C8;
    }
}

const POWER_SHOT_FACTORY = {
    NO_POWER_SHOT: 0,
    ONE_POWER_SHOT: 1,
    TWO_POWER_SHOT: 2,
    ITEM_15_POWER_SHOT: 3
}

function getPowerShotFactory(ps) {

    let power_shot_factory = 0.0;

    switch (ps) {
        case POWER_SHOT_FACTORY.ONE_POWER_SHOT:
            power_shot_factory = 10.0;
            break;
        case POWER_SHOT_FACTORY.TWO_POWER_SHOT:
            power_shot_factory = 20.0;
            break;
        case POWER_SHOT_FACTORY.ITEM_15_POWER_SHOT:
            power_shot_factory = 15.0;
            break;
    }

    return power_shot_factory
}

const CLUB_TYPE = {
    WOOD: 0,
    IRON: 1,
    PW: 2, // SW e PW, não vou fazer esse que ele recalcula a força dele pela distância, TYPE[0= ( < 10y), 1= ( < 15y), 2= ( < 28y), 3= ( < 58y), 4= ( >= 58y)], POWER(SW, PW)[0= (30y, 30y), 1= (30y, 30y), 2= (30y, 30y), 3= (60y, 60y), 4= (80y, 100y)] + cards e etc.
    PT: 3
}

class ClubInfo {

    constructor(type, rotation_spin, rotation_curve, power_factor, degree, power_base) {

        this.type = type;
        this.rotation_spin = rotation_spin;
        this.rotation_curve = rotation_curve;
        this.power_factor = power_factor;
        this.degree = degree;
        this.power_base = power_base;
    }
}


const CLUB_INFO = {
    _1W: new ClubInfo(CLUB_TYPE.WOOD,  0.55, 1.61, 236.0, 10.0, 230.0),
    _2W: new ClubInfo(CLUB_TYPE.WOOD,  0.50, 1.41, 204.0, 13.0, 210.0),
    _3W: new ClubInfo(CLUB_TYPE.WOOD,  0.45, 1.26, 176.0, 16.0, 190.0),
    _2I: new ClubInfo(CLUB_TYPE.IRON,  0.45, 1.07, 161.0, 20.0, 180.0),
    _3I: new ClubInfo(CLUB_TYPE.IRON,  0.45, 0.95, 149.0, 24.0, 170.0),
    _4I: new ClubInfo(CLUB_TYPE.IRON,  0.45, 0.83, 139.0, 28.0, 160.0),
    _5I: new ClubInfo(CLUB_TYPE.IRON,  0.45, 0.73, 131.0, 32.0, 150.0),
    _6I: new ClubInfo(CLUB_TYPE.IRON,  0.41, 0.67, 124.0, 36.0, 140.0),
    _7I: new ClubInfo(CLUB_TYPE.IRON,  0.36, 0.61, 118.0, 40.0, 130.0),
    _8I: new ClubInfo(CLUB_TYPE.IRON,  0.30, 0.57, 114.0, 44.0, 120.0),
    _9I: new ClubInfo(CLUB_TYPE.IRON,  0.25, 0.53, 110.0, 48.0, 110.0),
    PW: new ClubInfo(CLUB_TYPE.PW,     0.18, 0.49, 107.0, 52.0, 100.0),
    SW: new ClubInfo(CLUB_TYPE.PW,     0.17, 0.42, 93.0, 56.0, 80.0),
    PT1: new ClubInfo(CLUB_TYPE.PT,    0.00, 0.00, 30.0, 0.00, 20.0),
    PT2: new ClubInfo(CLUB_TYPE.PT,    0.00, 0.00, 21.0, 0.00, 10.0)
}

const CLUB_INFO_ENUM = [
    '_1W',
    '_2W',
    '_3W',
    '_2I',
    '_3I',
    '_4I',
    '_5I',
    '_6I',
    '_7I',
    '_8I',
    '_9I',
    'PW',
    'SW',
    'PT1',
    'PT2'
]

const POWER_SHOT_FACTORY_ENUM = [
    'NO_POWER_SHOT',
    'ONE_POWER_SHOT',
    'TWO_POWER_SHOT',
    'ITEM_15_POWER_SHOT'
]

const SHOT_TYPE_ENUM = [
    'DUNK',
    'TOMAHAWK',
    'SPIKE',
    'COBRA'
]

class Club {

    type = CLUB_TYPE.WOOD; // 1W

    type_distance = TYPE_DISTANCE.BIGGER_OR_EQUAL_58;

    // 1W
    rotation_spin =     0.55;      // Rotação spin
    rotation_curve =    1.61;       // Rotação curva
    power_factor =      236;       // Power shot
    degree =            10;        // Angulo
    power_base =        230;       // Base power

    init(club_info) {

        this.type = club_info.type;

        this.rotation_spin  = club_info.rotation_spin;
        this.rotation_curve = club_info.rotation_curve;
        this.power_factor   = club_info.power_factor;
        this.degree         = club_info.degree;
        this.power_base     = club_info.power_base;
    }

    getDregRad() {
        return this.degree * Math.PI / 180;
    }

    getPower(extraPower, pwrSlot, ps, spin) {

        // Get Auxpart
        // Get Card
        // Get Mascot
        let pwrjard = 0.0;

        switch(this.type) {
            case CLUB_TYPE.WOOD: {

                pwrjard = extraPower.total(ps) + getPowerShotFactory(ps) + ((pwrSlot - 15) * 2);

                pwrjard *= 1.5;
                pwrjard /= this.power_base;
                pwrjard += 1;
                pwrjard *= this.power_factor;

                break;
            }
            case CLUB_TYPE.IRON: {

                pwrjard = ((getPowerShotFactory(ps) / this.power_base + 1.0) * this.power_factor) + (extraPower.total(ps) * this.power_factor * 1.3) / this.power_base;

                break;
            }
            case CLUB_TYPE.PW: { // SW e PW

                const getPowerByDegree = (degree, spin) => {
                    return 0.5 + ((0.5 * (degree + (spin * _00D19B98))) / (56/*Ang*/ / 180 * Math.PI));
                }

                switch (this.type_distance) {
                    case TYPE_DISTANCE.LESS_10:
                    case TYPE_DISTANCE.LESS_15:
                    case TYPE_DISTANCE.LESS_28:
                        pwrjard = (getPowerByDegree(this.getDregRad(), spin) * (52.0 + (ps ? 28.0 : 0))) + (extraPower.total(ps) * this.power_factor) / this.power_base;
                        break;
                    case TYPE_DISTANCE.LESS_58:
                        pwrjard = (getPowerByDegree(this.getDregRad(), spin) * (80.0 + (ps ? 18.0 : 0))) + (extraPower.total(ps) * this.power_factor) / this.power_base;
                        break;
                    case TYPE_DISTANCE.BIGGER_OR_EQUAL_58:
                        pwrjard = ((getPowerShotFactory(ps) / this.power_base + 1.0) * this.power_factor) + (extraPower.total(ps) * this.power_factor) / this.power_base;
                        break;
                }

                break;
            }
            case CLUB_TYPE.PT: {
                pwrjard = this.power_factor;
                break;
            }
        }

        return pwrjard;
    }

    // Rotation
    getPower2(extraPower, pwrSlot, ps) {


        let pwrjard = (extraPower.auxpart + extraPower.mascot + extraPower.card) / 2 + (pwrSlot - 15);

        if (ps)
            pwrjard += (extraPower.ps_card / 2);

        pwrjard /= 170;

        return pwrjard + 1.5;
    }

    getRange(extraPower, pwrSlot, ps) {
        
        let pwr_range = this.power_base + extraPower.total(ps) + getPowerShotFactory(ps);

        if (this.type == CLUB_TYPE.WOOD)
            pwr_range += ((pwrSlot - 15) * 2)

        if (this.type == CLUB_TYPE.PW) {

            switch (this.type_distance) {
                case TYPE_DISTANCE.LESS_10:
                case TYPE_DISTANCE.LESS_15:
                case TYPE_DISTANCE.LESS_28:
                    pwr_range = 30.0 + (ps ? 30.0 : 0.0) + extraPower.total(ps)
                    break;
                case TYPE_DISTANCE.LESS_58:
                    pwr_range = 60.0 + (ps ? 20.0 : 0.0) + extraPower.total(ps)
                    break;
                case TYPE_DISTANCE.BIGGER_OR_EQUAL_58:
                    pwr_range = this.power_base + extraPower.total(ps) + getPowerShotFactory(ps);
                    break;
            }
        }

        return pwr_range;
    }
}

class Wind {

    wind = 0;
    degree = 0;

    getWind() {
        return new Vector3D(this.wind * Math.sin(this.degree * Math.PI / 180) * -1, 0, this.wind * Math.cos(this.degree * Math.PI / 180));
    }
}

// const Object ball
const ball = new Ball();

// const club
const club = new Club();

// const wind
const wind = new Wind();

// Const values
const _00D3D008 = 0.00001; // compare with 0 acho
const _00D046A8 = -1.0; // -1 value constant
const _00D00190 = 0.75; // const
const _00D083A0 = 0.02; // Step time, pangya 0.02
const _00D66CF8 = 3.0;  // Valor 3 que não sei bem o que é
const _00D3D028 = 0.00008; // Efeito Mangnus acho
const _00D1A888 = 12.566371;  // Não sei
const _00D3D210 = 25.132742; // Não sei
const _00CFF040 = 0.1;
const _00D66CA0 = 0.5;
const _00D16928 = 0.002;
const _00D17908 = 0.349065847694874;
const _00D19B98 = 0.0698131695389748;
const _00D16758 = 0.01

const slope_break_to_curve_slope = 0.00875;

const _00E42544_vect_slope = new Vector3D(0.0, 0.0, 1.0);

class QuadTree {

    constructor() {
        this.ball = new Ball();
        this.club = new Club();
        this.wind = new Wind();
    }

    gravityFactor = 1;
    gravity = 34.295295715332; //9.8 * 1.094 * 3.2/*/0.3125*/ */; /// 0.3125; // gravity in Yards(scale pangya)

    //_21D8 = 0.0; // Não sei bem o que é ainda
    _21D8_vect = new Vector3D(0.0, 0.0, 0.0);

    getGravity() {
        return this.gravity * this.gravityFactor;
    }

    ball = undefined;

    club = undefined;

    wind = undefined;

    // Usa no cobra
    ball_position_init = new Vector3D(0.0, 0.0, 0.0);
    power_range_shot = 0.0;

    shot = SHOT_TYPE.DUNK;
    power_factor_shot = 0.0;
    percentShot_sqrt = 0.0;
    spike_init = -1;
    spike_med = -1;
    power_factor = 0.0;
    cobra_init = -1;

    // Init Shot
    initShot(ball, club, wind, options) {

        this.ball = ball;
        this.club = club;
        this.wind = wind;

        this.shot = options.shot;
        this.spike_init = -1;
        this.spike_med = -1;
        this.cobra_init = -1;

        this.ball.position = options.position.clone();

        // Usa no Cobra
        this.ball_position_init = options.position.clone();

        // Type distance
        this.club.type_distance = calculeTypeDistance(options.distance);

        // init max_height
        this.ball.max_height = this.ball.position.y;

        this.ball.count = 0;
        this.ball.num_max_height = -1;

        let pwr = this.club.getPower(options.power.options, options.power.pwr, options.ps, options.spin);

        // Guarda para usa no cobra
        this.power_range_shot = this.club.getRange(options.power.options, options.power.pwr, options.ps);

        // Guarda para usar no spike
        this.power_factor = pwr;

        pwr *= Math.sqrt(options.percentShot);

        // Multiplica por 1.0 ou 1.3
        if (options.shot == SHOT_TYPE.TOMAHAWK || options.shot == SHOT_TYPE.SPIKE/*Toma e spike */)
            pwr *= 1.3;
        else
            pwr *= 1.0;

        // Percent Erro de pangya e ground
        pwr *= Math.sqrt(options.ground * 0.01);

        // Guarda para usar no spike
        this.power_factor_shot = pwr;
        this.percentShot_sqrt = Math.sqrt(options.percentShot);

        this.ball.curva = options.curva;
        this.ball.spin = options.spin;

        let value1 = this.getValuesDegree(options.mira_rad + (0 - (this.ball.curva * _00D17908)), 1);
        let value2 = this.getValuesDegree((this.club.type_distance == TYPE_DISTANCE.BIGGER_OR_EQUAL_58 ? this.club.getDregRad() : this.club.getDregRad() + (this.ball.spin * _00D19B98)), 0);

        this.ball.curva -= this.getSlope(options.mira_rad - options.slope_mira_rad, Math.random()/* Rotation Ball Line */);

        pwr *= ((Math.abs(this.ball.curva) * 0.1) + 1);

        // tava cos2, neg_rad, neg_sin
        let vectA = new Vector3D(value2.neg_sin, value2.neg_rad, value2.cos2);

        // !@ Teste
        if (DEBUG_FLAG)
            console.log(`Power final: ${pwr}`);

        vectA.multiplyScalar(pwr);

        // !@ debug
        if (DEBUG_FLAG)
            console.log(vectA);

        let v1 = new Vector3D(value1.cos, value1.rad, value1.sin);
        let v2 = new Vector3D(value1._C, value1._10, value1._14);
        let v3 = new Vector3D(value1.neg_sin, value1.neg_rad, value1.cos2);
        let v4 = new Vector3D(value1._24, value1._28, value1._2C);

        this.ball.velocity.x = v2.x * vectA.y + vectA.x * v1.x + v3.x * vectA.z + v4.x;
        this.ball.velocity.y = v1.y * vectA.x + v2.y * vectA.y + v3.y * vectA.z + v4.y;
        this.ball.velocity.z = v1.z * vectA.x + v2.z * vectA.y + v3.z * vectA.z + v4.z;

        // Rotação eixo X, Z
        this.ball.rotation_curve = this.ball.curva * options.percentShot;
        this.ball.rotation_spin = this.club.type_distance == TYPE_DISTANCE.BIGGER_OR_EQUAL_58 
            ? (this.club.getPower2(options.power.options, options.power.pwr, options.ps) * options.percentShot) * options.percentShot
            : 0.0;

        // !@ Log
        if (DEBUG_FLAG)
            console.log(`Spin Rotation: ${this.ball.rotation_spin}`);

        this.ball.ball_48 = this.ball.ball_44; // Flag Power Shot

        // Log
        if (DEBUG_FLAG)
            console.log(`Vel.X: ${this.ball.velocity.x}, Vel.Y: ${this.ball.velocity.y}, Vel.Z: ${this.ball.velocity.z}`);
    }

    getSlope(mira, line_ball) {

        // values Degree To Matrix
        const valuesDegreeToMatrix = (value) => {

            return {
                v1: new Vector3D(value.cos, value.rad, value.sin),
                v2: new Vector3D(value._C, value._10, value._14),
                v3: new Vector3D(value.neg_sin, value.neg_rad, value.cos2),
                v4: new Vector3D(value._24, value._28, value._2C)
            }
        }

        // Matrix cross Matrix
        const applyMatrix = (m1, m2) => {

            return {
                v1: new Vector3D(
                    m1.v1.x * m2.v1.x + m1.v1.y * m2.v2.x + m1.v1.z * m2.v3.x,
                    m1.v1.x * m2.v1.y + m1.v1.y * m2.v2.y + m1.v1.z * m2.v3.y,
                    m1.v1.x * m2.v1.z + m1.v1.y * m2.v2.z + m1.v1.z * m2.v3.z
                ),
                v2: new Vector3D(
                    m1.v2.x * m2.v1.x + m1.v2.y * m2.v2.x + m1.v2.z * m2.v3.x,
                    m1.v2.x * m2.v1.y + m1.v2.y * m2.v2.y + m1.v2.z * m2.v3.y,
                    m1.v2.x * m2.v1.z + m1.v2.y * m2.v2.z + m1.v2.z * m2.v3.z
                ),
                v3: new Vector3D(
                    m1.v3.x * m2.v1.x + m1.v3.y * m2.v2.x + m1.v3.z * m2.v3.x,
                    m1.v3.x * m2.v1.y + m1.v3.y * m2.v2.y + m1.v3.z * m2.v3.y,
                    m1.v3.x * m2.v1.z + m1.v3.y * m2.v2.z + m1.v3.z * m2.v3.z
                ),
                v4: new Vector3D(
                    m1.v4.x * m2.v1.x + m1.v4.y * m2.v2.x + m1.v4.z * m2.v3.x + m2.v4.x,
                    m1.v4.x * m2.v1.y + m1.v4.y * m2.v2.y + m1.v4.z * m2.v3.y + m2.v4.y,
                    m1.v4.x * m2.v1.z + m1.v4.y * m2.v2.z + m1.v4.z * m2.v3.z + m2.v4.z
                )
            };
        };

        // Calc slope
        let ball_slope_cross_const_vect = this.ball.slope.clone().cross(_00E42544_vect_slope);

        let slope_matrix = {
            v1: ball_slope_cross_const_vect.clone().normalize(),
            v2: this.ball.slope.clone(),
            v3: ball_slope_cross_const_vect.clone().cross(this.ball.slope).normalize(),
            v4: new Vector3D(0.0, 0.0, 0.0)
        };

        let value1 = this.getValuesDegree(mira * -1, 1);
        let value2 = this.getValuesDegree(line_ball * -2.0, 1);

        let m1 = applyMatrix(valuesDegreeToMatrix(value2), slope_matrix);

        let m2 = applyMatrix(m1, valuesDegreeToMatrix(value1));

        // Log
        if (DEBUG_FLAG) {

            console.log('slope_matrix: ', slope_matrix);
            console.log('value1: ', value1);
            console.log('value2: ', value2);
            console.log('value1 Matrix: ', valuesDegreeToMatrix(value1));
            console.log('value2 Matrix: ', valuesDegreeToMatrix(value2));
            console.log('m1: ', m1);
            console.log('m2: ', m2);
        }

        return m2.v2.x * _00D66CA0;
    }

    getValuesDegree(degree, option = 0) {

        // !@ Debug
        if (DEBUG_FLAG)
            console.log(`degree rad: ${degree}`);

        let obj = new Object();

        if (option == 0) {

            obj.cos = 1.0;
            obj.rad = 0.0; // degree
            obj.sin = 0.0;
            obj._C = 0.0;
            obj._10 = Math.cos(degree);
            obj._14 = Math.sin(degree) * -1;
            obj.neg_sin = 0.0;
            obj.neg_rad = Math.sin(degree);
            obj.cos2 = obj._10;
            obj._24 = 0.0;
            obj._28 = 0.0;
            obj._2C = 0.0;

        }else if (option == 1) {
        
            obj.cos = Math.cos(degree);
            obj.rad = 0.0; // degree
            obj.sin = Math.sin(degree);
            obj._C = 0.0;
            obj._10 = 1.0;
            obj._14 = 0.0;
            obj.neg_sin = obj.sin * -1;
            obj.neg_rad = 0.0;
            obj.cos2 = obj.cos;
            obj._24 = 0.0;
            obj._28 = 0.0;
            obj._2C = 0.0;
        }

        // !@ debug
        if (DEBUG_FLAG)
            console.log(obj);

        return obj;
    }

    ballProcess(steptime, final = undefined) {

        this.bounceProcess(steptime, final);

        // Cobra
        if (this.shot == SHOT_TYPE.COBRA && this.cobra_init < 0) {

            if (this.percentShot_sqrt < Math.sqrt(0.8))
                this.percentShot_sqrt = Math.sqrt(0.8); // 80%

            if (this.ball.count == 0) {

                this.ball.velocity.y = 0.0;

                this.ball.velocity.normalize().multiplyScalar(this.power_factor_shot);
            }

            let diff = this.ball.position.clone().sub(this.ball_position_init).length();
            let cobra_init_up = ((this.power_range_shot * this.percentShot_sqrt) - 100.0) * 3.2;

            if (diff >= cobra_init_up) {

                // 1W, 2W e 3W
                let power_multiply = 0.0;
                
                if (this.club.type == CLUB_TYPE.WOOD) {

                    switch (this.club.power_base) {
                        case 230.0:
                            power_multiply = 74.0;
                            break;
                        case 210.0:
                            power_multiply = 76.0;
                            break;
                        case 190.0:
                            power_multiply = 80.0;
                            break;
                    }
                }

                this.cobra_init = this.ball.count;

                this.ball.velocity.normalize().multiplyScalar(power_multiply).multiplyScalar(this.percentShot_sqrt);

                this.ball.rotation_spin = 2.5;
            }

        }else {

            if (this.spike_init < 0 && this.cobra_init < 0 && this.club.type_distance == TYPE_DISTANCE.BIGGER_OR_EQUAL_58) {

                this.ball.rotation_spin -= ((_00D66CA0 - (this.ball.spin * _00CFF040)) * _00D083A0);
                //else quando a bola kika
                //    ball.ball_40 -= _00D16928;

            }else if ((this.shot == SHOT_TYPE.SPIKE && this.spike_init >= 0) || (this.shot == SHOT_TYPE.COBRA && this.cobra_init >= 0))
                this.ball.rotation_spin -= _00D083A0;

            if (this.shot == SHOT_TYPE.SPIKE && this.ball.count == 0) {

                this.ball.velocity.y = 0.0;
                this.ball.velocity.normalize().multiplyScalar(this.power_factor_shot);

                // check se a bola andou já
                this.ball.velocity.normalize().multiplyScalar(72.5).multiplyScalar(this.percentShot_sqrt * 2);

                this.ball.rotation_spin = 3.1;

                this.spike_init = this.ball.count;

            }

            if (this.shot == SHOT_TYPE.SPIKE && this.ball.num_max_height >= 0 && (this.ball.num_max_height + 0x3C) < this.ball.count && this.spike_med < 0) {
                
                this.spike_med = this.ball.count;

                if (this.club.type == CLUB_TYPE.WOOD) {

                    let new_power = 0.0;

                    switch (this.club.power_base) {
                        case 230.0:

                            new_power = 344.0;

                            if ((this.power_factor * this.percentShot_sqrt) < 344.0)
                                new_power -= (this.power_factor * this.percentShot_sqrt);
                            else
                                new_power = 0.0;

                            new_power = new_power / 112.0 * 21.5;

                            new_power = -8 - new_power;

                            this.ball.velocity.y = new_power;

                            break;
                        case 210.0:

                            new_power = 306.0;

                            if ((this.power_factor * this.percentShot_sqrt) < 306.0)
                                new_power -= (this.power_factor * this.percentShot_sqrt);
                            else
                                new_power = 0.0;

                            new_power = new_power / 105.0 * 20.5;

                            new_power = -10.3 - new_power;

                            this.ball.velocity.y = new_power;

                            break;
                        case 190.0:

                            new_power = 273.0;

                            if ((this.power_factor * this.percentShot_sqrt) < 273.0)
                                new_power -= (this.power_factor * this.percentShot_sqrt);
                            else
                                new_power = 0.0;

                            new_power = new_power / 100 * 20.2;

                            new_power = -10.8 - new_power;

                            this.ball.velocity.y = new_power;

                            break;
                    }
                }

                this.ball.velocity.multiplyScalar(this.percentShot_sqrt * 7);

                this.ball.rotation_spin = this.ball.spin;
            }
        }

        // if (this.ball.position.y > this.ball.max_height)
        //     this.ball.max_height = this.ball.position.y;
        // else if (this.ball.num_max_height == -1)
        //     this.ball.num_max_height = this.ball.count;

        if (this.ball.velocity.y < 0 && this.ball.num_max_height < 0) {

            this.ball.max_altura = this.ball.position.y;
            this.ball.num_max_height = this.ball.count;
        }
        
        this.ball.count++;
    }
    
    bounceProcess(steptime, final = undefined) {

        if (this.shot == SHOT_TYPE.SPIKE && this.ball.num_max_height >= 0 && (this.ball.num_max_height + 0x3C) > this.ball.count)
            return;

        let accellVect = this.applyForce();

        let otherVect = accellVect.clone();

        otherVect.divideScalar(this.ball.mass).multiplyScalar(steptime);

        this.ball.velocity.add(otherVect);

        // check
        if (this.ball.ball_70 == -1)
            if (DEBUG_FLAG)
                console.log("ball.ball_70 == -1");

        if (this.ball.num_max_height == -1) {

            let tmpVect = this._21D8_vect.clone().divideScalar(this.ball.mass).multiplyScalar(steptime);

            this.ball.velocity.add(tmpVect);
        }

        this.ball.ball_2C += (this.ball.rotation_curve * _00D1A888 * steptime);

        this.ball.ball_30 += (this.ball.rotation_spin * _00D3D210 * steptime);

        this.ball.position.add(this.ball.velocity.clone().multiplyScalar((final !== undefined ? final : steptime)));

    }

    applyForce() {

        let retVect = new Vector3D(0.0, 0.0, 0.0);

        if (this.ball.rotation_curve >= _00D3D008)
            if (DEBUG_FLAG)
                console.log("[00D3D008] < ball_3C");

        if (this.ball.ball_90 == 0)
            if (DEBUG_FLAG)
                console.log("ball_90 == 0");

        if (this.ball.rotation_curve != 0) {

            let vectorb = new Vector3D(this.ball.velocity.z * _00D046A8, 0, this.ball.velocity.x);

            vectorb.normalize();

            if (this.cobra_init < 0 || this.spike_init < 0)
                vectorb.multiplyScalar(_00D00190 * this.ball.rotation_curve * this.club.rotation_curve);

            retVect.add(vectorb);
        }

        // !@ Teste primeira vez
        if (this.shot == SHOT_TYPE.SPIKE && this.spike_init < 0)
            return new Vector3D(0.0, 0.0, 0.0);
        else if (this.shot == SHOT_TYPE.COBRA && this.cobra_init < 0)
            return retVect;

        let windVect = this.wind.getWind();

        windVect.multiplyScalar((this.shot == SHOT_TYPE.SPIKE ? _00D16758 : _00D083A0));

        retVect.add(windVect);

        retVect.y = retVect.y - (this.getGravity() * this.ball.mass);

        if (DEBUG_FLAG)
            console.log(retVect.y);

        if (this.ball.rotation_spin != 0)
            retVect.y = retVect.y + (this.club.rotation_spin * _00D66CF8 * this.ball.rotation_spin);

        if (DEBUG_FLAG)
            console.log(retVect.y);

        let velVect = this.ball.velocity.clone();
        
        velVect.multiplyScalar(velVect.length() * _00D3D028);

        retVect.sub(velVect);

        // return
        return retVect;
    }
}

const diffYZ = function(vect1, vect2) {
    return Math.sqrt(Math.pow(vect1.x - vect2.x, 2) + Math.pow(vect1.z - vect2.z, 2));
};

const find_power = (power_player, club_info, shot, power_shot, distancia, altura, vento, angulo, terreno, spin, curva, slope, mira = undefined, percent = undefined) => {

    const altura_colision = altura * 1.094 * 3.2/*0.3125*/ /*- 0.14/*Cup*/;
    const distanciaScale = distancia * 3.2/*0.3125*/
    var vball = new Ball();
    const vclub = club;

    // init Club Info
    if (club != undefined)
        vclub.init(club_info);

    // Calcule type distance
    vclub.type_distance = calculeTypeDistance(distancia);

    let slope_mira_rad = 0.0;

    if (slope instanceof Vector3D) {

        slope_mira_rad = slope.y;
        vball.slope = slope.clone();

        vball.slope.y = 1.0;

    }else if (!isNaN(slope))
        vball.slope = new Vector3D(slope * slope_break_to_curve_slope * -1, 1.0, 0.0);

    // !@ Log
    if (DEBUG_FLAG)
        console.log(`Find: Altura: ${altura_colision}, Distância: ${distanciaScale}`);

    // !@ Log
    if (DEBUG_FLAG)
        console.log(`Mira Degree Rad: ${mira || 0}`);

    const margin = 0.05;
    const limit_checking = 1000;
    let count = 0;
    let isFind = false;
    let found = {
        power: -1,
        desvio: 0.0
    }

    wind.wind = vento;
    wind.degree = angulo;

    let wind_vect = wind.getWind();

    if (DEBUG_FLAG)
        console.log(`Influência do vento: X: ${wind_vect.x}, Y: ${wind_vect.y}, Z: ${wind_vect.z}`);

    const options = {
        distance: distancia,
        percentShot: percent || 1.0,
        ground: terreno,
        mira_rad: mira || 0.0,
        slope_mira_rad: slope_mira_rad,
        spin: spin/30,
        curva: curva/30,
        position: new Vector3D(0.0, 0.0, 0.0),
        shot: shot,
        ps: power_shot,
        power: power_player || {
            pwr: 31,
            options: {
                auxpart: 0,
                mascot: 4,
                card: 4,
                ps_auxpart: 0,
                ps_mascot: 0,
                ps_card: 8,
                total: function(option) {
                    
                    let pwr = this.auxpart + this.mascot + this.card;

                    if (option == 1 || option == 2 || options == 3)
                        pwr += this.ps_auxpart + this.ps_mascot + this.ps_card;

                    return pwr;
                }
            }
        }
    }

    const powerRange = vclub.getRange(options.power.options, options.power.pwr, options.ps);

    // !@ Teste
    if (DEBUG_FLAG)
        console.log(`PowerRange: ${powerRange}`);

    // !@ teste
    if (DEBUG_FLAG)
        console.log('Options:', options);

    const findAlturaColision = (qt, altura_colision) => {

        let count = 0;

        let copy_ball = new Ball();

        do {

            copy_ball.copy(vball);

            qt.ballProcess(_00D083A0);
    
        }while((vball.position.y > altura_colision || vball.num_max_height == -1) && (count++) < 3000)

        let last_step = Math.abs((altura_colision - copy_ball.position.y) / (vball.position.y - copy_ball.position.y));

        vball.copy(copy_ball);

        qt.ballProcess(_00D083A0, _00D083A0 * last_step);

        // !@ Log
        if (DEBUG_FLAG)
            console.log(`(C)End: X: ${copy_ball.position.x}, Y: ${copy_ball.position.y}, Z: ${copy_ball.position.z}`);
        
        // !@ Log
        if (DEBUG_FLAG)
            console.log(`End: X: ${vball.position.x}, Y: ${vball.position.y}, Z: ${vball.position.z}, Dst: ${distanciaScale}`);
        
        if (Math.abs(distanciaScale - vball.position.z) <= margin)
            return 0;
        
        return distanciaScale - vball.position.z;
    }

    const qt = new QuadTree();

    let ret = 0;

    let lado = 0;
    let feed = 0.00006;

    do {

        if (options.percentShot > 1.0)
            options.percentShot = 1.0;
        else if (options.percentShot < 0.0)
            options.percentShot = 0.1;

        // !@ Teste
        if (DEBUG_FLAG)
            console.log(`Percent Shot: ${(options.percentShot*100).toFixed(4)} %`);

        qt.initShot(vball, vclub, wind, options);

        ret = findAlturaColision(qt, altura_colision);

        // !@ Teste
        if (DEBUG_FLAG)
            console.log(`Ret: ${ret}`);

        if (ret == 0)
            isFind = true;
        else {

            // Não tem como achar a força por que nem mandando 100% chega
            if (options.percentShot == 1.0 && ret > 0)
                break;

            // Não tem como achar a força por que não pode mandar 0.0 de porcentagem
            if (options.percentShot == 0.1 && ret < 0)
                break;

            if (lado == 0)
                lado = (ret < 0 ? -1 : 1);
            else if ((ret < 0 && lado == 1) || (ret > 0 && lado == -1))
                feed *= 0.5;

            options.percentShot += ret * feed;
        }

    } while (!isFind && (count++) < limit_checking);

    if (isFind) {

        // !@ log
        if (DEBUG_FLAG)
            console.log('Curva: ', vball.curva);

        found.power = options.percentShot;
        found.desvio = (vball.position.x + (options.position.x + (Math.tan(options.mira_rad) * distanciaScale))) * DESVIO_SCALE_PANGYA_TO_YARD
        found.power_range = powerRange;

        if (DEBUG_FLAG)
            console.log(`Encontrou a força. ${(found.power * 100).toFixed(2)}% - ${(powerRange * found.power).toFixed(1)} - ${(found.desvio / 0.2165 * -1/* Invertido no visual */).toFixed(2)}`);

    }else {
        
        if (DEBUG_FLAG) {

            console.log(`Não encontrou a força. chegou no limite de ${limit_checking} tentativas`);

            console.log(`Ret: ${ret}`);
        }
    }

    return found;
}

const SHOT_TYPE = {
    DUNK: 0,
    TOMAHAWK: 1,
    SPIKE: 2,
    COBRA: 3,
}

function checkValidInput(value) {
        
    if (value == '' || isNaN(value))
        return 0.0;

    return Number(value);
}

function checkValidInputSlope(value) {

    if (value == '')
        return 0.0;

    if (isNaN(value)) {

        let split = value.split(',');

        if (split.length !== 3 || isNaN(split[0]) || isNaN(split[1]) || isNaN(split[2]))
            return 0.0;

        return new Vector3D(Number(split[0]) * slope_break_to_curve_slope, Number(split[1]) * Math.PI / 180, Number(split[2]) * slope_break_to_curve_slope);
    }

    return Number(value);
}
// Calcula
function calc(el) {

    let power = checkValidInput(parseInt(document.getElementById('power').value));
    let auxpart_pwr = checkValidInput(parseInt(document.getElementById('ring').value));
    let card_pwr = checkValidInput(parseInt(document.getElementById('pippin').value));
    let mascot_pwr = checkValidInput(parseInt(document.getElementById('mascot').value));
    let card_ps_pwr = checkValidInput(parseInt(document.getElementById('lolo').value));

    let club = CLUB_INFO[document.getElementById('taco').value];
    let shot = SHOT_TYPE[document.getElementById('tacada').value];
    let power_shot = POWER_SHOT_FACTORY[document.getElementById('ps').value];

    let distance = checkValidInput(parseFloat(document.getElementById('distancia').value.replace(',', '.')));
    let height = checkValidInput(parseFloat(document.getElementById('altura').value.replace(',', '.')));
    let wind = checkValidInput(parseInt(document.getElementById('vento').value.replace(',', '.')));
    let degree = checkValidInput(parseFloat(document.getElementById('angulo').value.replace(',', '.')));
    let ground = checkValidInput(parseInt(document.getElementById('terreno').value.replace(',', '.')));
    let spin = checkValidInput(parseFloat(document.getElementById('spin').value.replace(',', '.')));  
    let curve = checkValidInput(parseFloat(document.getElementById('curva').value.replace(',', '.')));
	if ( curve*curve == 45*45 ) {
        spin = 0;
        document.getElementById('spin').value = spin;
        }     
    let slope_break = checkValidInputSlope(parseFloat(document.getElementById('quebra').value.replace(',', '.')));

    function realParseFloat(s) {
        s = s.replace(/[^\d,.-]/g, ''); // strip everything except numbers, dots, commas and negative sign
        if (navigator.language.substring(0, 2) !== "de" && /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(s)) // if not in German locale and matches #,###.######
        {
           s = s.replace(/,/g, ''); // strip out commas
           return parseFloat(s); // convert to number
        } else if (/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(s)) // either in German locale or not match #,###.###### and now matches #.###,########
        {
           s = s.replace(/\./g, ''); // strip out dots
           s = s.replace(/,/g, '.'); // replace comma with dot
           return parseFloat(s);
        } else // try #,###.###### anyway
        {
           s = s.replace(/,/g, ''); // strip out commas
           return parseFloat(s); // convert to number
        }
     }


     function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    // 100 % ground
    if (ground == 0.0)
        ground = 100.0;

    // Make options
    const input_values = {
        power_player: {
            pwr: power,
            options: {
                auxpart: auxpart_pwr,
                mascot: mascot_pwr,
                card: card_pwr,
                ps_auxpart: 0,
                ps_mascot: 0,
                ps_card: card_ps_pwr,
                total: function(option) {
                    
                    let pwr = this.auxpart + this.mascot + this.card;

                    if (option == 1 || option == 2 || option == 3)
                        pwr += this.ps_auxpart + this.ps_mascot + this.ps_card;

                    return pwr;
                }
            }
        },
        club_info: club,
        shot: shot,
        power_shot: power_shot,
        distance: distance,
        height: height,
        wind: wind,
        degree: degree,
        ground: ground,
        spin: spin,
        curva: curve,
        slope: slope_break
    };

    // Calc
    const found = find_power(   input_values.power_player,
                                input_values.club_info,
                                input_values.shot,
                                input_values.power_shot,
                                input_values.distance, 
                                input_values.height, 
                                input_values.wind, 
                                input_values.degree, 
                                input_values.ground, 
                                input_values.spin, 
                                input_values.curva,
                                input_values.slope);

    let f = [found];
    let index_f = 0;

    if (found.power != -1) {

        do {

            index_f++;

            f.push
            (
                find_power
                (   
                    input_values.power_player,
                    input_values.club_info,
                    input_values.shot,
                    input_values.power_shot,
                    input_values.distance, 
                    input_values.height, 
                    input_values.wind, 
                    input_values.degree, 
                    input_values.ground, 
                    input_values.spin, 
                    input_values.curva, 
                    input_values.slope,
                    Math.atan2(f[index_f - 1].desvio * 1.5, input_values.distance), 
                    f[index_f - 1].power
                )
            );

        } while (f[index_f].power != -1 && f[index_f -1].power != -1 && Math.abs(f[index_f - 1].desvio - f[index_f].desvio) >= 0.05);
    }

    // if ( document.getElementById('tacada').value !== "DUNK"  && (POWER_SHOT_FACTORY[document.getElementById('ps').value] = "NO_POWER_SHOT")) {
    //     document.getElementById('ps').value = "ONE_POWER_SHOT";
    //     }

    let aa = (Math.ceil(f[index_f].power/(1/360))*(1/360)*f[index_f].power_range);
    let bb = (f[index_f].power_range * f[index_f].power);
    let cc = (f[index_f].power * 100);
    let threshold = 0.13579;
        if ( document.getElementById('tacada').value >= 2 ) { threshold = f[index_f].power_range / 1080; }
        else { threshold = 0.13579 }

while ( aa - bb >= threshold) {

            let tempspin = checkValidInput(document.getElementById('spin').value);
            let tempcurve = checkValidInput(document.getElementById('curva').value);
            let cutspin = checkValidInput(document.getElementById('spincut').value);
            let cutmode = checkValidInput(document.getElementById('autocut').value);
            let bcv = document.getElementById('spinbase').value;
            let bsp = document.getElementById('curvabase').value;
    
            if ( document.getElementById('tacada').value == 3 ) { 
            tempcurve = (Math.round((tempcurve + cutmode * cutspin)/0.001)*0.001).toFixed(2);
            }
            else {
            tempspin = (Math.round((tempspin + cutmode * cutspin)/0.001)*0.001).toFixed(2);
            }
        
    
        if ( bsp*bsp*tempcurve*tempcurve + bcv*bcv*tempspin*tempspin > bcv*bcv*bsp*bsp ) { break }
        if ( cutmode == 0 ) { break }
        if ( cc < 10 ) { break }				
        document.getElementById('curva').value = tempcurve;	
        document.getElementById('spin').value = tempspin;
    
    // -------------------------------

    let distance = checkValidInput(parseFloat(document.getElementById('distancia').value.replace(',', '.')));
    let height = checkValidInput(parseFloat(document.getElementById('altura').value.replace(',', '.')));
    let wind = checkValidInput(parseInt(document.getElementById('vento').value.replace(',', '.')));
    let degree = checkValidInput(parseFloat(document.getElementById('angulo').value.replace(',', '.')));
    let ground = checkValidInput(parseInt(document.getElementById('terreno').value.replace(',', '.')));         
    let spin = tempspin;
    let curve = tempcurve;
    let slope_break = checkValidInputSlope(parseFloat(document.getElementById('quebra').value.replace(',', '.')));

    // 100 % ground
    if (ground == 0.0)
        ground = 100.0;

    // Make options
    const input_values = {
        power_player: {
            pwr: power,
            options: {
                auxpart: auxpart_pwr,
                mascot: mascot_pwr,
                card: card_pwr,
                ps_auxpart: 0,
                ps_mascot: 0,
                ps_card: card_ps_pwr,
                total: function(option) {
                    
                    let pwr = this.auxpart + this.mascot + this.card;

                    if (option == 1 || option == 2 || option == 3)
                        pwr += this.ps_auxpart + this.ps_mascot + this.ps_card;

                    return pwr;
                }
            }
        },
        club_info: club,
        shot: shot,
        power_shot: power_shot,
        distance: distance,
        height: height,
        wind: wind,
        degree: degree,
        ground: ground,
        spin: spin,
        curva: curve,
        slope: slope_break
    };

    // Calc
    const found = find_power(   input_values.power_player,
                                input_values.club_info,
                                input_values.shot,
                                input_values.power_shot,
                                input_values.distance, 
                                input_values.height, 
                                input_values.wind, 
                                input_values.degree, 
                                input_values.ground, 
                                input_values.spin, 
                                input_values.curva,
                                input_values.slope);

    let f = [found];
    let index_f = 0;

    if (found.power != -1) {

        do {

            index_f++;

            f.push
            (
                find_power
                (   
                    input_values.power_player,
                    input_values.club_info,
                    input_values.shot,
                    input_values.power_shot,
                    input_values.distance, 
                    input_values.height, 
                    input_values.wind, 
                    input_values.degree, 
                    input_values.ground, 
                    input_values.spin, 
                    input_values.curva, 
                    input_values.slope,
                    Math.atan2(f[index_f - 1].desvio * 1.5, input_values.distance), 
                    f[index_f - 1].power
                )
            );

        } while (f[index_f].power != -1 && f[index_f -1].power != -1 && Math.abs(f[index_f - 1].desvio - f[index_f].desvio) >= 0.05);
    }

aa = (Math.ceil(f[index_f].power/(1/360))*(1/360)*f[index_f].power_range);
bb = (f[index_f].power_range * f[index_f].power);
cc = (f[index_f].power * 100);

// --------------------------------------

}
let tempspin1 = checkValidInput(document.getElementById('spin').value);
let tempcurve1 = checkValidInput(document.getElementById('curva').value);
let bcv1 = document.getElementById('spinbase').value;
let bsp1 = document.getElementById('spinbase').value;

    if (f[index_f].power != -1) {

        document.getElementById('respow').value = `${(f[index_f].power * 100).toFixed(2)}%` 
        //document.getElementById('rescal').value = `${(f[index_f].power_range * f[index_f].power).toFixed(1)}y`
        document.getElementById('rescal').value = `${(aa).toFixed(1)}y (+${(aa-bb).toFixed(2)}y)`
        var mira = ((desvioByDegree(f[index_f].desvio, distance) / 0.2165));
        document.getElementById('erro').value = ''  
        document.getElementById('erro').style.background = "green"
        document.getElementById('err').value = `+${(aa-bb).toFixed(2)}y`
        var miramult = ((mira * (document.getElementById('resolucao').value))).toFixed(2);

      //800x600
      if ( miramult <= 11.08 && miramult >= -11.08 && (document.getElementById('resolucao').value == 1.25)) {
        document.getElementById('resaim').value = miramult;
        document.getElementById('labelmira').value = "Mira PB";
        document.getElementById('resaimplus').value = "1";

    
    }
     else 
     if ( miramult > 11.08 &&  miramult <= 44.32 || (miramult < -11.08 &&  miramult >= -44.32) && (document.getElementById('resolucao').value == 1.25) ) {
        document.getElementById('resaim').value = (miramult/4).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA";
        document.getElementById('resaimplus').value = "4";
    
    }
     else 
     if ( miramult > 44.32 &&  miramult <= 52.63 || (miramult < -44.32 &&  miramult >= -52.63) && (document.getElementById('resolucao').value == 1.25)) {
        document.getElementById('resaim').value = (miramult/4.75).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA+";
        document.getElementById('resaimplus').value = "4.75";

    }
     else 
     if ( miramult > 52.63 &&  miramult < 110.8 || ( miramult < -52.63 &&  miramult > -110.8 ) && (document.getElementById('resolucao').value == 1.25)) {
        document.getElementById('resaim').value = (miramult/10).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/10";
        document.getElementById('resaimplus').value = "10";
    
    }
     else 
     if ( miramult >= 110.8 || miramult <= -110.8 && (document.getElementById('resolucao').value == 1.25)) {
        document.getElementById('resaim').value = (miramult/20).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/20";
        document.getElementById('resaimplus').value = "20";

    
    }
    //1024x768
    else if ( miramult >= 141.9 || miramult <= -141.9 && (document.getElementById('resolucao').value == 1.600001)) {
        document.getElementById('resaim').value = (miramult/20).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/20";
    }
     else if ( miramult > 67.4025 &&  miramult < 141.9 || (miramult < -67.4025 &&  miramult > -141.9) && (document.getElementById('resolucao').value == 1.600001)) {
        document.getElementById('resaim').value = (miramult/10).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/10";
        document.getElementById('resaimplus').value = "10";

    
    }
     else if ( miramult > 56.76 &&  miramult <= 67.4025 || (miramult < -56.76 &&  miramult >= -67.4025) && (document.getElementById('resolucao').value == 1.600001)) {
        document.getElementById('resaim').value = (miramult/4.75).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA+";
        document.getElementById('resaimplus').value = "4.75";

    }
     else if ( miramult > 14.19 &&  miramult <= 56.76 || (miramult < -14.19 &&  miramult >= -56.76) && (document.getElementById('resolucao').value == 1.600001)) {
        document.getElementById('resaim').value = (miramult/4).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA";
        document.getElementById('resaimplus').value = "4";
    
    }
     else if ( miramult <= 14.19 && miramult >= -14.19 && (document.getElementById('resolucao').value == 1.600001)) {
        document.getElementById('resaim').value = miramult;
        document.getElementById('labelmira').value = "Mira PB";
        document.getElementById('resaimplus').value = "1";

    
    }
    //1366x768
    else if (miramult >= 189.4 || miramult <= -189.4  && (document.getElementById('resolucao').value == 1.600002 )) {
        document.getElementById('resaim').value = (miramult/20).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/20";
        document.getElementById('resaimplus').value = "20";

    }
     else if (miramult <= 18.94 && miramult >= -18.94 && (document.getElementById('resolucao').value == 1.600002 )) {
        document.getElementById('resaim').value = miramult;
        document.getElementById('labelmira').value = "Mira PB";
        document.getElementById('resaimplus').value = "1";
    
    }
     else if (miramult > 18.94 &&  miramult <= 75.76 || (miramult < -18.94 &&  miramult >= -75.76)&& (document.getElementById('resolucao').value == 1.600002 )) {
        document.getElementById('resaim').value = (miramult/4).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA";
        document.getElementById('resaimplus').value = "4";

    }
     else if (miramult > 75.76 &&  miramult <= 89.965 || (miramult < -75.76 &&  miramult >= -89.965) && (document.getElementById('resolucao').value == 1.600002 )) {
        document.getElementById('resaim').value = (miramult/4.75).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA+";
        document.getElementById('resaimplus').value = "4.75";

    } 
     else if (miramult > 89.965 &&  miramult < 189.4 || (miramult < -89.965 &&  miramult > -189.4)&& (document.getElementById('resolucao').value == 1.600002 )) {
        document.getElementById('resaim').value = (miramult/10).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/10";
        document.getElementById('resaimplus').value = "10";

    
    }
    //1280x720
    else if (miramult >= 177.5 || miramult <= -177.5 && (document.getElementById('resolucao').value == 1.5 )) {
        document.getElementById('resaim').value = (miramult/20).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/20";
        document.getElementById('resaimplus').value = "20";

    }
     else if (miramult <= 17.75 && miramult >= -17.75 && (document.getElementById('resolucao').value == 1.5 )) {
        document.getElementById('resaim').value = miramult;
        document.getElementById('labelmira').value = "Mira PB";
        document.getElementById('resaimplus').value = "1";
    
    }
     else if (miramult > 17.75 &&  miramult <= 71 || (miramult < -17.75 &&  miramult >= -71) && (document.getElementById('resolucao').value == 1.5 )) {
        document.getElementById('resaim').value = (miramult/4).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA";
        document.getElementById('resaimplus').value = "4";

    }
     else if (miramult > 71 &&  miramult <= 84.3125 || (miramult < -71 &&  miramult >= -84.3125) && (document.getElementById('resolucao').value == 1.5 )) {
        document.getElementById('resaim').value = (miramult/4.75).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA+";
        document.getElementById('resaimplus').value = "4.75";

    }
     else if (miramult > 84.3125 &&  miramult < 177.5 || (miramult < -84.3125 &&  miramult > -177.5) && (document.getElementById('resolucao').value == 1.5 )) {
        document.getElementById('resaim').value = (miramult/10).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/10";
        document.getElementById('resaimplus').value = "10";

    
    }
    //1400x900
    else if ( miramult >= 194.2 || miramult <= -194.2  && (document.getElementById('resolucao').value == 1.872000001)) {
        document.getElementById('resaim').value = (miramult/20).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/20";
        document.getElementById('resaimplus').value = "20";

    }
     else if ( miramult <= 19.42 && miramult >= -19.42 && (document.getElementById('resolucao').value == 1.872000001)) {
        document.getElementById('resaim').value = miramult;
        document.getElementById('labelmira').value = "Mira PB";
        document.getElementById('resaimplus').value = "1";

    
    }
     else if ( miramult > 19.42 &&  miramult <= 77.68 || (miramult < -19.42 &&  miramult >= -77.68) && (document.getElementById('resolucao').value == 1.872000001)) {
        document.getElementById('resaim').value = (miramult/4).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA";
        document.getElementById('resaimplus').value = "4";

    }
     else if ( miramult > 77.68 &&  miramult <= 92.245 || (miramult < -77.68 &&  miramult >= -92.245) && (document.getElementById('resolucao').value == 1.872000001)) {
        document.getElementById('resaim').value = (miramult/4.75).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA+";
        document.getElementById('resaimplus').value = "4.75";

    }
     else if ( miramult > 92.245 &&  miramult < 194.2 || (miramult < -92.245 &&  miramult > -194.2) && (document.getElementById('resolucao').value == 1.872000001)) {
        document.getElementById('resaim').value = (miramult/10).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/10";
        document.getElementById('resaimplus').value = "10";

    }
    //1440x900
    else if (miramult >= 199.7 || miramult <= -199.7  && (document.getElementById('resolucao').value == 1.87200002)) {
        document.getElementById('resaim').value = (miramult/20).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/20";
        document.getElementById('resaimplus').value = "20";

    }
     else if (miramult <= 19.97 && miramult >= -19.97 && (document.getElementById('resolucao').value == 1.87200002)) {
        document.getElementById('resaim').value = miramult;
        document.getElementById('labelmira').value = "Mira PB";
        document.getElementById('resaimplus').value = "1";

    }
     else if (miramult > 19.97 &&  miramult <= 79.88 || (miramult < -19.97 &&  miramult >= -79.88) && (document.getElementById('resolucao').value == 1.87200002)) {
        document.getElementById('resaim').value = (miramult/4).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA";
        document.getElementById('resaimplus').value = "4";

    }
     else if (miramult > 79.88 &&  miramult <= 94.8575 || (miramult < -79.88 &&  miramult >= -94.8575) && (document.getElementById('resolucao').value == 1.87200002)) {
        document.getElementById('resaim').value = (miramult/4.75).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA+";
        document.getElementById('resaimplus').value = "4.75";

    }
     else if (miramult > 94.8575 &&  miramult < 199.7 || (miramult < -94.8575 &&  miramult > -199.7) && (document.getElementById('resolucao').value == 1.87200002)) {
        document.getElementById('resaim').value = (miramult/10).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/10";
        document.getElementById('resaimplus').value = "10";

    }
    //1600x900
    else if (miramult >= 221.9 || miramult <= -221.9 && (document.getElementById('resolucao').value == 1.87200003)) {
        document.getElementById('resaim').value = (miramult/20).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/20";
        document.getElementById('resaimplus').value = "20";

    }
    else if (miramult <= 22.19 && miramult >= -22.19 && (document.getElementById('resolucao').value == 1.87200003)) {
        document.getElementById('resaim').value = miramult;
        document.getElementById('labelmira').value = "Mira PB";
        document.getElementById('resaimplus').value = "1";
    
    }
    else if (miramult > 22.19 &&  miramult <= 88.76 || (miramult < -22.19 &&  miramult >= -88.76) && (document.getElementById('resolucao').value == 1.87200003)) {
        document.getElementById('resaim').value = (miramult/4).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA";
        document.getElementById('resaimplus').value = "4";

    }
    else if (miramult > 88.76 &&  miramult <= 105.4025 || (miramult < -88.76 &&  miramult >= -105.4025) && (document.getElementById('resolucao').value == 1.87200003)) {
        document.getElementById('resaim').value = (miramult/4.75).toFixed(2);
        document.getElementById('labelmira').value = "Mira PBA+";
        document.getElementById('resaimplus').value = "4.75";
    }
    else if (miramult > 105.4025 &&  miramult < 221.9 || (miramult < -105.4025 &&  miramult > -221.9) && (document.getElementById('resolucao').value == 1.87200003)) {
        document.getElementById('resaim').value = (miramult/10).toFixed(2);
        document.getElementById('labelmira').value = "Mira PB/10";
        document.getElementById('resaimplus').value = "10";

    }else{
        document.getElementById('resaim').value = 0.00;
        document.getElementById('labelmira').value = "Mira PB";
        document.getElementById('resaimplus').value = "1";

    }

    }else {

        document.getElementById('erro').value = 'Não chega/ Muito fraco!'
        document.getElementById('erro').style.background = "red"
    }
    
    if ( bsp1*bsp1*tempcurve1*tempcurve1 + bcv1*bcv1*tempspin1*tempspin1 > bcv1*bcv1*bsp1*bsp1 ){
        document.getElementById('erro').value = 'Erro na Curva/Spin'
        document.getElementById('erro').style.background = "red"
    }
    }



// if (document.getElementById('autocut').value = 1 && (document.getElementById('spin').value = 30) && (aa-bb).toFixed(2) > 0.15)  {
//     document.getElementById('autocut').value = -1

// }else if(document.getElementById('autocut').value = -1 && (document.getElementById('spin').value = -30) && (aa-bb).toFixed(2) > 0.15)  {
//     document.getElementById('autocut').value = 1
// }else{
//     document.getElementById('autocut').value = 1
// }

function slopee1(){
if (document.getElementById('pixel').value == "") {
    calc()
} else {

    
    let px = parseFloat(document.getElementById('pixel').value.replace(',', '.'));
    let pxcorrigido = 0;
    switch(px){
        case 5:  pxcorrigido = 8.80 ; break;
        case 6:  pxcorrigido = 8.88 ; break;
        case 7:  pxcorrigido = 8.97 ; break;
        case 8:  pxcorrigido = 9.33 ; break;
        case 9:  pxcorrigido = 9.61 ; break;
        case 10:  pxcorrigido = 9.88 ; break;
        case 11:  pxcorrigido = 10.09 ; break;
        case 12:  pxcorrigido = 10.71 ; break;
        case 13:  pxcorrigido = 10.98 ; break;
        case 14:  pxcorrigido = 11.44 ; break;
        case 15:  pxcorrigido = 12.35 ; break;
        case 16:  pxcorrigido = 12.81 ; break;
        case 17:  pxcorrigido = 13.72 ; break;
        case 18:  pxcorrigido = 14.64 ; break;
        case 19:  pxcorrigido = 15.55 ; break;
        case 20:  pxcorrigido = 17.38 ; break;
        case 21:  pxcorrigido = 18.3 ; break;
        case 22:  pxcorrigido = 20.13 ; break;
        case 23:  pxcorrigido = 22.87 ; break;
        case 24:  pxcorrigido = 23.77 ; break;
        case 25:  pxcorrigido = 24.24 ; break;
        case 26:  pxcorrigido = 24.7 ; break;
        case 27:  pxcorrigido = 25.17 ; break;
        case 28:  pxcorrigido = 25.62 ; break;
        case 29:  pxcorrigido = 27.45 ; break;
        case 30:  pxcorrigido = 28.37 ; break;
        case 31:  pxcorrigido = 29.1 ; break;
        case 32:  pxcorrigido = 29.74 ; break;
        case 33:  pxcorrigido = 31.11 ; break;
        case 34:  pxcorrigido = 33.85 ; break;
        case 35:  pxcorrigido = 34.77 ; break;
        case 36:  pxcorrigido = 35.68 ; break;
        case 37:  pxcorrigido = 36.6 ; break;
        case 37.1:  pxcorrigido = 37.51 ; break;
        case 38:  pxcorrigido = 38.43 ; break;
        case 38.1:  pxcorrigido = 39.74 ; break;
        case 39:  pxcorrigido = 40.26 ; break;
        case 39.1:  pxcorrigido = 40.72 ; break;
        case 39.2:  pxcorrigido = 41.18 ; break;
        case 39.3:  pxcorrigido = 42.09 ; break;
        case 43:  pxcorrigido = 42.55 ; break;
        case 44:  pxcorrigido = 43.01 ; break;
        case 45:  pxcorrigido = 43.47 ; break;
        case 46:  pxcorrigido = 44.84 ; break;
        case 47:  pxcorrigido = 45.75 ; break;
        case 48:  pxcorrigido = 46.67 ; break;
        case 49:  pxcorrigido = 47.58 ; break;
        case 50:  pxcorrigido = 48.5 ; break;
        case 51:  pxcorrigido = 50.33 ; break;
        case 52:  pxcorrigido = 51.24 ; break;
        case 53:  pxcorrigido = 52.16 ; break;
        case 54:  pxcorrigido = 53.07 ; break;
        case 54.1:  pxcorrigido = 53.99 ; break;
        case 54.2:  pxcorrigido = 54.9 ; break;
        case 55:  pxcorrigido = 55.82 ; break;
        case 56:  pxcorrigido = 56.27 ; break;
        case 57:  pxcorrigido = 56.73 ; break;
        case 57.1:  pxcorrigido = 57.65 ; break;
        case 58:  pxcorrigido = 57.76 ; break;
        case 59:  pxcorrigido = 57.88 ; break;
        case 60:  pxcorrigido = 58.1 ; break;
        case 61:  pxcorrigido = 58.56 ; break;
        case 62:  pxcorrigido = 59.48 ; break;
        case 62.1:  pxcorrigido = 60.39 ; break;
        case 63:  pxcorrigido = 61.31 ; break;
        case 64:  pxcorrigido = 62.04 ; break;
        case 65:  pxcorrigido = 64.05 ; break;
        case 66:  pxcorrigido = 64.51 ; break;
        case 67:  pxcorrigido = 64.97 ; break;
        case 67.1:  pxcorrigido = 65.88 ; break;
        case 67.2:  pxcorrigido = 67.71 ; break;
        case 68:  pxcorrigido = 65.88 ; break;
        case 69:  pxcorrigido = 67.71 ; break;
        case 70:  pxcorrigido = 68.63 ; break;
        case 70.1:  pxcorrigido = 69.54 ; break;
        case 70.2:  pxcorrigido = 70.46 ; break;
        case 71:  pxcorrigido = 71.37 ; break;
        case 72:  pxcorrigido = 72.29 ; break;
        case 73:  pxcorrigido = 73.2 ; break;
        case 74:  pxcorrigido = 74.12 ; break;
        case 74.1:  pxcorrigido = 75.03 ; break;
        case 78:  pxcorrigido = 75.95 ; break;
        case 78.1:  pxcorrigido = 76.86 ; break;
        case 79:  pxcorrigido = 77.78 ; break;
        case 80:  pxcorrigido = 78.23 ; break;
        case 81:  pxcorrigido = 78.69 ; break;
        case 81.1:  pxcorrigido = 79.61 ; break;
        case 82:  pxcorrigido = 81.44 ; break;
        case 83:  pxcorrigido = 81.89 ; break;
        case 84:  pxcorrigido = 82.35 ; break;
        case 85:  pxcorrigido = 83.72 ; break;
        case 86:  pxcorrigido = 84.18 ; break;
        case 87:  pxcorrigido = 85.1 ; break;
        case 87.1:  pxcorrigido = 86.01 ; break;
        case 88:  pxcorrigido = 86.93 ; break;
        case 88.1:  pxcorrigido = 87.84 ; break;
        case 89:  pxcorrigido = 88.76 ; break;
        case 90:  pxcorrigido = 89.67 ; break;
        case 91:  pxcorrigido = 90.13 ; break;
        case 92:  pxcorrigido = 90.13 ; break;
        case 93:  pxcorrigido = 90.59 ; break;
        case 94:  pxcorrigido = 91.5 ; break;
        case 95:  pxcorrigido = 92.42 ; break;
        case 96:  pxcorrigido = 93.33 ; break;
        case 97:  pxcorrigido = 94.25 ; break;
        case 98:  pxcorrigido = 96.08 ; break;
        case 98:  pxcorrigido = 97.9 ; break;
        case 99:  pxcorrigido = 97.45 ; break;
        case 100:  pxcorrigido = 98.82 ; break;
        case 101:  pxcorrigido = 99.76 ; break;
        case 102:  pxcorrigido = 100.67 ; break;
        case 103:  pxcorrigido = 102.5 ; break;
        case 103.1:  pxcorrigido = 103.42 ; break;
        case 104:  pxcorrigido = 104.33 ; break;
        case 105:  pxcorrigido = 105.24 ; break;
        case 105.1:  pxcorrigido = 106.16 ; break;
        case 106:  pxcorrigido = 107.08 ; break;
        case 107:  pxcorrigido = 107.99 ; break;
        case 107.1:  pxcorrigido = 108.88 ; break;
        case 108:  pxcorrigido = 109.12 ; break;
        case 109:  pxcorrigido = 109.36 ; break;
        case 110:  pxcorrigido = 110.05 ; break;
        case 111:  pxcorrigido = 110.39 ; break;
        case 112:  pxcorrigido = 110.74 ; break;
        case 113:  pxcorrigido = 111.19 ; break;
        case 114:  pxcorrigido = 111.42 ; break;
        case 115:  pxcorrigido = 111.65 ; break;
        case 115.1:  pxcorrigido = 112.56 ; break;
        case 115.2:  pxcorrigido = 113.48 ; break;
        case 116:  pxcorrigido = 114.4 ; break;
        case 116.1:  pxcorrigido = 115.31 ; break;
        case 116.2:  pxcorrigido = 116.23 ; break;
        case 117:  pxcorrigido = 117.14 ; break;
        case 118:  pxcorrigido = 118.05 ; break;
        case 119:  pxcorrigido = 118.51 ; break;
        case 120:  pxcorrigido = 118.97 ; break;
        case 121:  pxcorrigido = 119.89 ; break;
        case 121.1:  pxcorrigido = 120.8 ; break;
        case 121.2:  pxcorrigido = 121.72 ; break;
        case 122:  pxcorrigido = 122.17 ; break;
        case 123:  pxcorrigido = 122.63 ; break;
        case 123.1:  pxcorrigido = 123.54 ; break;
        case 124:  pxcorrigido = 124.46 ; break;
        case 124.1:  pxcorrigido = 125.37 ; break;
        case 125:  pxcorrigido = 125.83 ; break;
        case 126:  pxcorrigido = 126.06 ; break;
        case 127:  pxcorrigido = 126.29 ; break;
        case 128:  pxcorrigido = 127.2 ; break;
        case 129:  pxcorrigido = 128.12 ; break;
        case 130:  pxcorrigido = 128.58 ; break;
        case 131:  pxcorrigido = 129.03 ; break;
        case 132:  pxcorrigido = 129.95 ; break;
        case 132.1:  pxcorrigido = 130.86 ; break;
        case 132.2:  pxcorrigido = 131.78 ; break;
        case 133:  pxcorrigido = 132.24 ; break;
        case 134:  pxcorrigido = 132.46 ; break;
        case 135:  pxcorrigido = 132.69 ; break;
        case 136:  pxcorrigido = 133.61 ; break;
        case 136.1:  pxcorrigido = 134.52 ; break;
        case 136.2:  pxcorrigido = 135.44 ; break;
        case 137:  pxcorrigido = 136.35 ; break;
        case 137.1:  pxcorrigido = 137.27 ; break;
        case 138:  pxcorrigido = 138.5 ; break;
        case 139:  pxcorrigido = 139.1 ; break;
        case 140:  pxcorrigido = 140.01 ; break;
        case 141:  pxcorrigido = 140.93 ; break;
        case 142:  pxcorrigido = 141.84 ; break;
        case 142.1:  pxcorrigido = 142.76 ; break;
        case 143:  pxcorrigido = 142.99 ; break;
        case 144:  pxcorrigido = 143.21 ; break;
        case 145:  pxcorrigido = 143.44 ; break;
        case 146:  pxcorrigido = 143.67 ; break;
        case 147:  pxcorrigido = 144.59 ; break;
        case 148:  pxcorrigido = 145.04 ; break;
        case 149:  pxcorrigido = 145.5 ; break;
        case 149.1:  pxcorrigido = 146.42 ; break;
        case 149.2:  pxcorrigido = 147.33 ; break;
        case 150:  pxcorrigido = 149.16 ; break;
        case 150.1:  pxcorrigido = 150.08 ; break;
        case 151:  pxcorrigido = 150.99 ; break;
        case 152:  pxcorrigido = 151.45 ; break;
        case 153:  pxcorrigido = 151.91 ; break;
        case 154:  pxcorrigido = 152.36 ; break;
        case 155:  pxcorrigido = 152.82 ; break;
        case 156:  pxcorrigido = 153.74 ; break;
        case 157:  pxcorrigido = 154.65 ; break;
        case 157.1:  pxcorrigido = 155.57 ; break;
        case 158:  pxcorrigido = 156.02 ; break;
        case 159:  pxcorrigido = 156.25 ; break;
        case 160:  pxcorrigido = 156.48 ; break;
        case 160.1:  pxcorrigido = 157.4 ; break;
        case 161:  pxcorrigido = 158.31 ; break;
        case 162:  pxcorrigido = 159.23 ; break;
        case 163:  pxcorrigido = 160.14 ; break;
        case 164:  pxcorrigido = 161.06 ; break;
        case 164.1:  pxcorrigido = 161.97 ; break;
        case 165:  pxcorrigido = 162.43 ; break;
        case 166:  pxcorrigido = 162.89 ; break;
        case 167:  pxcorrigido = 163.8 ; break;
        case 167.1:  pxcorrigido = 164.71 ; break;
        case 167.2:  pxcorrigido = 165.63 ; break;
        case 168:  pxcorrigido = 166.54 ; break;
        case 169:  pxcorrigido = 167.46 ; break;
        case 169.1:  pxcorrigido = 168.37 ; break;
        case 170:  pxcorrigido = 169.29 ; break;
        case 171:  pxcorrigido = 170.2 ; break;
        case 172:  pxcorrigido = 171.12 ; break;
        case 172.1:  pxcorrigido = 172.03 ; break;
        case 173:  pxcorrigido = 172.95 ; break;
        case 174:  pxcorrigido = 173.86 ; break;
        case 175:  pxcorrigido = 174.78 ; break;
        case 175.1:  pxcorrigido = 175.24 ; break;
        case 175.2:  pxcorrigido = 175.69 ; break;
        case 176:  pxcorrigido = 176.61 ; break;
        case 177:  pxcorrigido = 177.07 ; break;
        case 178:  pxcorrigido = 177.52 ; break;
        case 178.1:  pxcorrigido = 177.98 ; break;
        case 178.2:  pxcorrigido = 178.43 ; break;
        case 178.3:  pxcorrigido = 179.35 ; break;
        case 179:  pxcorrigido = 179.58 ; break;
        case 180:  pxcorrigido = 179.81 ; break;
        case 181:  pxcorrigido = 180.04 ; break;
        case 182:  pxcorrigido = 180.15 ; break;
        case 183:  pxcorrigido = 180.27 ; break;
        case 184:  pxcorrigido = 181.18 ; break;
        case 185:  pxcorrigido = 182.1 ; break;
        case 185.1:  pxcorrigido = 183.01 ; break;
        case 185.2:  pxcorrigido = 183.93 ; break;
        case 186:  pxcorrigido = 184.84 ; break;
    }
    function realParseFloat(s) {
        s = s.replace(/[^\d,.-]/g, '');
        if (navigator.language.substring(0, 2) !== "de" && /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(s))
        {
           s = s.replace(/,/g, ''); 
           return parseFloat(s); 
        } else if (/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(s)) 
        {
           s = s.replace(/\./g, ''); 
           s = s.replace(/,/g, '.'); 
           return parseFloat(s);
        } else 
        {
           s = s.replace(/,/g, '');
                return parseFloat(s); 
            }
        }
        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
        if (document.getElementById('tacada').value == "SPIKE"){
            (document.getElementById('slope1').value) = (((pxcorrigido/30.5) * Math.cos(formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))*Math.PI/180) * 3.813882532418) / 3.355704697986577).toFixed(3);
            (document.getElementById('quebra').value) = (((pxcorrigido/30.5) * Math.cos(formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))*Math.PI/180) * 3.813882532418) / 3.355704697986577).toFixed(3);
        let correcao = 0;
        if (document.getElementById('a13').checked){
            correcao = ((pxcorrigido/30.5) * Math.cos((formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))-(parseFloat(document.getElementById('resaim').value)*parseFloat(document.getElementById('resaimplus').value) / (formatNumber(realParseFloat(document.getElementById('distancia').value.replace(',', '.'))) * 0.06708))) * Math.PI/180) * 3.813882532418) / 3.355704697986577;
        } else if (document.getElementById('a12').checked) {
            correcao = ((pxcorrigido/30.5) * +Math.cos((+formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))+(+parseFloat(document.getElementById('resaim').value)*parseFloat(document.getElementById('resaimplus').value) / (+formatNumber(realParseFloat(document.getElementById('distancia').value.replace(',', '.'))) * 0.06708))) * Math.PI/180) * 3.813882532418) / 3.355704697986577;
        }
        if (document.getElementById('a21').checked){
        document.getElementById('slopef').value = correcao.toFixed(3);
        }else if(document.getElementById('a22').checked){
        document.getElementById('slopef').value = correcao.toFixed(3)*-1;
        }
        } else{
            (document.getElementById('slope1').value) = ((pxcorrigido/30.5) * Math.cos(formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))*Math.PI/180) * 3.813882532418).toFixed(3);
            (document.getElementById('quebra').value) = ((pxcorrigido/30.5) * Math.cos(formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))*Math.PI/180) * 3.813882532418).toFixed(3);
        let correcao = 0;
        if (document.getElementById('a13').checked){
            correcao = ((pxcorrigido/30.5) * Math.cos((formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))-(parseFloat(document.getElementById('resaim').value)*parseFloat(document.getElementById('resaimplus').value) / (formatNumber(realParseFloat(document.getElementById('distancia').value.replace(',', '.'))) * 0.06708))) * Math.PI/180) * 3.813882532418);
        } else if (document.getElementById('a12').checked){
            correcao = ((pxcorrigido/30.5) * +Math.cos((+formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))+(+parseFloat(document.getElementById('resaim').value)*parseFloat(document.getElementById('resaimplus').value) / (+formatNumber(realParseFloat(document.getElementById('distancia').value.replace(',', '.'))) * 0.06708))) * Math.PI/180) * 3.813882532418);
        }
        if (document.getElementById('a21').checked){
            document.getElementById('slopef').value = correcao.toFixed(3);
        }else if(document.getElementById('a22').checked){
            document.getElementById('slopef').value = correcao.toFixed(3)*-1;
            }
        }
        calc()
        slopee2()
        
    }
}
    const calculandoquebra = setInterval(slopee1,1000)
    
    function slopee2(){
        var Multiplica =  (document.getElementById('resolucao').value);
        let px = parseFloat(document.getElementById('pixel').value.replace(',', '.'));
        let pxcorrigido = 0;
        switch(px){
            case 5:  pxcorrigido = 8.80 ; break;
            case 6:  pxcorrigido = 8.88 ; break;
            case 7:  pxcorrigido = 8.97 ; break;
            case 8:  pxcorrigido = 9.33 ; break;
            case 9:  pxcorrigido = 9.61 ; break;
            case 10:  pxcorrigido = 9.88 ; break;
            case 11:  pxcorrigido = 10.09 ; break;
            case 12:  pxcorrigido = 10.71 ; break;
            case 13:  pxcorrigido = 10.98 ; break;
            case 14:  pxcorrigido = 11.44 ; break;
            case 15:  pxcorrigido = 12.35 ; break;
            case 16:  pxcorrigido = 12.81 ; break;
            case 17:  pxcorrigido = 13.72 ; break;
            case 18:  pxcorrigido = 14.64 ; break;
            case 19:  pxcorrigido = 15.55 ; break;
            case 20:  pxcorrigido = 17.38 ; break;
            case 21:  pxcorrigido = 18.3 ; break;
            case 22:  pxcorrigido = 20.13 ; break;
            case 23:  pxcorrigido = 22.87 ; break;
            case 24:  pxcorrigido = 23.77 ; break;
            case 25:  pxcorrigido = 24.24 ; break;
            case 26:  pxcorrigido = 24.7 ; break;
            case 27:  pxcorrigido = 25.17 ; break;
            case 28:  pxcorrigido = 25.62 ; break;
            case 29:  pxcorrigido = 27.45 ; break;
            case 30:  pxcorrigido = 28.37 ; break;
            case 31:  pxcorrigido = 29.1 ; break;
            case 32:  pxcorrigido = 29.74 ; break;
            case 33:  pxcorrigido = 31.11 ; break;
            case 34:  pxcorrigido = 33.85 ; break;
            case 35:  pxcorrigido = 34.77 ; break;
            case 36:  pxcorrigido = 35.68 ; break;
            case 37:  pxcorrigido = 36.6 ; break;
            case 37.1:  pxcorrigido = 37.51 ; break;
            case 38:  pxcorrigido = 38.43 ; break;
            case 38.1:  pxcorrigido = 39.74 ; break;
            case 39:  pxcorrigido = 40.26 ; break;
            case 39.1:  pxcorrigido = 40.72 ; break;
            case 39.2:  pxcorrigido = 41.18 ; break;
            case 39.3:  pxcorrigido = 42.09 ; break;
            case 43:  pxcorrigido = 42.55 ; break;
            case 44:  pxcorrigido = 43.01 ; break;
            case 45:  pxcorrigido = 43.47 ; break;
            case 46:  pxcorrigido = 44.84 ; break;
            case 47:  pxcorrigido = 45.75 ; break;
            case 48:  pxcorrigido = 46.67 ; break;
            case 49:  pxcorrigido = 47.58 ; break;
            case 50:  pxcorrigido = 48.5 ; break;
            case 51:  pxcorrigido = 50.33 ; break;
            case 52:  pxcorrigido = 51.24 ; break;
            case 53:  pxcorrigido = 52.16 ; break;
            case 54:  pxcorrigido = 53.07 ; break;
            case 54.1:  pxcorrigido = 53.99 ; break;
            case 54.2:  pxcorrigido = 54.9 ; break;
            case 55:  pxcorrigido = 55.82 ; break;
            case 56:  pxcorrigido = 56.27 ; break;
            case 57:  pxcorrigido = 56.73 ; break;
            case 57.1:  pxcorrigido = 57.65 ; break;
            case 58:  pxcorrigido = 57.76 ; break;
            case 59:  pxcorrigido = 57.88 ; break;
            case 60:  pxcorrigido = 58.1 ; break;
            case 61:  pxcorrigido = 58.56 ; break;
            case 62:  pxcorrigido = 59.48 ; break;
            case 62.1:  pxcorrigido = 60.39 ; break;
            case 63:  pxcorrigido = 61.31 ; break;
            case 64:  pxcorrigido = 62.04 ; break;
            case 65:  pxcorrigido = 64.05 ; break;
            case 66:  pxcorrigido = 64.51 ; break;
            case 67:  pxcorrigido = 64.97 ; break;
            case 67.1:  pxcorrigido = 65.88 ; break;
            case 67.2:  pxcorrigido = 67.71 ; break;
            case 68:  pxcorrigido = 65.88 ; break;
            case 69:  pxcorrigido = 67.71 ; break;
            case 70:  pxcorrigido = 68.63 ; break;
            case 70.1:  pxcorrigido = 69.54 ; break;
            case 70.2:  pxcorrigido = 70.46 ; break;
            case 71:  pxcorrigido = 71.37 ; break;
            case 72:  pxcorrigido = 72.29 ; break;
            case 73:  pxcorrigido = 73.2 ; break;
            case 74:  pxcorrigido = 74.12 ; break;
            case 74.1:  pxcorrigido = 75.03 ; break;
            case 78:  pxcorrigido = 75.95 ; break;
            case 78.1:  pxcorrigido = 76.86 ; break;
            case 79:  pxcorrigido = 77.78 ; break;
            case 80:  pxcorrigido = 78.23 ; break;
            case 81:  pxcorrigido = 78.69 ; break;
            case 81.1:  pxcorrigido = 79.61 ; break;
            case 82:  pxcorrigido = 81.44 ; break;
            case 83:  pxcorrigido = 81.89 ; break;
            case 84:  pxcorrigido = 82.35 ; break;
            case 85:  pxcorrigido = 83.72 ; break;
            case 86:  pxcorrigido = 84.18 ; break;
            case 87:  pxcorrigido = 85.1 ; break;
            case 87.1:  pxcorrigido = 86.01 ; break;
            case 88:  pxcorrigido = 86.93 ; break;
            case 88.1:  pxcorrigido = 87.84 ; break;
            case 89:  pxcorrigido = 88.76 ; break;
            case 90:  pxcorrigido = 89.67 ; break;
            case 91:  pxcorrigido = 90.13 ; break;
            case 92:  pxcorrigido = 90.13 ; break;
            case 93:  pxcorrigido = 90.59 ; break;
            case 94:  pxcorrigido = 91.5 ; break;
            case 95:  pxcorrigido = 92.42 ; break;
            case 96:  pxcorrigido = 93.33 ; break;
            case 97:  pxcorrigido = 94.25 ; break;
            case 98:  pxcorrigido = 96.08 ; break;
            case 98:  pxcorrigido = 97.9 ; break;
            case 99:  pxcorrigido = 97.45 ; break;
            case 100:  pxcorrigido = 98.82 ; break;
            case 101:  pxcorrigido = 99.76 ; break;
            case 102:  pxcorrigido = 100.67 ; break;
            case 103:  pxcorrigido = 102.5 ; break;
            case 103.1:  pxcorrigido = 103.42 ; break;
            case 104:  pxcorrigido = 104.33 ; break;
            case 105:  pxcorrigido = 105.24 ; break;
            case 105.1:  pxcorrigido = 106.16 ; break;
            case 106:  pxcorrigido = 107.08 ; break;
            case 107:  pxcorrigido = 107.99 ; break;
            case 107.1:  pxcorrigido = 108.88 ; break;
            case 108:  pxcorrigido = 109.12 ; break;
            case 109:  pxcorrigido = 109.36 ; break;
            case 110:  pxcorrigido = 110.05 ; break;
            case 111:  pxcorrigido = 110.39 ; break;
            case 112:  pxcorrigido = 110.74 ; break;
            case 113:  pxcorrigido = 111.19 ; break;
            case 114:  pxcorrigido = 111.42 ; break;
            case 115:  pxcorrigido = 111.65 ; break;
            case 115.1:  pxcorrigido = 112.56 ; break;
            case 115.2:  pxcorrigido = 113.48 ; break;
            case 116:  pxcorrigido = 114.4 ; break;
            case 116.1:  pxcorrigido = 115.31 ; break;
            case 116.2:  pxcorrigido = 116.23 ; break;
            case 117:  pxcorrigido = 117.14 ; break;
            case 118:  pxcorrigido = 118.05 ; break;
            case 119:  pxcorrigido = 118.51 ; break;
            case 120:  pxcorrigido = 118.97 ; break;
            case 121:  pxcorrigido = 119.89 ; break;
            case 121.1:  pxcorrigido = 120.8 ; break;
            case 121.2:  pxcorrigido = 121.72 ; break;
            case 122:  pxcorrigido = 122.17 ; break;
            case 123:  pxcorrigido = 122.63 ; break;
            case 123.1:  pxcorrigido = 123.54 ; break;
            case 124:  pxcorrigido = 124.46 ; break;
            case 124.1:  pxcorrigido = 125.37 ; break;
            case 125:  pxcorrigido = 125.83 ; break;
            case 126:  pxcorrigido = 126.06 ; break;
            case 127:  pxcorrigido = 126.29 ; break;
            case 128:  pxcorrigido = 127.2 ; break;
            case 129:  pxcorrigido = 128.12 ; break;
            case 130:  pxcorrigido = 128.58 ; break;
            case 131:  pxcorrigido = 129.03 ; break;
            case 132:  pxcorrigido = 129.95 ; break;
            case 132.1:  pxcorrigido = 130.86 ; break;
            case 132.2:  pxcorrigido = 131.78 ; break;
            case 133:  pxcorrigido = 132.24 ; break;
            case 134:  pxcorrigido = 132.46 ; break;
            case 135:  pxcorrigido = 132.69 ; break;
            case 136:  pxcorrigido = 133.61 ; break;
            case 136.1:  pxcorrigido = 134.52 ; break;
            case 136.2:  pxcorrigido = 135.44 ; break;
            case 137:  pxcorrigido = 136.35 ; break;
            case 137.1:  pxcorrigido = 137.27 ; break;
            case 138:  pxcorrigido = 138.5 ; break;
            case 139:  pxcorrigido = 139.1 ; break;
            case 140:  pxcorrigido = 140.01 ; break;
            case 141:  pxcorrigido = 140.93 ; break;
            case 142:  pxcorrigido = 141.84 ; break;
            case 142.1:  pxcorrigido = 142.76 ; break;
            case 143:  pxcorrigido = 142.99 ; break;
            case 144:  pxcorrigido = 143.21 ; break;
            case 145:  pxcorrigido = 143.44 ; break;
            case 146:  pxcorrigido = 143.67 ; break;
            case 147:  pxcorrigido = 144.59 ; break;
            case 148:  pxcorrigido = 145.04 ; break;
            case 149:  pxcorrigido = 145.5 ; break;
            case 149.1:  pxcorrigido = 146.42 ; break;
            case 149.2:  pxcorrigido = 147.33 ; break;
            case 150:  pxcorrigido = 149.16 ; break;
            case 150.1:  pxcorrigido = 150.08 ; break;
            case 151:  pxcorrigido = 150.99 ; break;
            case 152:  pxcorrigido = 151.45 ; break;
            case 153:  pxcorrigido = 151.91 ; break;
            case 154:  pxcorrigido = 152.36 ; break;
            case 155:  pxcorrigido = 152.82 ; break;
            case 156:  pxcorrigido = 153.74 ; break;
            case 157:  pxcorrigido = 154.65 ; break;
            case 157.1:  pxcorrigido = 155.57 ; break;
            case 158:  pxcorrigido = 156.02 ; break;
            case 159:  pxcorrigido = 156.25 ; break;
            case 160:  pxcorrigido = 156.48 ; break;
            case 160.1:  pxcorrigido = 157.4 ; break;
            case 161:  pxcorrigido = 158.31 ; break;
            case 162:  pxcorrigido = 159.23 ; break;
            case 163:  pxcorrigido = 160.14 ; break;
            case 164:  pxcorrigido = 161.06 ; break;
            case 164.1:  pxcorrigido = 161.97 ; break;
            case 165:  pxcorrigido = 162.43 ; break;
            case 166:  pxcorrigido = 162.89 ; break;
            case 167:  pxcorrigido = 163.8 ; break;
            case 167.1:  pxcorrigido = 164.71 ; break;
            case 167.2:  pxcorrigido = 165.63 ; break;
            case 168:  pxcorrigido = 166.54 ; break;
            case 169:  pxcorrigido = 167.46 ; break;
            case 169.1:  pxcorrigido = 168.37 ; break;
            case 170:  pxcorrigido = 169.29 ; break;
            case 171:  pxcorrigido = 170.2 ; break;
            case 172:  pxcorrigido = 171.12 ; break;
            case 172.1:  pxcorrigido = 172.03 ; break;
            case 173:  pxcorrigido = 172.95 ; break;
            case 174:  pxcorrigido = 173.86 ; break;
            case 175:  pxcorrigido = 174.78 ; break;
            case 175.1:  pxcorrigido = 175.24 ; break;
            case 175.2:  pxcorrigido = 175.69 ; break;
            case 176:  pxcorrigido = 176.61 ; break;
            case 177:  pxcorrigido = 177.07 ; break;
            case 178:  pxcorrigido = 177.52 ; break;
            case 178.1:  pxcorrigido = 177.98 ; break;
            case 178.2:  pxcorrigido = 178.43 ; break;
            case 178.3:  pxcorrigido = 179.35 ; break;
            case 179:  pxcorrigido = 179.58 ; break;
            case 180:  pxcorrigido = 179.81 ; break;
            case 181:  pxcorrigido = 180.04 ; break;
            case 182:  pxcorrigido = 180.15 ; break;
            case 183:  pxcorrigido = 180.27 ; break;
            case 184:  pxcorrigido = 181.18 ; break;
            case 185:  pxcorrigido = 182.1 ; break;
            case 185.1:  pxcorrigido = 183.01 ; break;
            case 185.2:  pxcorrigido = 183.93 ; break;
            case 186:  pxcorrigido = 184.84 ; break;
        }
        function realParseFloat(s) {
            s = s.replace(/[^\d,.-]/g, '');
            if (navigator.language.substring(0, 2) !== "de" && /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(s))
            {
               s = s.replace(/,/g, ''); 
               return parseFloat(s); 
            } else if (/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(s)) 
            {
               s = s.replace(/\./g, ''); 
               s = s.replace(/,/g, '.'); 
               return parseFloat(s);
            } else 
            {
               s = s.replace(/,/g, '');
                    return parseFloat(s); 
                }
            }
    
            function formatNumber(num) {
                return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
            if (document.getElementById('tacada').value == "SPIKE"){
                (document.getElementById('slope1').value) = (((pxcorrigido/30.5) * Math.cos(formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))*Math.PI/180) * 3.813882532418) / 3.355704697986577).toFixed(3);
                (document.getElementById('quebra').value) = (((pxcorrigido/30.5) * Math.cos(formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))*Math.PI/180) * 3.813882532418) / 3.355704697986577).toFixed(3);
            let correcao = 0;
            if (document.getElementById('a13').checked){
                correcao = ((pxcorrigido/30.5) * Math.cos((formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))-(parseFloat(document.getElementById('resaim').value)*parseFloat(document.getElementById('resaimplus').value) / (formatNumber(realParseFloat(document.getElementById('distancia').value.replace(',', '.'))) * 0.06708 / 1.25 * Multiplica))) * Math.PI/180) * 3.813882532418) / 3.355704697986577;
            } else if (document.getElementById('a12').checked) {
                correcao = ((pxcorrigido/30.5) * +Math.cos((+formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))+(+parseFloat(document.getElementById('resaim').value)*parseFloat(document.getElementById('resaimplus').value) / (+formatNumber(realParseFloat(document.getElementById('distancia').value.replace(',', '.'))) * 0.06708 / 1.25 * Multiplica))) * Math.PI/180) * 3.813882532418) / 3.355704697986577;
            }
            if (document.getElementById('a21').checked){
            document.getElementById('slopef').value = correcao.toFixed(3);
            }else if(document.getElementById('a22').checked){
            document.getElementById('slopef').value = correcao.toFixed(3)*-1;
            }
            } else{
                (document.getElementById('slope1').value) = ((pxcorrigido/30.5) * Math.cos(formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))*Math.PI/180) * 3.813882532418).toFixed(3);
                (document.getElementById('quebra').value) = ((pxcorrigido/30.5) * Math.cos(formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))*Math.PI/180) * 3.813882532418).toFixed(3);
            let correcao = 0;
            if (document.getElementById('a13').checked){
                correcao = ((pxcorrigido/30.5) * Math.cos((formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))-(parseFloat(document.getElementById('resaim').value)*parseFloat(document.getElementById('resaimplus').value) / (formatNumber(realParseFloat(document.getElementById('distancia').value.replace(',', '.'))) * 0.06708 / 1.25 * Multiplica))) * Math.PI/180) * 3.813882532418);
            } else if (document.getElementById('a12').checked){
                correcao = ((pxcorrigido/30.5) * +Math.cos((+formatNumber(realParseFloat(document.getElementById('angq').value.replace(',', '.')))+(+parseFloat(document.getElementById('resaim').value)*parseFloat(document.getElementById('resaimplus').value) / (+formatNumber(realParseFloat(document.getElementById('distancia').value.replace(',', '.'))) * 0.06708 / 1.25 * Multiplica))) * Math.PI/180) * 3.813882532418);
            }
            if (document.getElementById('a21').checked){
                document.getElementById('slopef').value = correcao.toFixed(3);
            }else if(document.getElementById('a22').checked){
                document.getElementById('slopef').value = correcao.toFixed(3)*-1;
                }
                document.getElementById('quebra').value = document.getElementById('slopef').value
                calc()
        }
    }
const YARDS_TO_PB = 0.2165;
const YARDS_TO_PBA = 0.8668;
const YARDS_TO_PBA_PLUS = 1.032;
const YARDS_TO_PBA_40 = 2.58;
const YARDS_TO_PBA_100 = 6.2;

function desvioByDegree(yards, distance) {
    return Math.sin(Math.atan2(yards * -1.5, distance)) * distance / 1.5;
}

function anglecalc1(value) {
    

    const angle90 = checkValidInput(document.querySelector('#angulo').value.replace(',', '.'));

    if (document.getElementById('angulo').value > 0 && document.getElementById('angulo').value <= 90){
    const angle3601 = angle90;
    document.getElementById('angulo').value = angle3601.toFixed(2);

}else if(document.getElementById('angulo').value > 90 && document.getElementById('angulo').value <= 180){
    const angle3602 = Math.abs(angle90 - 180) ;
    document.getElementById('angulo').value = angle3602.toFixed(2);

}else if(document.getElementById('angulo').value > 180 && document.getElementById('angulo').value <= 270){
    const angle3603 = angle90 - 180 ;
    document.getElementById('angulo').value = angle3603.toFixed(2);

}else if(document.getElementById('angulo').value > 270 && document.getElementById('angulo').value <= 360){
    const angle3604 = 360 - angle90  ;
    document.getElementById('angulo').value = angle3604.toFixed(2);

}

}

function anglecalc2(value) {

    const angle90 = checkValidInput(document.querySelector('#angulo').value.replace(',', '.'));

    if (document.getElementById('angulo').value > 0 && document.getElementById('angulo').value <= 90){
        const angle3605 = 180 - angle90;
        document.getElementById('angulo').value = angle3605.toFixed(2);
    
    }else if(document.getElementById('angulo').value > 90 && document.getElementById('angulo').value <= 180){
        const angle3602 = angle90 ;
        document.getElementById('angulo').value = angle3602.toFixed(2);
    
    }else if(document.getElementById('angulo').value > 180 && document.getElementById('angulo').value <= 270){
        const angle3603 = Math.abs(angle90-360) ;
        document.getElementById('angulo').value = angle3603.toFixed(2);
    
    }else if(document.getElementById('angulo').value > 270 && document.getElementById('angulo').value <= 360){
        const angle3604 =  angle90 - 180  ;
        document.getElementById('angulo').value = angle3604.toFixed(2);
    
    }

}

function anglecalc3(value) {

    const angle90 = checkValidInput(document.querySelector('#angulo').value.replace(',', '.'));

    if (document.getElementById('angulo').value > 0 && document.getElementById('angulo').value <= 90){
        const angle3605 = angle90 + 180;
        document.getElementById('angulo').value = angle3605.toFixed(2);
    
    }else if(document.getElementById('angulo').value > 90 && document.getElementById('angulo').value <= 180){
        const angle3602 = (360 - angle90) ;
        document.getElementById('angulo').value = angle3602.toFixed(2);
    
    }else if(document.getElementById('angulo').value > 180 && document.getElementById('angulo').value <= 270){
        const angle3603 = angle90 ;
        document.getElementById('angulo').value = angle3603.toFixed(2);
    
    }else if(document.getElementById('angulo').value > 270 && document.getElementById('angulo').value <= 360){
        const angle3604 =  Math.abs(angle90 - 540)  ;
        document.getElementById('angulo').value = angle3604.toFixed(2);
    
    }
}

function anglecalc4(value) {

    const angle90 = checkValidInput(document.querySelector('#angulo').value.replace(',', '.'));
    
    if (document.getElementById('angulo').value > 0 && document.getElementById('angulo').value <= 90){
        const angle3605 = 360 - angle90;
        document.getElementById('angulo').value = angle3605.toFixed(2);
    
    }else if(document.getElementById('angulo').value > 90 && document.getElementById('angulo').value <= 180){
        const angle3602 = ( angle90 + 180) ;
        document.getElementById('angulo').value = angle3602.toFixed(2);
    
    }else if(document.getElementById('angulo').value > 180 && document.getElementById('angulo').value <= 270){
        const angle3603 = Math.abs(angle90 - 540);
        document.getElementById('angulo').value = angle3603.toFixed(2);
    
    }else if(document.getElementById('angulo').value > 270 && document.getElementById('angulo').value <= 360){
        const angle3604 =  angle90  ;
        document.getElementById('angulo').value = angle3604.toFixed(2);
    
    }

}
   function toggle(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
   }

   function resetclear() {

    document.getElementById('pixel').value = "";
    document.getElementById('angq').value = "";

    document.getElementById('taco').value = "_1W"; 
    document.getElementById('ps').value = "NO_POWER_SHOT";
    document.getElementById('tacada').value = "DUNK";

    document.getElementById('distancia').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('vento').value = "";
    document.getElementById('angulo').value = "";
    document.getElementById('quebra').value = "0";
    document.getElementById('terreno').value = "100";
    document.getElementById('curva').value = "";
    document.getElementById('spin').value = "";
    document.getElementById('resaimplus').value = 1;
    document.getElementById('slope1').value = "";
    document.getElementById('slopef').value = "";
    document.getElementById('a12').checked = false;
    document.getElementById('a13').checked = false;
    document.getElementById('a21').checked = false;
    document.getElementById('a22').checked = false;
    document.getElementById('bot1').checked = false;
    document.getElementById('bot2').checked = false;
    document.getElementById('bot3').checked = false;
    document.getElementById('inputhole').value = "";
    document.getElementById('dist1').value = "";
    document.getElementById('dist2').value = "";
    document.getElementById('dist3').value = "";
    document.getElementById('alt1').value = "";
    document.getElementById('alt2').value = "";
    document.getElementById('alt3').value = "";




}
function checkdrive(el) {

    const power_value = checkValidInput(document.getElementById('power').value);
    const ring_value = checkValidInput(document.getElementById('ring').value);
    const pippin_value = checkValidInput(document.getElementById('pippin').value);
    const lolo_value = checkValidInput(document.getElementById('lolo').value);

    const drivecal = 200 + power_value * 2 + ring_value + pippin_value;

    document.getElementById('current_drive').value = `${drivecal}+${lolo_value} | iron+${ring_value}y`;

}
const calculandodrive = setInterval(checkdrive,200)

