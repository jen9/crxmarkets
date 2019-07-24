import {ASCENDING, DESCENDING} from "../../constants/sortingTypes";
import applySorting from '../sort';

it("should sort array ascending", () => {
    expect(applySorting([{'last_name': 3}, {'last_name': 1}, {'last_name': 2}], ASCENDING))
        .toEqual([{'last_name': 1}, {'last_name': 2}, {'last_name': 3}]);
});

it("should sort array descending", () => {
    expect(applySorting([{'last_name': 3}, {'last_name': 1}, {'last_name': 2}], DESCENDING))
        .toEqual([{'last_name': 3}, {'last_name': 2}, {'last_name': 1}]);
});
