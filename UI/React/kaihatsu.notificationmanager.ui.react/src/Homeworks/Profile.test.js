import {render, screen} from '@testing-library/react'
import {ProfileReducer,toggleAgreement} from '../store/Profile/Reducer'
import Profile,{ProfileProps} from './Profile'

describe('Profile reducer', () => {

    test('initialState name', () => {
        const profile = ProfileReducer(undefined, {type:''});
        //console.log(profile);
        expect(profile.name).toEqual('defaultProfile');
    });

    test('initialState isAgreed', () => {
        const profile = ProfileReducer(undefined, {type:''});
        expect(profile.isAgreed).toEqual(false);
    });

    test('initialState isAgreed', () => {
        const action = {type:toggleAgreement.type};
        const profile = ProfileReducer(undefined, action);
        //console.log(profile);
        expect(profile.isAgreed).toEqual(true);
    });

    test('find header', async () => {
        render(<Profile></Profile>);
        //screen.debug();
        const header = await screen.findByText(/Профиль/i)
        //console.log(header);
        expect(header).toBeInTheDocument();
    });
    
    test('props', async () => {
        render(<ProfileProps name="Mugen"></ProfileProps>);
        //screen.debug();
        const name = await screen.findByText(/Mugen/i)
        //console.log(header);
        expect(name).toBeInTheDocument();
    });
        // more tests...
});