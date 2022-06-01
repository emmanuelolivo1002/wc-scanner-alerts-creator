const SCANNER_FIELDS = {
  AcornFlagScanner: [
    {
      fieldKey: "signal",
      label: "Signal",
      fieldType: "set",
      options: [
        {
          label: "Bullish Flag",
          value: [["signal", "$eq", 1]],
        },
        {
          label: "Bearish Flag",
          value: [["signal", "$eq", -1]],
        },
      ],
    },
  ],

  AcornSMDivergenceScanner: [
    //  buy and sell become BuySell
    {
      fieldKey: "BuySell",
      label: "Buy / Sell",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["buy", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["sell", "$eq", 1]],
        },
      ],
    },
  ],

  // ? Skipped: AdamMeshScanner
  // ? Skipped: BarryBurnsScanner

  BiocchiScanner: [
    {
      fieldKey: "state",
      label: "State",
      fieldType: "set",
      options: [
        {
          label: "Long",
          value: [["state", "$eq", 1]],
        },
        {
          label: "Flat",
          value: [
            ["state", "$neq", 1],
            ["state", "$neq", -1],
          ],
        },
        {
          label: "Short",
          value: [["state", "$eq", -1]],
        },
      ],
    },
  ],

  // ? Skipped: CatScanner

  CloudScanner: [
    {
      fieldKey: "ADX",
      label: "ADX",
      fieldType: "number",
    },
    // priceLocation two to one field mapping
    {
      fieldKey: "priceLocation",
      label: "Price Location",
      fieldType: "set",
      options: [
        {
          label: "New Above Cloud",
          value: [
            ["ichClTmood1", "$gt", 0],
            ["ichClTmood", "$eq", 1],
          ],
        },
        {
          label: "Above Cloud",
          value: [
            ["ichClTmood1", "$gt", 0],
            ["ichClTmood", "$neq", 1],
          ],
        },
        {
          label: "New Below Cloud",
          value: [
            ["ichClBmood1", "$lt", 0],
            ["ichClBmood", "$eq", 1],
          ],
        },
        {
          label: "Below Cloud",
          value: [
            ["ichClBmood1", "$lt", 0],
            ["ichClBmood", "$neq", 1],
          ],
        },
        {
          label: "In Cloud",
          value: [
            ["ichClTmood1", "$lte", 0],
            ["ichClBmood1", "$gte", 0],
          ],
        },
      ],
    },
    {
      fieldKey: "ichChimood1",
      label: "Chikou Direction",
      fieldType: "set",
      options: [
        {
          label: "Up",
          value: [["ichChimood1", "$eq", 1]],
        },
        {
          label: "Down",
          value: [["ichChimood1", "$neq", 1]],
        },
      ],
    },
    {
      fieldKey: "ichTrdmood1",
      label: "Trend Direction",
      fieldType: "set",
      options: [
        {
          label: "Up",
          value: [["ichTrdmood1", "$eq", 1]],
        },
        {
          label: "Down",
          value: [["ichTrdmood1", "$eq", -1]],
        },
        {
          label: "Neutral",
          value: [
            ["ichTrdmood1", "$neq", 1],
            ["ichTrdmood1", "$neq", -1],
          ],
        },
      ],
    },
    {
      fieldKey: "ichPrTrmood1",
      label: "X Pattern",
      fieldType: "set",
      options: [
        {
          label: "Turning Up",
          value: [["ichPrTrmood1", "$eq", 1]],
        },
        {
          label: "Turning Down",
          value: [["ichPrTrmood1", "$eq", -1]],
        },
        {
          label: "Crossed",
          value: [
            ["ichPrTrmood1", "$neq", 1],
            ["ichPrTrmood1", "$neq", -1],
          ],
        },
      ],
    },
    {
      fieldKey: "ichPrTemood1",
      label: "Turning Line",
      fieldType: "set",
      options: [
        {
          label: "Above",
          value: [["ichPrTemood1", "$eq", 1]],
        },
        {
          label: "Below",
          value: [["ichPrTemood1", "$eq", -1]],
        },
        {
          label: "Neutral",
          value: [
            ["ichPrTemood1", "$neq", 1],
            ["ichPrTemood1", "$neq", -1],
          ],
        },
      ],
    },
    {
      fieldKey: "ichPrKimood1",
      label: "Standard Line",
      fieldType: "set",
      options: [
        {
          label: "Above",
          value: [["ichPrKimood1", "$eq", 1]],
        },
        {
          label: "Below",
          value: [["ichPrKimood1", "$eq", -1]],
        },
        {
          label: "Neutral",
          value: [
            ["ichPrKimood1", "$neq", 1],
            ["ichPrKimood1", "$neq", -1],
          ],
        },
      ],
    },
  ],

  DivergenceCloudScanner: [
    {
      // longEntry and shortEntry become entry
      fieldKey: "entry",
      label: "Entry",
      fieldType: "set",
      options: [
        {
          label: "Long",
          value: [["longEntry", "$neq", null]],
        },
        {
          label: "Short",
          value: [["shortEntry", "$neq", null]],
        },
      ],
    },
  ],

  DivergenceDominatorScanner: [
    {
      fieldKey: "longEntryLvl",
      label: "LongEntryLvl",
      fieldType: "number",
    },
    {
      fieldKey: "longTP1",
      label: "LongTP1",
      fieldType: "number",
    },
    {
      fieldKey: "longTP2",
      label: "LongTP2",
      fieldType: "number",
    },
    {
      fieldKey: "longStopLoss",
      label: "LongStopLoss",
      fieldType: "number",
    },
    {
      fieldKey: "shortEntryLvl",
      label: "ShortEntryLvl",
      fieldType: "number",
    },
    {
      fieldKey: "shortTP1",
      label: "ShortTP1",
      fieldType: "number",
    },
    {
      fieldKey: "shortTP2",
      label: "ShortTP2",
      fieldType: "number",
    },
    {
      fieldKey: "shortStopLoss",
      label: "ShortStopLoss",
      fieldType: "number",
    },
    {
      // divergences, two to one mapping on frontend
      fieldKey: "divergences",
      label: "Divergences",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["bearishDiv", "$neq", "NaN"]],
        },
        {
          label: "Bearish",
          value: [["bullishDiv", "$neq", "NaN"]],
        },
      ],
    },
  ],

  // ? Skipped: DrKeithHeikinAshiScanner
  // ? Skipped: DrKeithSeasonalityScanner

  GKORKOScanner: [
    {
      fieldKey: "greenKnockOut",
      label: "Green Knock Out",
      fieldType: "number",
    },
    {
      fieldKey: "greenKnockOutTargetAdjust",
      label: "Green Knock Out Target Adjust",
      fieldType: "number",
    },
    {
      fieldKey: "greenKnockOutYellow",
      label: "Green Knock Out Yellow",
      fieldType: "number",
    },
    {
      fieldKey: "gKOHidderTargetLevel",
      label: "GKO Hidden Target Level",
      fieldType: "number",
    },
    {
      fieldKey: "redKnockOut",
      label: "Red Knock Out",
      fieldType: "number",
    },
    {
      fieldKey: "redKnockOutTargetAdjust",
      label: "Red Knock Out Target Adjust",
      fieldType: "number",
    },
    {
      fieldKey: "redKnockOutYellow",
      label: "Red Knock Out Yellow",
      fieldType: "number",
    },
    {
      fieldKey: "rKOHidderTargetLevel",
      label: "RKO Hidden Target Level",
      fieldType: "number",
    },
  ],

  GoNoGoScanner: [
    {
      fieldKey: "goNoGo",
      // goNoGo, many to one mapping on frontend
      label: "GoNoGo",
      fieldType: "set",
      options: [
        {
          label: "New Go",
          value: [["go", "$eq", 1]],
        },
        {
          label: "New NoGo",
          value: [["noGo", "$eq", 1]],
        },
        {
          label: "New GoFish",
          value: [["goFish", "$eq", 1]],
        },
      ],
    },
    {
      fieldKey: "state",
      label: "Trend",
      fieldType: "set",
      options: [
        {
          label: "NoGo",
          value: [
            ["state", "$gte", -2],
            ["state", "$lte", -1],
          ],
        },
        {
          label: "GoFish",
          value: [["state", "$eq", 0]],
        },
        {
          label: "Go",
          value: [
            ["state", "$gte", 1],
            ["state", "$lte", 2],
          ],
        },
      ],
    },
    {
      fieldKey: "notifications",
      // notifications, many to one mapping on frontend
      label: "Notifications",
      fieldType: "set",
      options: [
        {
          label: "Go Countertrend Correction",
          value: [["shortTermSell", "$eq", 1]],
        },
        {
          label: "NoGo Countertrend Correction",
          value: [["shortTermBuy", "$eq", 1]],
        },
        {
          label: "NoGo Continuation",
          value: [["sellEntry", "$eq", 1]],
        },
        {
          label: "Go Continuation",
          value: [["buyEntry", "$eq", 1]],
        },
      ],
    },
    {
      fieldKey: "squeeze",
      label: "Squeeze",
      fieldType: "set",
      options: [
        {
          label: "Squeeze 1",
          value: [["squeeze", "$eq", 1]],
        },
        {
          label: "Squeeze 2",
          value: [["squeeze", "$eq", 2]],
        },
        {
          label: "Squeeze 3",
          value: [["squeeze", "$eq", 3]],
        },
        {
          label: "Squeeze 4",
          value: [["squeeze", "$eq", 4]],
        },
        {
          label: "Squeeze 5",
          value: [["squeeze", "$eq", 5]],
        },
        {
          label: "Squeeze 6",
          value: [["squeeze", "$eq", 6]],
        },
        {
          label: "Squeeze Max",
          value: [["squeeze", "$eq", 7]],
        },
      ],
    },
  ],

  // TODO: Add 'Bars Ago'  number filters
  IRBScanner: [
    {
      fieldKey: "mswt",
      label: "MSWT",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["mswt", "$gt", 0]],
        },
        {
          label: "Bearish",
          value: [["mswt", "$lt", 0]],
        },
      ],
    },
    {
      fieldKey: "msbo",
      label: "MSBO",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["msbo", "$gt", 0]],
        },
        {
          label: "Bearish",
          value: [["msbo", "$lt", 0]],
        },
      ],
    },
    {
      fieldKey: "irb",
      label: "IRB",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["irb", "$gt", 0]],
        },
        {
          label: "Bearish",
          value: [["irb", "$lt", 0]],
        },
      ],
    },
    {
      fieldKey: "rirb",
      label: "RIRB",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["rirb", "$gt", 0]],
        },
        {
          label: "Bearish",
          value: [["rirb", "$lt", 0]],
        },
      ],
    },
  ],

  ITPScanner: [
    {
      fieldKey: "alert",
      label: "Alert",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["alert", "$eq", "Buy Alert"]],
        },
        {
          label: "Bearish",
          value: [["alert", "$eq", "Sell Alert"]],
        },
      ],
    },
    {
      fieldKey: "action",
      label: "Action",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["action", "$eq", "Buy"]],
        },
        {
          label: "Bearish",
          value: [["action", "$eq", "Sell"]],
        },
      ],
    },
    {
      fieldKey: "throttle",
      label: "Throttle",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["throttle", "$eq", "Up"]],
        },
        {
          label: "Bearish",
          value: [["throttle", "$eq", "Down"]],
        },
      ],
    },
    {
      fieldKey: "ultimate",
      label: "Ultimate",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["ultimate", "$eq", "Up"]],
        },
        {
          label: "Bearish",
          value: [["ultimate", "$eq", "Down"]],
        },
      ],
    },
    {
      fieldKey: "trend_1",
      // isElite
      label: "Trend One",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["trend_1", "$eq", "Buy"]],
        },
        {
          label: "Bearish",
          value: [["trend_1", "$eq", "Sell"]],
        },
      ],
    },
    {
      fieldKey: "trend_2",
      // isElite
      label: "Trend Two",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["trend_2", "$eq", "Buy"]],
        },
        {
          label: "Bearish",
          value: [["trend_2", "$eq", "Sell"]],
        },
      ],
    },
  ],

  // ? Skipped: KateStalterScanner

  MACScanner: [
    {
      fieldKey: "mac_width_$",
      label: "Mac Width",
      fieldType: "number",
    },
    {
      fieldKey: "trend_status",
      label: "Trend Status",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["trend_Status", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["trend_Status", "$eq", -1]],
        },
      ],
    },
    {
      fieldKey: "swing",
      label: "Swing",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["swing", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["swing", "$eq", -1]],
        },
      ],
    },
    {
      fieldKey: "2Bar_MAC",
      label: "2Bar MAC",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["2Bar_MAC", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["2Bar_MAC", "$eq", -1]],
        },
      ],
    },
    {
      fieldKey: "5Bar_MAC",
      label: "5Bar MAC",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["5Bar_MAC", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["5Bar_MAC", "$eq", -1]],
        },
      ],
    },
    {
      fieldKey: "1Bar_CMC",
      label: "1Bar CM",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["1Bar_CMC", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["1Bar_CMC", "$eq", -1]],
        },
      ],
    },
    {
      fieldKey: "2Bar_CMC",
      label: "2Bar CM",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["2Bar_CMC", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["2Bar_CMC", "$eq", -1]],
        },
      ],
    },
  ],

  // ? Skipped: SectorScanner
  // ? Skipped: SmartMoneyScanner

  STARCBandScanner: [
    {
      fieldKey: "starcPerc",
      label: "STARC %",
      fieldType: "number",
    },
  ],

  StrikeScanner: [
    //  longEntry and shortEntry become entry
    {
      fieldKey: "entry",
      label: "Entry",
      fieldType: "set",
      options: [
        {
          label: "Buy",
          value: [["longEntry", "$neq", null]],
        },
        {
          label: "Sell",
          value: [["shortEntry", "$neq", null]],
        },
      ],
    },
  ],

  ThreeSScanner: [
    {
      fieldKey: "topBreak",
      label: "Top Break",
      fieldType: "number",
    },
    {
      fieldKey: "topBreakoutLevel",
      label: "Top Breakout Level",
      fieldType: "number",
    },
    {
      fieldKey: "topStoplossLevel",
      label: "Top Stop Loss Level",
      fieldType: "number",
    },
    {
      fieldKey: "topTargetLevel1",
      label: "Top Target Level 1",
      fieldType: "number",
    },
    {
      fieldKey: "topTargetLevel2",
      label: "Top Target Level 2",
      fieldType: "number",
    },
    {
      fieldKey: "top1",
      label: "Top 1",
      fieldType: "number",
    },
    {
      fieldKey: "top2",
      label: "Top 2",
      fieldType: "number",
    },
    {
      fieldKey: "top3",
      label: "Top 3",
      fieldType: "number",
    },
    {
      fieldKey: "bottomBreak",
      label: "Bottom Break",
      fieldType: "number",
    },
    {
      fieldKey: "bottomBreakoutLevel",
      label: "Bottom Breakout Level",
      fieldType: "number",
    },
    {
      fieldKey: "bottomStoplossLevel",
      label: "Bottom Stop Loss Level",
      fieldType: "number",
    },
    {
      fieldKey: "bottomTargetLevel1",
      label: "Bottom Target Level 1",
      fieldType: "number",
    },
    {
      fieldKey: "bottomTargetLevel2",
      label: "Bottom Target Level 2",
      fieldType: "number",
    },
    {
      fieldKey: "bottom1",
      label: "Bottom 1",
      fieldType: "number",
    },
    {
      fieldKey: "bottom2",
      label: "Bottom 2",
      fieldType: "number",
    },
    {
      fieldKey: "bottom3",
      label: "Bottom 3",
      fieldType: "number",
    },
  ],

  TOLInsideCandleScanner: [
    {
      fieldKey: "insideCandle",
      label: "Inside Candle",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["insideCandle_Bullish", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["insideCandle_Bearish", "$eq", 1]],
        },
      ],
    },
  ],

  TOLMomentumScanner: [
    {
      fieldKey: "momentum",
      label: "Momentum",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["momentumC_Bullish", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["momentumC_Bearish", "$eq", 1]],
        },
      ],
    },
  ],

  TOLSuperScanner: [
    {
      fieldKey: "swingMomentum",
      label: "Swing Momentum",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["swingMom_Bullish", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["swingMom_Bearish", "$eq", 1]],
        },
      ],
    },
    {
      fieldKey: "moneyCandle",
      label: "Money Candle",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["moneyCandle_Bullish", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["moneyCandle_Bearish", "$eq", 1]],
        },
      ],
    },
    {
      fieldKey: "insideCandle",
      label: "Inside Candle",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["insideCandle_Bullish", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["insideCandle_Bearish", "$eq", 1]],
        },
      ],
    },
    {
      fieldKey: "momentumConsolidation",
      label: "Momentum Consolidation",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["momentumC_Bullish", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["momentumC_Bearish", "$eq", 1]],
        },
      ],
    },
  ],

  TOLSwingTradingScanner: [
    //  bullish and bearish become sentiment
    {
      fieldKey: "sentiment",
      label: "Sentiment",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["bullish", "$eq", 1]],
        },
        {
          label: "Bearish",
          value: [["bearish", "$eq", 1]],
        },
      ],
    },
  ],

  // ? Skipped: TradersPlanScanner
  // ? Skipped: TradeTrendScanner

  TRPScanner: [
    {
      fieldKey: "dot",
      label: "Dot",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["dot", "$eq", "Up"]],
        },
        {
          label: "Bearish",
          value: [["dot", "$eq", "Down"]],
        },
        {
          label: "New Bearish",
          value: [["dot", "$eq", "NewDown"]],
        },
        {
          label: "New Bullish",
          value: [["dot", "$eq", "NewUp"]],
        },
      ],
    },
    {
      fieldKey: "momentum",
      label: "Momentum",
      fieldType: "set",
      options: [
        {
          label: "Bullish",
          value: [["momentum", "$eq", "Up"]],
        },
        {
          label: "Bearish",
          value: [["momentum", "$eq", "Down"]],
        },
      ],
    },
    {
      fieldKey: "channel",
      label: "Channel",
      fieldType: "set",
      options: [
        {
          label: "Up",
          value: [["channel", "$eq", "Up"]],
        },
        {
          label: "Neutral",
          value: [["channel", "$eq", "Neutral"]],
        },
        {
          label: "Down",
          value: [["channel", "$eq", "Down"]],
        },
      ],
    },
    {
      fieldKey: "target1",
      label: "Target One",
      fieldType: "set",
      options: [
        {
          label: "Open",
          value: [["target1", "$eq", "Open"]],
        },
        {
          label: "Hit",
          value: [["target1", "$eq", "Hit"]],
        },
      ],
    },
    {
      fieldKey: "target2",
      label: "Target Two",
      fieldType: "set",
      options: [
        {
          label: "Open",
          value: [["target2", "$eq", "Open"]],
        },
        {
          label: "Hit",
          value: [["target2", "$eq", "Hit"]],
        },
      ],
    },
    {
      fieldKey: "position",
      label: "Position",
      fieldType: "set",
      options: [
        {
          label: "Open",
          value: [["position", "$eq", "Open"]],
        },
        {
          label: "Closed",
          value: [["position", "$eq", "Closed"]],
        },
      ],
    },
  ],

  VerticalXScanner: [
    {
      fieldKey: "lastSignalUp",
      label: "Last Signal Up",
      fieldType: "number",
    },
    {
      fieldKey: "lastSignalDown",
      label: "Last Signal Down",
      fieldType: "number",
    },
    {
      fieldKey: "avgVol",
      label: "Average Volume",
      fieldType: "number",
    },
    {
      fieldKey: "trendSignal",
      label: "VX Signal",
      fieldType: "set",
      options: [
        {
          label: "Overbought",
          value: [["trendSignal", "$eq", 1]],
        },
        {
          label: "Oversold",
          value: [["trendSignal", "$eq", -1]],
        },
      ],
    },
  ],

  VolatilityCrusherSignalScanner: [
    //  longEntry and shortEntry become entry
    {
      fieldKey: "entry",
      label: "Entry",
      fieldType: "set",
      options: [
        {
          label: "Buy",
          value: [["longEntry", "$neq", null]],
        },
        {
          label: "Sell",
          value: [["shortEntry", "$neq", null]],
        },
      ],
    },
  ],

  WCBreakoutScanner: [
    {
      fieldKey: "bullEntry",
      label: "Bull Entry",
      fieldType: "number",
    },
    {
      fieldKey: "bearEntry",
      label: "Bear Entry",
      fieldType: "number",
    },
  ],

  WealthSignalScanner: [
    {
      fieldKey: "lstSigUp",
      label: "Bullish Signal",
      fieldType: "number",
    },
    {
      fieldKey: "lstSigDown",
      label: "Bearish Signal",
      fieldType: "number",
    },
  ],

  WSIScanner: [
    {
      fieldKey: "wsiVal",
      label: "WSI Value",
      fieldType: "number",
    },
    {
      fieldKey: "wsiTextVal",
      label: "Strength Index",
      fieldType: "set",
      options: [
        {
          label: "Extremely Up",
          value: [["wsiTextVal", "$eq", 9]],
        },
        {
          label: "Up",
          value: [["wsiTextVal", "$eq", 7]],
        },
        {
          label: "Moderately Up",
          value: [["wsiTextVal", "$eq", 8]],
        },
        {
          label: "Extremely Flat",
          value: [["wsiTextVal", "$eq", 4]],
        },
        {
          label: "Flat",
          value: [["wsiTextVal", "$eq", 6]],
        },
        {
          label: "Moderately Flat",
          value: [["wsiTextVal", "$eq", 5]],
        },
        {
          label: "Moderately Down",
          value: [["wsiTextVal", "$eq", 2]],
        },
        {
          label: "Down",
          value: [["wsiTextVal", "$eq", 3]],
        },
        {
          label: "Extremely Down",
          value: [["wsiTextVal", "$eq", 1]],
        },
      ],
    },
    {
      fieldKey: "wsiTrend",
      label: "WSI Trend",
      fieldType: "set",
      options: [
        {
          label: "Up",
          value: [["wsiTrend", "$eq", 1]],
        },
        {
          label: "Down",
          value: [["wsiTrend", "$eq", -1]],
        },
      ],
    },
  ],

  WealthScanner: [
    {
      fieldKey: "wsDay",
      label: "Day WealthScore",
      fieldType: "number",
    },
    {
      fieldKey: "wsSwing",
      label: "Swing WealthScore",
      fieldType: "number",
    },
    {
      fieldKey: "wsPosition",
      label: "Position WealthScore",
      fieldType: "number",
    },
    {
      fieldKey: "wsBuyHold",
      label: "Investor WealthScore",
      fieldType: "number",
    },
  ],
};
