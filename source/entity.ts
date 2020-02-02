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
@RestDB.Schema.Entity('tasks')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Task Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile!: Profiles.Entity;

  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * List of target grants.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList!: string[];

  /**
   * Contact list of answered members.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public answeredContactsIdList!: string[];

  /**
   * Contact entity list of answered members.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(() => Contacts.Entity, [
    'id',
    'pictureId',
    'name',
    'personal.firstName',
    'personal.lastName',
    'professional.denomination'
  ])
  @Class.Public()
  public answeredContactsList!: Contacts.Entity[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Task section.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public section!: string;

  /**
   * Task action.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public action!: string;

  /**
   * Task parameters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public parameters!: RestDB.Map<any>;
}
