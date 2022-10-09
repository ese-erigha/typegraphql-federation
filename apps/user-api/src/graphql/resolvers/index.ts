import { BuildSchemaOptions } from 'type-graphql';

import { UserResolver } from './queries/User';

const resolvers: BuildSchemaOptions['resolvers'] = [UserResolver];

export default resolvers;
