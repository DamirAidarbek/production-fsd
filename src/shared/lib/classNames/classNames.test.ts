import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('classM')).toBe('classM');
    });

    test('with mods', () => {
        expect(classNames('classM', { hovered: true, selected: true }))
            .toBe('classM hovered selected');
    });

    test('with mods, additional', () => {
        expect(classNames('classM', { hovered: true }, ['class1']))
            .toBe('classM class1 hovered');
    });

    test('with false mods', () => {
        expect(classNames('classM', { hovered: false, selected: true }, ['class1']))
            .toBe('classM class1 selected');
    });
});
