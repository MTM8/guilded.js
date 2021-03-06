import Client from '../Client';
import Role from '../Role';
import Team from '../Team';
import BaseManager from './BaseManager';

export default class TeamRoleManager extends BaseManager<Role> {
    constructor(client: Client, public team: Team) {
        super(client, Role);
    }
}
