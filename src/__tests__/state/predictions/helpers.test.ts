import {
  makeFutureRoundResponse,
  numberOrNull,
  transformBetResponse,
  transformUserResponse,
} from 'state/predictions/helpers'

describe('numberOrNull', () => {
  it.each([
    ['2', 2],
    ['7.308', 7.308],
    [null, null],
    ['test', null],
  ])('return %s correctly as number, null, or NaN', (value, expected) => {
    expect(numberOrNull(value)).toEqual(expected)
  })
})

describe('makeFutureRoundResponse', () => {
  it('returns a correctly transformed future round response', () => {
    expect(makeFutureRoundResponse(200, 1626243374)).toEqual({
      epoch: 200,
      startTimestamp: 1626243374,
      lockTimestamp: null,
      closeTimestamp: null,
      lockPrice: null,
      closePrice: null,
      totalAmount: { hex: '0x00', type: 'BigNumber' },
      bullAmount: { hex: '0x00', type: 'BigNumber' },
      bearAmount: { hex: '0x00', type: 'BigNumber' },
      rewardBaseCalAmount: { hex: '0x00', type: 'BigNumber' },
      rewardAmount: { hex: '0x00', type: 'BigNumber' },
      oracleCalled: false,
      lockOracleId: null,
      closeOracleId: null,
    })
  })
})

describe('transformUserResponse', () => {
  const userResponse = {
    averageADA: '0.0101753905736882928',
    block: '9316304',
    createdAt: '1626767110',
    id: '0x54f292760e248cfe64191c7d85260f9ddaa01f2b',
    netADA: '0.057914277602874121',
    totalADA: '0.050876952868441464',
    totalADABear: '0.050876952868441464',
    totalADABull: '0',
    totalADAClaimed: '0.119668183339757049',
    totalBets: '5',
    totalBetsBear: '3',
    totalBetsBull: '2',
    totalBetsClaimed: '1',
    updatedAt: '1626770557',
    winRate: '20',
  }

  it('transforms user response correctly', () => {
    expect(transformUserResponse(userResponse)).toEqual({
      averageADA: 0.0101753905736882928,
      block: 9316304,
      createdAt: 1626767110,
      id: '0x54f292760e248cfe64191c7d85260f9ddaa01f2b',
      netADA: 0.057914277602874121,
      totalADA: 0.050876952868441464,
      totalADABear: 0.050876952868441464,
      totalADABull: 0,
      totalADAClaimed: 0.119668183339757049,
      totalBets: 5,
      totalBetsBear: 3,
      totalBetsBull: 2,
      totalBetsClaimed: 1,
      updatedAt: 1626770557,
      winRate: 20,
    })
  })
})

