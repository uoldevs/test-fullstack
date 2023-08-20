import { z } from 'zod';

const id = z.number().int().positive();

export default { id };
