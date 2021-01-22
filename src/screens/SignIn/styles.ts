import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#1c1c1e',
        padding: 25
    },
    forgotPasswordView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    forgotPasswordText:{
        color: '#3375bc',
        fontSize: 16        
    },

    formView: {
        flex: 1,
        marginTop: 70
    },
    formTitle: {
        color: '#FFFFFF',
        fontSize: 28,
        marginBottom: 30
    },

    formInput: {
        color: '#FFFFFF',
        fontSize: 16,
        borderBottomColor: '#5a5a5e',
        borderBottomWidth: 1,
        marginBottom: 20,        
    },

    formButtonview:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10      
    },
    formButton: {
        backgroundColor: '#3375bc',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 30,
        width: 250 
    },
    formButtonText: {
        color: '#FFFFFF',
        fontSize: 16
    }
});