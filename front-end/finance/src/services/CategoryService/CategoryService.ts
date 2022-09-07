import { MethodOptions } from '../Types';

export default interface CategoryService {
    getCategoryListToComboBox(options?: MethodOptions): string;
}
