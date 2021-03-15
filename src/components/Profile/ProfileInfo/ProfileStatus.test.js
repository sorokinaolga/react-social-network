import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status="Hello World"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello World");
    });

    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status="Hello World"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test('after creation input do not be displayed', () => {
        const component = create(<ProfileStatus status="Hello World"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test('after creation span should be contains correct status', () => {
        const component = create(<ProfileStatus status="Hello World"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Hello World");
    });

    test('input should be displayed in editMode istead of span', () => {
        const component = create(<ProfileStatus status="Hello World"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input).not.toBeNull();
    });

    test('input should be displayed in editMode with correct status', () => {
        const component = create(<ProfileStatus status="Hello World"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Hello World");
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Hello World" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});