describe('transformBetResponse', () => {
  const userResponse = {
    averageADA: '0.005',
    block: '9315031',
    createdAt: '1626763291',
    id: '0x335d6a2c3dd0c04a21f41d30c9ee75e640a87890',
    netADA: '-0.0055',
    totalADA: '0.005',
    totalADABear: '0.005',
    totalADABull: '0',
    totalADAClaimed: '0.0045',
    totalBets: '1',
    totalBetsBear: '0',
    totalBetsBull: '1',
    totalBetsClaimed: '1',
    updatedAt: '1626763291',
    winRate: '100',
  }

  it('returns a correctly transformed betresponse without round', () => {
    const betResponseWithoutRound = {
      amount: '0.001030231215331515',
      block: '9318174',
      claimed: false,
      claimedAt: null,
      claimedADA: null,
      claimedBlock: null,
      claimedHash: null,
      claimedNetADA: null,
      createdAt: '1626772720',
      hash: '0xbf9a414080b76f1139e087a50d79535a5014c472e24850b1bfc767c6d92ac947',
      id: '0x1fd3a652f5d078add86e1d6f1c817fe0cd0541f5f3000000',
      position: 'Bull',
      updatedAt: '1626772720',
      user: userResponse,
    }

    expect(transformBetResponse(betResponseWithoutRound)).toEqual({
      amount: 0.001030231215331515,
      block: 9318174,
      claimed: false,
      claimedAt: null,
      claimedADA: 0,
      claimedBlock: null,
      claimedHash: null,
      claimedNetADA: 0,
      createdAt: 1626772720,
      hash: '0xbf9a414080b76f1139e087a50d79535a5014c472e24850b1bfc767c6d92ac947',
      id: '0x1fd3a652f5d078add86e1d6f1c817fe0cd0541f5f3000000',
      position: 'Bull',
      updatedAt: 1626772720,
      user: {
        averageADA: 0.005,
        block: 9315031,
        createdAt: 1626763291,
        id: '0x335d6a2c3dd0c04a21f41d30c9ee75e640a87890',
        netADA: -0.0055,
        totalADA: 0.005,
        totalADABear: 0.005,
        totalADABull: 0,
        totalBets: 1,
        totalADAClaimed: 0.0045,
        totalBetsBear: 0,
        totalBetsBull: 1,
        totalBetsClaimed: 1,
        updatedAt: 1626763291,
        winRate: 100,
      },
    })
  })

  it('returns a correctly transformed betresponse with round', () => {
    const betResponseWithRound = {
      amount: '0.001030231215331515',
      block: '9318174',
      claimed: false,
      claimedAt: null,
      claimedADA: null,
      claimedBlock: null,
      claimedHash: null,
      claimedNetADA: null,
      createdAt: '1626772720',
      hash: '0xbf9a414080b76f1139e087a50d79535a5014c472e24850b1bfc767c6d92ac947',
      id: '0x1fd3a652f5d078add86e1d6f1c817fe0cd0541f5f3000000',
      position: 'Bull',
      updatedAt: '1626772720',
      user: userResponse,
      round: {
        bearAmount: '0',
        bearBets: '0',
        bullAmount: '0',
        bullBets: '0',
        closeAt: '1626729461',
        closeBlock: '9303767',
        closeHash: '0x62268d7f26d1247df21cf4c28fd0f7ffc8f16ce4302fb52f83fbec536710014c',
        closePrice: '283.53',
        closeRoundId: '18446744073709659281',
        epoch: '102',
        failed: null,
        id: '102',
        lockAt: '1626729155',
        lockBlock: '9303665',
        lockHash: '0xab171a67ba3597594287a617878d72c9b28abc82569062b8d3ab92cca2b9ce6c',
        lockPrice: '282.97',
        lockRoundId: '18446744073709659265',
        position: 'Bull',
        startAt: '1626728849',
        startBlock: '9303563',
        startHash: '0xca83e0aaf3113ed18203b69e2ca7598c3df80acc9229aab50304d16c19965945',
        totalAmount: '0',
        totalBets: '0',
        bets: [],
      },
    }

    expect(transformBetResponse(betResponseWithRound)).toEqual({
      amount: 0.001030231215331515,
      block: 9318174,
      claimed: false,
      claimedAt: null,
      claimedADA: 0,
      claimedBlock: null,
      claimedHash: null,
      claimedNetADA: 0,
      createdAt: 1626772720,
      hash: '0xbf9a414080b76f1139e087a50d79535a5014c472e24850b1bfc767c6d92ac947',
      id: '0x1fd3a652f5d078add86e1d6f1c817fe0cd0541f5f3000000',
      position: 'Bull',
      updatedAt: 1626772720,
      round: {
        bearAmount: 0,
        bearBets: 0,
        bullAmount: 0,
        bullBets: 0,
        closeAt: 1626729461,
        closeBlock: 9303767,
        closeHash: '0x62268d7f26d1247df21cf4c28fd0f7ffc8f16ce4302fb52f83fbec536710014c',
        closePrice: 283.53,
        closeRoundId: '18446744073709659281',
        epoch: 102,
        failed: null,
        id: '102',
        lockAt: 1626729155,
        lockBlock: 9303665,
        lockHash: '0xab171a67ba3597594287a617878d72c9b28abc82569062b8d3ab92cca2b9ce6c',
        lockPrice: 282.97,
        lockRoundId: '18446744073709659265',
        position: 'Bull',
        startAt: 1626728849,
        startBlock: 9303563,
        startHash: '0xca83e0aaf3113ed18203b69e2ca7598c3df80acc9229aab50304d16c19965945',
        totalAmount: 0,
        totalBets: 0,
        bets: [],
      },
      user: {
        averageADA: 0.005,
        block: 9315031,
        createdAt: 1626763291,
        id: '0x335d6a2c3dd0c04a21f41d30c9ee75e640a87890',
        netADA: -0.0055,
        totalADA: 0.005,
        totalADABear: 0.005,
        totalADABull: 0,
        totalBets: 1,
        totalADAClaimed: 0.0045,
        totalBetsBear: 0,
        totalBetsBull: 1,
        totalBetsClaimed: 1,
        updatedAt: 1626763291,
        winRate: 100,
      },
    })
  })
})
