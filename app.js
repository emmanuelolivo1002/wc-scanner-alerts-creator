const scannerKeys = Object.keys(SCANNER_FIELDS);

$("#scanner-alert-form #scanner").html(function (e) {
  const options = scannerKeys.map(
    scannerOption => `<option value="${scannerOption}">${scannerOption}</option>`
  );

  return '<option value="">Select a Scanner</option>' + options.join("");
});

$("#scanner-alert-form #scanner").on("change", function (e) {
  const selectedScanner = e.target.value;
  const formFields = SCANNER_FIELDS[selectedScanner] || [];

  if (formFields.length)
    $("#custom-fields").html(function () {
      // Map through fields to create inputs
      return formFields
        .flatMap(field => {
          const { fieldKey, label, fieldType } = field;
          if (fieldType === "set") {
            const { options } = field;
            const renderedOptions = options
              .map(
                ({ value, label }) => `<option value='${JSON.stringify(value)}'>${label}</option>`
              )
              .join("");
            const fieldWrapper = `
                    <div class="flex flex-col max-w-xs">
                        <label for="${fieldKey}" class="text-lg">${label}: </label>
                        <select name="${fieldKey}" id="${fieldKey}" class="border-2 border-blue-500">
                           ${renderedOptions}
                        </select>
                     </div>`;

            return fieldWrapper;
          }
          return [];
        })
        .join("");
    });
  else $("#custom-fields").empty();
});

// Submit function
$("#create-alert").click(function (e) {
  e.preventDefault();
  // Get values from form
  const [fxObject, ...filters] = $("#scanner-alert-form").serializeArray();
  console.log(filters);
  const data = {
    symbol: "US.AAPL",
    fx: fxObject.value,
    timeframe: "60",
    filters: filters.map(({ name, value }) => JSON.parse(value)),
    conditions: [
      //   {
      //     fieldName: "WSI Value",
      //     operator: "Greater than",
      //     value: "10",
      //   },
      //   {
      //     fieldName: "Strength Index",
      //     operator: "Equal to",
      //     value: "Flat",
      //   },
      //   {
      //     fieldName: "WSI Trend",
      //     operator: "Equal to",
      //     value: "Down",
      //   },
    ],
    attributes: {
      push: true,
      email: false,
      sms: false,
    },
  };

  console.log($("#scanner-alert-form").serializeArray());
  console.log(data);
});
