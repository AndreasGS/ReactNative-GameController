import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';

function isKonamiCode(code) {
  return JSON.stringify(code) === JSON.stringify(
    ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'A', 'B', 'START']
  );
}

class Controller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: [],
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  onControllerPress = key => {
    const { onKonamiCode, hideController } = this.props;
    const { code } = this.state;

    if (key === 'SELECT') {
      Alert.alert(
        'SELECT MENU',
        'What do you want to do',
        [
          {text: 'Try again', onPress: () => this.setState({ code: [] })},
          {text: 'Cancel', onPress: () => {}, style: 'cancel'},
          {text: 'Close controller', onPress: hideController},
        ],
        {cancelable: false},
      );
    }

    const newCodeArray = code.slice();
    newCodeArray.push(key);

    if (isKonamiCode(newCodeArray)) {
      onKonamiCode();
    }

    this.setState({ code: newCodeArray });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setState({ code: [] }), 2000);
  }

  render() {
    const { showController } = this.props;

    if (showController) {
      return (
        <Modal transparent={true} animationType="none" onRequestClose={() => {}}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <SafeAreaView style={{
                position: 'relative',
                width: '80%',
                height: '90%',
                backgroundColor: '#dcdcdc',
                borderRadius: 5,
              }}
            >
              <View style={{
                  position: 'absolute',
                  width: '85%',
                  height: '96%',
                  borderRadius: 5,
                  top: '2%',
                  right: '2%',
                  backgroundColor: '#1a1a1a',
                }}
              >
                <View style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
                >
                  <View style={{
                      flex: 1,
                      position: 'relative',
                    }}
                  >
                    <View
                      style={{
                        position: 'absolute',
                        height: '60%',
                        width: '60%',
                        top: '20%',
                        right: '15%',
                      }}
                    >
                      <View
                        style={{
                          position: 'absolute',
                          right: 0,
                          top: 0,
                          height: '100%',
                          justifyContent: 'space-between',
                        }}
                      >
                        <View
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 5,
                            backgroundColor: '#dddddd',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => this.onControllerPress('A')}
                            style={{
                              width: 45,
                              height: 45,
                              borderRadius: 45,
                              backgroundColor: 'red',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Text
                              style={{
                                color: '#1a1a1a',
                                transform: [{ rotate: '-90deg'}],
                                fontWeight: 'bold',
                                fontSize: 24,
                              }}
                            >
                              A
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 5,
                            backgroundColor: '#dddddd',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => this.onControllerPress('B')}
                            style={{
                              width: 45,
                              height: 45,
                              borderRadius: 45,
                              backgroundColor: 'red',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                              <Text
                                style={{
                                  color: '#1a1a1a',
                                  transform: [{ rotate: '-90deg'}],
                                  fontWeight: 'bold',
                                  fontSize: 24,
                                }}
                              >
                                B
                              </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          left: -50,
                          bottom: -55,
                          height: '100%',
                        }}
                      >
                        <Text
                          style={{
                            color: 'red',
                            transform: [{ rotate: '-90deg'}],
                            fontWeight: 'bold',
                            fontSize: 20,
                          }}
                        >
                          Nintendo
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View
                      style={{
                        height: '100%',
                        width: '13%',
                        backgroundColor: '#808080',
                        borderRadius: 10,
                        borderBottomLeftRadius: 0,
                        borderTopLeftRadius: 0,
                      }}
                    />
                    <View
                      style={{
                        height: '100%',
                        width: '13%',
                        backgroundColor: '#808080',
                        borderRadius: 10,
                      }}
                    />
                    <View
                      style={{
                        height: '100%',
                        width: '13%',
                        backgroundColor: '#808080',
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}
                      >
                        <View
                          style={{
                            height: '50%',
                            width: 70,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Text
                            style={{
                              transform: [{ rotate: '-90deg'}],
                              fontWeight: 'bold',
                              fontSize: 18,
                              color: 'red',
                            }}
                          >
                            START
                          </Text>
                        </View>
                        <View
                          style={{
                            height: '50%',
                            width: 70,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Text
                            style={{
                              transform: [{ rotate: '-90deg'}],
                              fontWeight: 'bold',
                              fontSize: 18,
                              color: 'red',
                            }}
                          >
                            SELECT
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        height: '100%',
                        width: '23%',
                        backgroundColor: '#dddddd',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <View
                        style={{
                          width: '85%',
                          height: '95%',
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: '#1a1a1a',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => this.onControllerPress('START')}
                          style={{
                            width: '25%',
                            height: '30%',
                            borderRadius: 10,
                            backgroundColor: '#1a1a1a',
                          }}
                        />
                        <TouchableOpacity
                          onPress={() => this.onControllerPress('SELECT')}
                          style={{
                            width: '25%',
                            height: '30%',
                            borderRadius: 10,
                            backgroundColor: '#1a1a1a',
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        height: '100%',
                        width: '13%',
                        backgroundColor: '#808080',
                        borderRadius: 10,
                        borderBottomRightRadius: 0,
                        borderTopRightRadius: 0,
                      }}
                    />
                  </View>
                  <View style={{
                      flex: 1,
                      position: 'relative',
                    }}
                  >
                    <View
                      style={{
                        position: 'absolute',
                        height: '60%',
                        width: '60%',
                        top: '20%',
                        right: '15%',
                      }}
                    >
                      <View
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => this.onControllerPress('DOWN')}
                          style={{
                            position: 'absolute',
                            width: '34%',
                            height: '34%',
                            borderWidth: 3,
                            borderLeftWidth: 0,
                            borderColor: 'white',
                            top: '33%',
                            left: '66%',
                          }}
                        />
                        <TouchableOpacity
                          onPress={() => this.onControllerPress('RIGHT')}
                          style={{
                            position: 'absolute',
                            width: '34%',
                            height: '34%',
                            borderWidth: 3,
                            borderBottomWidth: 0,
                            borderColor: 'white',
                            top: 0,
                            left: '33%',
                          }}
                        />
                        <TouchableOpacity
                          onPress={() => this.onControllerPress('UP')}
                          style={{
                            position: 'absolute',
                            width: '34%',
                            height: '34%',
                            borderWidth: 3,
                            borderRightWidth: 0,
                            borderColor: 'white',
                            top: '33%',
                            left: 0,
                          }}
                        />
                        <TouchableOpacity
                          onPress={() => this.onControllerPress('LEFT')}
                          style={{
                            position: 'absolute',
                            width: '34%',
                            height: '34%',
                            borderWidth: 3,
                            borderTopWidth: 0,
                            borderColor: 'white',
                            top: '66%',
                            left: '33%',
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </Modal>
      );
    }

    return null;
  }
}
Controller.propTypes = {
  showController: PropTypes.bool.isRequired,
  onKonamiCode: PropTypes.func.isRequired,
  hideController: PropTypes.func.isRequired,
};

export default Controller;
