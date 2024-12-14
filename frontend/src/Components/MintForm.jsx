import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import useWeb3Interactions from "@/hooks/useWeb3Interactions";

const MintForm = () => {
  const { mintToken, isMinting } = useWeb3Interactions();
  const formik = useFormik({
    initialValues: {
      uri: "",
    },
    validationSchema: Yup.object().shape({
      uri: Yup.string()
        .required("Required")
        .min(8, "Must be at least 10 characters"),
    }),
    onSubmit: async (values) => {
      mintToken(values.uri);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const handleChange = (e) => {
    formik.setFieldTouched("uri", false);
    formik.handleChange(e);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mt-3 lg:mt-4 py-3 lg:py-4">
        <div className="flex flex-col gap-3 lg:gap-4 w-64">
          <Label htmlFor="uri">URI</Label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter URI"
              name="uri"
              onChange={handleChange}
              value={formik.values.uri}
              className={`w-full transition-colors
                ${
                  formik.errors.uri && formik.touched.uri
                    ? "border-red-500 focus:border-red-500 ring-red-500"
                    : "focus:border-blue-500 focus:ring-blue-500"
                }`}
              disabled={isMinting}
            />
            {formik.errors.uri && formik.touched.uri && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.uri}</p>
            )}
          </div>
          <Button type="submit" className="mt-4" disabled={isMinting}>
            Mint
          </Button>
        </div>
      </div>
    </form>
  );
};

export default MintForm;
