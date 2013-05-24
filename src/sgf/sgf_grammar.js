glift.sgf.parser = (function(){
  /* Generated by PEG.js 0.6.2 (http://pegjs.majda.cz/). */
  
  var result = {
    /*
     * Parses the input with a generated parser. If the parsing is successfull,
     * returns a value explicitly or implicitly specified by the grammar from
     * which the parser was generated (see |PEG.buildParser|). If the parsing is
     * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.
     */
    parse: function(input, startRule) {
      var parseFunctions = {
        "Data": parse_Data,
        "MoreData": parse_MoreData,
        "MoreTokens": parse_MoreTokens,
        "MoreVars": parse_MoreVars,
        "Moves": parse_Moves,
        "Start": parse_Start,
        "TokenName": parse_TokenName,
        "Tokens": parse_Tokens,
        "Variations": parse_Variations,
        "WhiteSpace": parse_WhiteSpace
      };
      
      if (startRule !== undefined) {
        if (parseFunctions[startRule] === undefined) {
          throw new Error("Invalid rule name: " + quote(startRule) + ".");
        }
      } else {
        startRule = "Start";
      }
      
      var pos = 0;
      var reportMatchFailures = true;
      var rightmostMatchFailuresPos = 0;
      var rightmostMatchFailuresExpected = [];
      var cache = {};
      
      function padLeft(input, padding, length) {
        var result = input;
        
        var padLength = length - input.length;
        for (var i = 0; i < padLength; i++) {
          result = padding + result;
        }
        
        return result;
      }
      
      function escape(ch) {
        var charCode = ch.charCodeAt(0);
        
        if (charCode <= 0xFF) {
          var escapeChar = 'x';
          var length = 2;
        } else {
          var escapeChar = 'u';
          var length = 4;
        }
        
        return '\\' + escapeChar + padLeft(charCode.toString(16).toUpperCase(), '0', length);
      }
      
      function quote(s) {
        /*
         * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a
         * string literal except for the closing quote character, backslash,
         * carriage return, line separator, paragraph separator, and line feed.
         * Any character may appear in the form of an escape sequence.
         */
        return '"' + s
          .replace(/\\/g, '\\\\')            // backslash
          .replace(/"/g, '\\"')              // closing quote character
          .replace(/\r/g, '\\r')             // carriage return
          .replace(/\n/g, '\\n')             // line feed
          .replace(/[\x80-\uFFFF]/g, escape) // non-ASCII characters
          + '"';
      }
      
      function matchFailed(failure) {
        if (pos < rightmostMatchFailuresPos) {
          return;
        }
        
        if (pos > rightmostMatchFailuresPos) {
          rightmostMatchFailuresPos = pos;
          rightmostMatchFailuresExpected = [];
        }
        
        rightmostMatchFailuresExpected.push(failure);
      }
      
      function parse_Start() {
        var cacheKey = 'Start@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos, 2) === "(;") {
          var result3 = "(;";
          pos += 2;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\"(;\"");
          }
        }
        if (result3 !== null) {
          var result4 = parse_Tokens();
          if (result4 !== null) {
            var result5 = parse_Variations();
            if (result5 !== null) {
              if (input.substr(pos, 1) === ")") {
                var result6 = ")";
                pos += 1;
              } else {
                var result6 = null;
                if (reportMatchFailures) {
                  matchFailed("\")\"");
                }
              }
              if (result6 !== null) {
                var result1 = [result3, result4, result5, result6];
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(props, children) {
            return glift.rules.movenode(glift.rules.properties(props), children).renumber();
          })(result1[1], result1[2])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_Variations() {
        var cacheKey = 'Variations@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos1 = pos;
        var savedPos2 = pos;
        if (input.substr(pos, 1) === "(") {
          var result7 = "(";
          pos += 1;
        } else {
          var result7 = null;
          if (reportMatchFailures) {
            matchFailed("\"(\"");
          }
        }
        if (result7 !== null) {
          var result8 = parse_Moves();
          if (result8 !== null) {
            if (input.substr(pos, 1) === ")") {
              var result9 = ")";
              pos += 1;
            } else {
              var result9 = null;
              if (reportMatchFailures) {
                matchFailed("\")\"");
              }
            }
            if (result9 !== null) {
              var result17 = parse_WhiteSpace();
              var result10 = result17 !== null ? result17 : '';
              if (result10 !== null) {
                if (input.substr(pos, 1) === "(") {
                  var result11 = "(";
                  pos += 1;
                } else {
                  var result11 = null;
                  if (reportMatchFailures) {
                    matchFailed("\"(\"");
                  }
                }
                if (result11 !== null) {
                  var result12 = parse_Moves();
                  if (result12 !== null) {
                    if (input.substr(pos, 1) === ")") {
                      var result13 = ")";
                      pos += 1;
                    } else {
                      var result13 = null;
                      if (reportMatchFailures) {
                        matchFailed("\")\"");
                      }
                    }
                    if (result13 !== null) {
                      var result16 = parse_WhiteSpace();
                      var result14 = result16 !== null ? result16 : '';
                      if (result14 !== null) {
                        var result15 = parse_MoreVars();
                        if (result15 !== null) {
                          var result5 = [result7, result8, result9, result10, result11, result12, result13, result14, result15];
                        } else {
                          var result5 = null;
                          pos = savedPos2;
                        }
                      } else {
                        var result5 = null;
                        pos = savedPos2;
                      }
                    } else {
                      var result5 = null;
                      pos = savedPos2;
                    }
                  } else {
                    var result5 = null;
                    pos = savedPos2;
                  }
                } else {
                  var result5 = null;
                  pos = savedPos2;
                }
              } else {
                var result5 = null;
                pos = savedPos2;
              }
            } else {
              var result5 = null;
              pos = savedPos2;
            }
          } else {
            var result5 = null;
            pos = savedPos2;
          }
        } else {
          var result5 = null;
          pos = savedPos2;
        }
        var result6 = result5 !== null
          ? (function(var1, white, var2, whiteAlso, more) { return [var1, var2].concat(more); })(result5[1], result5[3], result5[5], result5[7], result5[8])
          : null;
        if (result6 !== null) {
          var result4 = result6;
        } else {
          var result4 = null;
          pos = savedPos1;
        }
        if (result4 !== null) {
          var result0 = result4;
        } else {
          var savedPos0 = pos;
          var result2 = parse_Moves();
          var result3 = result2 !== null
            ? (function(move) { return (move === undefined ? [] : [move]); })(result2)
            : null;
          if (result3 !== null) {
            var result1 = result3;
          } else {
            var result1 = null;
            pos = savedPos0;
          }
          if (result1 !== null) {
            var result0 = result1;
          } else {
            var result0 = null;;
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_MoreVars() {
        var cacheKey = 'MoreVars@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos1 = pos;
        var savedPos2 = pos;
        if (input.substr(pos, 1) === "(") {
          var result7 = "(";
          pos += 1;
        } else {
          var result7 = null;
          if (reportMatchFailures) {
            matchFailed("\"(\"");
          }
        }
        if (result7 !== null) {
          var result8 = parse_Moves();
          if (result8 !== null) {
            if (input.substr(pos, 1) === ")") {
              var result9 = ")";
              pos += 1;
            } else {
              var result9 = null;
              if (reportMatchFailures) {
                matchFailed("\")\"");
              }
            }
            if (result9 !== null) {
              var result12 = parse_WhiteSpace();
              var result10 = result12 !== null ? result12 : '';
              if (result10 !== null) {
                var result11 = parse_MoreVars();
                if (result11 !== null) {
                  var result5 = [result7, result8, result9, result10, result11];
                } else {
                  var result5 = null;
                  pos = savedPos2;
                }
              } else {
                var result5 = null;
                pos = savedPos2;
              }
            } else {
              var result5 = null;
              pos = savedPos2;
            }
          } else {
            var result5 = null;
            pos = savedPos2;
          }
        } else {
          var result5 = null;
          pos = savedPos2;
        }
        var result6 = result5 !== null
          ? (function(move, white, more) {
              return [move].concat(more); })(result5[1], result5[3], result5[4])
          : null;
        if (result6 !== null) {
          var result4 = result6;
        } else {
          var result4 = null;
          pos = savedPos1;
        }
        if (result4 !== null) {
          var result0 = result4;
        } else {
          var savedPos0 = pos;
          if (input.substr(pos, 0) === "") {
            var result2 = "";
            pos += 0;
          } else {
            var result2 = null;
            if (reportMatchFailures) {
              matchFailed("\"\"");
            }
          }
          var result3 = result2 !== null
            ? (function() { return []; })()
            : null;
          if (result3 !== null) {
            var result1 = result3;
          } else {
            var result1 = null;
            pos = savedPos0;
          }
          if (result1 !== null) {
            var result0 = result1;
          } else {
            var result0 = null;;
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_Moves() {
        var cacheKey = 'Moves@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos1 = pos;
        var savedPos2 = pos;
        if (input.substr(pos, 1) === ";") {
          var result7 = ";";
          pos += 1;
        } else {
          var result7 = null;
          if (reportMatchFailures) {
            matchFailed("\";\"");
          }
        }
        if (result7 !== null) {
          var result8 = parse_Tokens();
          if (result8 !== null) {
            var result9 = parse_Variations();
            if (result9 !== null) {
              var result5 = [result7, result8, result9];
            } else {
              var result5 = null;
              pos = savedPos2;
            }
          } else {
            var result5 = null;
            pos = savedPos2;
          }
        } else {
          var result5 = null;
          pos = savedPos2;
        }
        var result6 = result5 !== null
          ? (function(props, children) {
                    return glift.rules.movenode(glift.rules.properties(props), children);
                  })(result5[1], result5[2])
          : null;
        if (result6 !== null) {
          var result4 = result6;
        } else {
          var result4 = null;
          pos = savedPos1;
        }
        if (result4 !== null) {
          var result0 = result4;
        } else {
          var savedPos0 = pos;
          if (input.substr(pos, 0) === "") {
            var result2 = "";
            pos += 0;
          } else {
            var result2 = null;
            if (reportMatchFailures) {
              matchFailed("\"\"");
            }
          }
          var result3 = result2 !== null
            ? (function() { return undefined; })()
            : null;
          if (result3 !== null) {
            var result1 = result3;
          } else {
            var result1 = null;
            pos = savedPos0;
          }
          if (result1 !== null) {
            var result0 = result1;
          } else {
            var result0 = null;;
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_Tokens() {
        var cacheKey = 'Tokens@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        var result3 = parse_TokenName();
        if (result3 !== null) {
          if (input.substr(pos, 1) === "[") {
            var result4 = "[";
            pos += 1;
          } else {
            var result4 = null;
            if (reportMatchFailures) {
              matchFailed("\"[\"");
            }
          }
          if (result4 !== null) {
            var result5 = parse_Data();
            if (result5 !== null) {
              if (input.substr(pos, 1) === "]") {
                var result6 = "]";
                pos += 1;
              } else {
                var result6 = null;
                if (reportMatchFailures) {
                  matchFailed("\"]\"");
                }
              }
              if (result6 !== null) {
                var result12 = parse_WhiteSpace();
                var result7 = result12 !== null ? result12 : '';
                if (result7 !== null) {
                  var result8 = parse_MoreData();
                  if (result8 !== null) {
                    var result11 = parse_WhiteSpace();
                    var result9 = result11 !== null ? result11 : '';
                    if (result9 !== null) {
                      var result10 = parse_MoreTokens();
                      if (result10 !== null) {
                        var result1 = [result3, result4, result5, result6, result7, result8, result9, result10];
                      } else {
                        var result1 = null;
                        pos = savedPos1;
                      }
                    } else {
                      var result1 = null;
                      pos = savedPos1;
                    }
                  } else {
                    var result1 = null;
                    pos = savedPos1;
                  }
                } else {
                  var result1 = null;
                  pos = savedPos1;
                }
              } else {
                var result1 = null;
                pos = savedPos1;
              }
            } else {
              var result1 = null;
              pos = savedPos1;
            }
          } else {
            var result1 = null;
            pos = savedPos1;
          }
        } else {
          var result1 = null;
          pos = savedPos1;
        }
        var result2 = result1 !== null
          ? (function(token, propdata, white, more, whiteAlso, tokens) {
            tokens[token] = [propdata].concat(more);
            return tokens;
          })(result1[0], result1[2], result1[4], result1[5], result1[6], result1[7])
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_MoreTokens() {
        var cacheKey = 'MoreTokens@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var result4 = parse_Tokens();
        if (result4 !== null) {
          var result0 = result4;
        } else {
          var savedPos0 = pos;
          if (input.substr(pos, 0) === "") {
            var result2 = "";
            pos += 0;
          } else {
            var result2 = null;
            if (reportMatchFailures) {
              matchFailed("\"\"");
            }
          }
          var result3 = result2 !== null
            ? (function() { return {}; })()
            : null;
          if (result3 !== null) {
            var result1 = result3;
          } else {
            var result1 = null;
            pos = savedPos0;
          }
          if (result1 !== null) {
            var result0 = result1;
          } else {
            var result0 = null;;
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_Data() {
        var cacheKey = 'Data@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var result1 = [];
        if (input.substr(pos, 2) === "\\]") {
          var result5 = "\\]";
          pos += 2;
        } else {
          var result5 = null;
          if (reportMatchFailures) {
            matchFailed("\"\\\\]\"");
          }
        }
        if (result5 !== null) {
          var result3 = result5;
        } else {
          if (input.substr(pos).match(/^[^\]]/) !== null) {
            var result4 = input.charAt(pos);
            pos++;
          } else {
            var result4 = null;
            if (reportMatchFailures) {
              matchFailed("[^\\]]");
            }
          }
          if (result4 !== null) {
            var result3 = result4;
          } else {
            var result3 = null;;
          };
        }
        while (result3 !== null) {
          result1.push(result3);
          if (input.substr(pos, 2) === "\\]") {
            var result5 = "\\]";
            pos += 2;
          } else {
            var result5 = null;
            if (reportMatchFailures) {
              matchFailed("\"\\\\]\"");
            }
          }
          if (result5 !== null) {
            var result3 = result5;
          } else {
            if (input.substr(pos).match(/^[^\]]/) !== null) {
              var result4 = input.charAt(pos);
              pos++;
            } else {
              var result4 = null;
              if (reportMatchFailures) {
                matchFailed("[^\\]]");
              }
            }
            if (result4 !== null) {
              var result3 = result4;
            } else {
              var result3 = null;;
            };
          }
        }
        var result2 = result1 !== null
          ? (function(props) {
            return props.join("");
          })(result1)
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_MoreData() {
        var cacheKey = 'MoreData@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos1 = pos;
        var savedPos2 = pos;
        if (input.substr(pos, 1) === "[") {
          var result7 = "[";
          pos += 1;
        } else {
          var result7 = null;
          if (reportMatchFailures) {
            matchFailed("\"[\"");
          }
        }
        if (result7 !== null) {
          var result8 = parse_Data();
          if (result8 !== null) {
            if (input.substr(pos, 1) === "]") {
              var result9 = "]";
              pos += 1;
            } else {
              var result9 = null;
              if (reportMatchFailures) {
                matchFailed("\"]\"");
              }
            }
            if (result9 !== null) {
              var result12 = parse_WhiteSpace();
              var result10 = result12 !== null ? result12 : '';
              if (result10 !== null) {
                var result11 = parse_MoreData();
                if (result11 !== null) {
                  var result5 = [result7, result8, result9, result10, result11];
                } else {
                  var result5 = null;
                  pos = savedPos2;
                }
              } else {
                var result5 = null;
                pos = savedPos2;
              }
            } else {
              var result5 = null;
              pos = savedPos2;
            }
          } else {
            var result5 = null;
            pos = savedPos2;
          }
        } else {
          var result5 = null;
          pos = savedPos2;
        }
        var result6 = result5 !== null
          ? (function(propdata, white, more) {
              return [propdata].concat(more); })(result5[1], result5[3], result5[4])
          : null;
        if (result6 !== null) {
          var result4 = result6;
        } else {
          var result4 = null;
          pos = savedPos1;
        }
        if (result4 !== null) {
          var result0 = result4;
        } else {
          var savedPos0 = pos;
          if (input.substr(pos, 0) === "") {
            var result2 = "";
            pos += 0;
          } else {
            var result2 = null;
            if (reportMatchFailures) {
              matchFailed("\"\"");
            }
          }
          var result3 = result2 !== null
            ? (function() { return []; })()
            : null;
          if (result3 !== null) {
            var result1 = result3;
          } else {
            var result1 = null;
            pos = savedPos0;
          }
          if (result1 !== null) {
            var result0 = result1;
          } else {
            var result0 = null;;
          };
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_TokenName() {
        var cacheKey = 'TokenName@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var savedPos0 = pos;
        var savedPos1 = pos;
        if (input.substr(pos).match(/^[a-zA-Z]/) !== null) {
          var result5 = input.charAt(pos);
          pos++;
        } else {
          var result5 = null;
          if (reportMatchFailures) {
            matchFailed("[a-zA-Z]");
          }
        }
        if (result5 !== null) {
          if (input.substr(pos).match(/^[a-zA-Z]/) !== null) {
            var result6 = input.charAt(pos);
            pos++;
          } else {
            var result6 = null;
            if (reportMatchFailures) {
              matchFailed("[a-zA-Z]");
            }
          }
          if (result6 !== null) {
            var result4 = [result5, result6];
          } else {
            var result4 = null;
            pos = savedPos1;
          }
        } else {
          var result4 = null;
          pos = savedPos1;
        }
        if (result4 !== null) {
          var result1 = result4;
        } else {
          if (input.substr(pos).match(/^[a-zA-Z]/) !== null) {
            var result3 = input.charAt(pos);
            pos++;
          } else {
            var result3 = null;
            if (reportMatchFailures) {
              matchFailed("[a-zA-Z]");
            }
          }
          if (result3 !== null) {
            var result1 = result3;
          } else {
            var result1 = null;;
          };
        }
        var result2 = result1 !== null
          ? (function(name) {
            if (name.length === 1) return name[0];
            else return name.join("").toUpperCase();
          })(result1)
          : null;
        if (result2 !== null) {
          var result0 = result2;
        } else {
          var result0 = null;
          pos = savedPos0;
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function parse_WhiteSpace() {
        var cacheKey = 'WhiteSpace@' + pos;
        var cachedResult = cache[cacheKey];
        if (cachedResult) {
          pos = cachedResult.nextPos;
          return cachedResult.result;
        }
        
        
        var result0 = [];
        if (input.substr(pos, 1) === " ") {
          var result3 = " ";
          pos += 1;
        } else {
          var result3 = null;
          if (reportMatchFailures) {
            matchFailed("\" \"");
          }
        }
        if (result3 !== null) {
          var result1 = result3;
        } else {
          if (input.substr(pos, 1) === "\n") {
            var result2 = "\n";
            pos += 1;
          } else {
            var result2 = null;
            if (reportMatchFailures) {
              matchFailed("\"\\n\"");
            }
          }
          if (result2 !== null) {
            var result1 = result2;
          } else {
            var result1 = null;;
          };
        }
        while (result1 !== null) {
          result0.push(result1);
          if (input.substr(pos, 1) === " ") {
            var result3 = " ";
            pos += 1;
          } else {
            var result3 = null;
            if (reportMatchFailures) {
              matchFailed("\" \"");
            }
          }
          if (result3 !== null) {
            var result1 = result3;
          } else {
            if (input.substr(pos, 1) === "\n") {
              var result2 = "\n";
              pos += 1;
            } else {
              var result2 = null;
              if (reportMatchFailures) {
                matchFailed("\"\\n\"");
              }
            }
            if (result2 !== null) {
              var result1 = result2;
            } else {
              var result1 = null;;
            };
          }
        }
        
        
        
        cache[cacheKey] = {
          nextPos: pos,
          result:  result0
        };
        return result0;
      }
      
      function buildErrorMessage() {
        function buildExpected(failuresExpected) {
          failuresExpected.sort();
          
          var lastFailure = null;
          var failuresExpectedUnique = [];
          for (var i = 0; i < failuresExpected.length; i++) {
            if (failuresExpected[i] !== lastFailure) {
              failuresExpectedUnique.push(failuresExpected[i]);
              lastFailure = failuresExpected[i];
            }
          }
          
          switch (failuresExpectedUnique.length) {
            case 0:
              return 'end of input';
            case 1:
              return failuresExpectedUnique[0];
            default:
              return failuresExpectedUnique.slice(0, failuresExpectedUnique.length - 1).join(', ')
                + ' or '
                + failuresExpectedUnique[failuresExpectedUnique.length - 1];
          }
        }
        
        var expected = buildExpected(rightmostMatchFailuresExpected);
        var actualPos = Math.max(pos, rightmostMatchFailuresPos);
        var actual = actualPos < input.length
          ? quote(input.charAt(actualPos))
          : 'end of input';
        
        return 'Expected ' + expected + ' but ' + actual + ' found.';
      }
      
      function computeErrorPosition() {
        /*
         * The first idea was to use |String.split| to break the input up to the
         * error position along newlines and derive the line and column from
         * there. However IE's |split| implementation is so broken that it was
         * enough to prevent it.
         */
        
        var line = 1;
        var column = 1;
        var seenCR = false;
        
        for (var i = 0; i <  rightmostMatchFailuresPos; i++) {
          var ch = input.charAt(i);
          if (ch === '\n') {
            if (!seenCR) { line++; }
            column = 1;
            seenCR = false;
          } else if (ch === '\r' | ch === '\u2028' || ch === '\u2029') {
            line++;
            column = 1;
            seenCR = true;
          } else {
            column++;
            seenCR = false;
          }
        }
        
        return { line: line, column: column };
      }
      
      
      
      var result = parseFunctions[startRule]();
      
      /*
       * The parser is now in one of the following three states:
       *
       * 1. The parser successfully parsed the whole input.
       *
       *    - |result !== null|
       *    - |pos === input.length|
       *    - |rightmostMatchFailuresExpected| may or may not contain something
       *
       * 2. The parser successfully parsed only a part of the input.
       *
       *    - |result !== null|
       *    - |pos < input.length|
       *    - |rightmostMatchFailuresExpected| may or may not contain something
       *
       * 3. The parser did not successfully parse any part of the input.
       *
       *   - |result === null|
       *   - |pos === 0|
       *   - |rightmostMatchFailuresExpected| contains at least one failure
       *
       * All code following this comment (including called functions) must
       * handle these states.
       */
      if (result === null || pos !== input.length) {
        var errorPosition = computeErrorPosition();
        throw new this.SyntaxError(
          buildErrorMessage(),
          errorPosition.line,
          errorPosition.column
        );
      }
      
      return result;
    },
    
    /* Returns the parser source code. */
    toSource: function() { return this._source; }
  };
  
  /* Thrown when a parser encounters a syntax error. */
  
  result.SyntaxError = function(message, line, column) {
    this.name = 'SyntaxError';
    this.message = message;
    this.line = line;
    this.column = column;
  };
  
  result.SyntaxError.prototype = Error.prototype;
  
  return result;
})();
