import { Injectable } from '@angular/core';

export class RelativeMass {
  name: string;
  mass: number;
  type: string;
}

let relativeMasses: RelativeMass[] = [{
  name: "Sun",
  mass: 1,
  type: 'Star'
}, {
  name: "fdsg",
  mass: 2,
  type: 'Planet'
}, {
  name: "fsdg",
  mass: 3,
  type: 'Planet'
}, {
  name: "dfssf",
  mass: 2,
  type: 'Planet'
}, {
  name: "qdq",
  mass: 3,
  type: 'Planet'
}, {
  name: "vbxb",
  mass: 10,
  type: 'Planet'
}, {
  name: "bcgn",
  mass: 3,
  type: 'Planet'
}, {
  name: "jygj",
  mass: 10,
  type: 'Planet'
}, {
  name: "qsdqsf",
  mass: 3,
  type: 'Planet'
}, {
  name: "klku",
  mass: 10,
  type: 'Planet'
}, {
  name: "dzds",
  mass: 3,
  type: 'Planet'
}];

@Injectable()
export class Service {
  getRelativeMasses(): RelativeMass[] {
    return relativeMasses;
  }
}
