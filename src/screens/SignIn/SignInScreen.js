import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Context as AuthContext} from '../../context/AuthContext';
import ProgressBar from '../../components/ProgressBar';

const SignInScreen = ({navigation}) => {
  const {state, signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>SignIn</Text>
      <Image
        source={require('../../../images/signup_logo.png')}
        style={styles.signUpLogo}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        underlineColorAndroid="transparent"
        style={styles.inputs}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newEmail => setEmail(newEmail)}
      />
      <TextInput
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={true}
        style={styles.inputs}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newPassword => setPassword(newPassword)}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          signIn({email, password});
        }}>
        <Text style={styles.signUpText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.containerSignIn}>
        <Text
          style={{
            color: 'gray',
          }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              marginHorizontal: 8,
              color: 'blue',
            }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
      {state.loading ? <ProgressBar /> : null}
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerSignIn: {
    flexDirection: 'row',
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 200,
    borderRadius: 5,
    backgroundColor: '#3C82FF',
    marginTop: 16,
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  signUpLogo: {
    width: 200,
    height: 200,
    marginTop: 16,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  welcomeText: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: '400',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 2,
    marginTop: 8,
    paddingHorizontal: 8,
    borderColor: '#E2E6EA',
    alignSelf: 'stretch',
    borderRadius: 5,
  },
  signUpText: {
    color: 'white',
  },
});

export default SignInScreen;
