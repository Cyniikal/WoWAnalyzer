import React from 'react';

import { Anatta336 } from 'CONTRIBUTORS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

export default [
  {
    date: new Date('2018-08-11'),
    changes: <React.Fragment>Added tracking for wasted energy from <SpellLink id={SPELLS.TIGERS_FURY.id} /> and a breakdown of how energy is spent.</React.Fragment>,
    contributors: [Anatta336],
  },
  {
    date: new Date('2018-08-05'),
    changes: <React.Fragment>Added a checklist for Feral.</React.Fragment>,
    contributors: [Anatta336],
  },
  {
    date: new Date('2018-07-22'),
    changes: <React.Fragment>Corrected <SpellLink id={SPELLS.SAVAGE_ROAR_TALENT.id} /> to only claim credit for damage from abilities it affects in 8.0.1</React.Fragment>,
    contributors: [Anatta336],
  },
  {
    date: new Date('2018-07-15'),
    changes: <React.Fragment>Fixed bugs with combo generation from AoE attacks and detecting when <SpellLink id={SPELLS.PRIMAL_FURY.id} /> waste is unavoidable.</React.Fragment>,
    contributors: [Anatta336],
  },
  {
    date: new Date('2018-07-15'),
    changes: <React.Fragment>Added tracking for how <SpellLink id={SPELLS.BLOODTALONS_TALENT.id} /> charges are used.</React.Fragment>,
    contributors: [Anatta336],
  },
  {
    date: new Date('2018-07-15'),
    changes: 'Added tracking of time spent at maximum energy.',
    contributors: [Anatta336],
  },
  {
    date: new Date('2018-07-15'),
    changes: <React.Fragment>Added tracking for number of targets hit by <SpellLink id={SPELLS.SWIPE_CAT.id} />, <SpellLink id={SPELLS.THRASH_FERAL.id} />, and <SpellLink id={SPELLS.BRUTAL_SLASH_TALENT.id} />.</React.Fragment>,
    contributors: [Anatta336],
  },
];
