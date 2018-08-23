// https://github.com/FormidableLabs/enzyme-matchers
import 'jest-enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// brew install watchman
