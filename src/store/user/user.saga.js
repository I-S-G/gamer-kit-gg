import { all, call, takeLatest, put } from 'redux-saga/effects';
import { getCurrentUser, createUser, signInWithGooglePopup, signInWithGoogleRedirect, signOutUser, createUserWithEmail } from '../../utils/firebase.utils';
import { signInSuccess, signInFailed, signOutFailed, signOutSuccess, signUpSuccess, signUpFailed } from './user-action';
import { USER_ACTION_TYPES } from './user-types';

function* getUserSnapshot(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUser, userAuth, additionalDetails);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getUserSnapshot, userAuth);
    } catch(error) {
        yield put(signInFailed(error));
    }
}

function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated )
}

function* signInWithGoogle() {
    try{
        const { user } = yield call(signInWithGooglePopup);
        yield call(getUserSnapshot, user);
    } catch(error) {
        yield put(signInFailed(error));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle )
}

function* signInWithGoogleR() {
    try {
        yield call(signInWithGoogleRedirect);
    } catch(error) {
        yield put(signInFailed(error));
    }
}

function* onGoogleRedirectSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_REDIRECT_SIGN_IN_START, signInWithGoogleR )
}

function* signOut() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

function* onSignOut() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

function* signUp({payload: {email, password, displayName}}) {
    try {
        const { user } = yield call(createUserWithEmail, email, password);
        yield put(signUpSuccess(user, { displayName }));
    } catch(error) {
        yield put(signUpFailed(error));
    }
}

function* signInAfterSignUp({payload: {userAuth, additionalDetails}}) {
    try {
        yield call(getUserSnapshot, userAuth, additionalDetails);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onGoogleRedirectSignInStart),
        call(onSignOut),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}