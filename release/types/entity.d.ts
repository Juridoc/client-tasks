/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Profiles from '@juridoc/client-profiles';
import * as Contacts from '@juridoc/client-contacts';
/**
 * Task entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Task Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * List of target grants.
     */
    grantsIdList: string[];
    /**
     * Contact list of answered members.
     */
    answeredContactsIdList: string[];
    /**
     * Contact entity list of answered members.
     */
    answeredContactsList: Contacts.Entity[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Task section.
     */
    section: string;
    /**
     * Task action.
     */
    action: string;
    /**
     * Task parameters.
     */
    parameters: RestDB.Map<any>;
}
