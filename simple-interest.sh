#!/usr/bin/env bash
# Simple interest calculator for beginners.
# Formula: SI = (P * R * T) / 100

echo "Simple Interest Calculator"
echo "SI = (P * R * T) / 100"
echo

read -r -p "Enter the principal (P): " principal
read -r -p "Enter the rate of interest (R) in percent: " rate
read -r -p "Enter the time period (T) in years: " time

# awk does the multiplication so decimal values such as 4.5 work.
simple_interest=$(awk -v p="$principal" -v r="$rate" -v t="$time" \
  'BEGIN { printf "%.2f", (p * r * t) / 100 }')

echo
echo "Simple Interest = $simple_interest"
