import CoreCombatLogParser from 'Parser/Core/CombatLogParser';
import LowHealthHealing from 'Parser/Core/Modules/Features/LowHealthHealing';
import HealingDone from 'Parser/Core/Modules/HealingDone';

import LightOfDawnNormalizer from './Normalizers/LightOfDawn';
import DivinePurposeNormalizer from './Normalizers/DivinePurpose';
import BeaconOfVirtueNormalizer from './Normalizers/BeaconOfVirtue';

import PaladinAbilityTracker from './Modules/PaladinCore/PaladinAbilityTracker';
import BeaconHealOriginMatcher from './Modules/PaladinCore/BeaconHealOriginMatcher';
import BeaconTargets from './Modules/PaladinCore/BeaconTargets';
import BeaconHealing from './Modules/PaladinCore/BeaconHealing';
import CastBehavior from './Modules/PaladinCore/CastBehavior';
import Overhealing from './Modules/PaladinCore/Overhealing';
import FillerLightOfTheMartyrs from './Modules/PaladinCore/FillerLightOfTheMartyrs';
import FillerFlashOfLight from './Modules/PaladinCore/FillerFlashOfLight';
import LightOfDawn from './Modules/PaladinCore/LightOfDawn';
import LightOfDawnIndexer from './Modules/PaladinCore/LightOfDawnIndexer';
import SpellManaCost from './Modules/PaladinCore/SpellManaCost';

import Abilities from './Modules/Abilities';
import Checklist from './Modules/Features/Checklist/Module';
import MasteryEffectiveness from './Modules/Features/MasteryEffectiveness';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';
import CooldownThroughputTracker from './Modules/Features/CooldownThroughputTracker';
import StatValues from './Modules/Features/StatValues';

import MightOfTheMountain from './Modules/Racials/Dwarf/MightOfTheMountain';

import RuleOfLaw from './Modules/Talents/RuleOfLaw';
import DevotionAuraDamageReduction from './Modules/Talents/DevotionAuraDamageReduction';
// import DevotionAuraLivesSaved from './Modules/Talents/DevotionAuraLivesSaved';
import AuraOfSacrificeDamageReduction from './Modules/Talents/AuraOfSacrificeDamageReduction';
// import AuraOfSacrificeLivesSaved from './Modules/Talents/AuraOfSacrificeLivesSaved';
import AuraOfMercy from './Modules/Talents/AuraOfMercy';
import HolyAvenger from './Modules/Talents/HolyAvenger';
import DivinePurpose from './Modules/Talents/DivinePurpose';
import CrusadersMight from './Modules/Talents/CrusadersMight';

import { ABILITIES_AFFECTED_BY_HEALING_INCREASES } from './Constants';

class CombatLogParser extends CoreCombatLogParser {
  static abilitiesAffectedByHealingIncreases = ABILITIES_AFFECTED_BY_HEALING_INCREASES;

  static specModules = {
    // Normalizers
    lightOfDawnNormalizer: LightOfDawnNormalizer,
    divinePurposeNormalizer: DivinePurposeNormalizer,
    beaconOfVirtueNormalizer: BeaconOfVirtueNormalizer,

    // Override the ability tracker so we also get stats for IoL and beacon healing
    abilityTracker: PaladinAbilityTracker,
    lowHealthHealing: LowHealthHealing,

    // PaladinCore
    healingDone: [HealingDone, { showStatistic: true }],
    beaconHealOriginMatcher: BeaconHealOriginMatcher,
    beaconTargets: BeaconTargets,
    beaconHealing: BeaconHealing,
    castBehavior: CastBehavior,
    overhealing: Overhealing,
    fillerLightOfTheMartyrs: FillerLightOfTheMartyrs,
    fillerFlashOfLight: FillerFlashOfLight,
    lightOfDawn: LightOfDawn,
    lightOfDawnIndexer: LightOfDawnIndexer,
    spellManaCost: SpellManaCost,

    // Features
    checklist: Checklist,
    abilities: Abilities,
    masteryEffectiveness: MasteryEffectiveness,
    alwaysBeCasting: AlwaysBeCasting,
    cooldownThroughputTracker: CooldownThroughputTracker,
    statValues: StatValues,

    // Racials
    mightOfTheMountain: MightOfTheMountain,

    // Talents
    ruleOfLaw: RuleOfLaw,
    devotionAuradamageReduction: DevotionAuraDamageReduction,
    // devotionAuraLivesSaved: DevotionAuraLivesSaved,
    auraOfSacrificeDamageReduction: AuraOfSacrificeDamageReduction,
    // auraOfSacrificeLivesSaved: AuraOfSacrificeLivesSaved,
    auraOfMercy: AuraOfMercy,
    holyAvenger: HolyAvenger,
    divinePurpose: DivinePurpose,
    crusadersMight: CrusadersMight,
  };
}

export default CombatLogParser;
