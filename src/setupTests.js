import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from "enzyme-to-json";
import jestMockFetch from 'jest-fetch-mock';

// fetch used during mocks
global.fetch = jestMockFetch;

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

configure({ adapter: new Adapter() });